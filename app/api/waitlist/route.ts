import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { apiWaitlistSchema } from '@/lib/validators'
import { appendWaitlistCsvEntry } from '@/lib/waitlistCsv'

// =============================================================
// JSON FILE STORAGE - No database required
// =============================================================

// Path to the waitlist JSON file
const WAITLIST_FILE = path.join(process.cwd(), 'waitlist.json')

// Type for waitlist entries
interface WaitlistEntry {
  name: string
  phoneNumber: string
  createdAt: string
}

// Read waitlist from JSON file
async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist or is invalid, return empty array
    return []
  }
}

// Write waitlist to JSON file
async function writeWaitlist(entries: WaitlistEntry[]): Promise<void> {
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2), 'utf-8')
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate with API schema (expects +91 prefix)
    const validationResult = apiWaitlistSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: validationResult.error.errors[0].message },
        { status: 400 }
      )
    }

    const { name, phoneNumber } = validationResult.data

    // Read existing waitlist
    const waitlist = await readWaitlist()

    // Check for duplicate phone number
    const existingEntry = waitlist.find(entry => entry.phoneNumber === phoneNumber)
    if (existingEntry) {
      return NextResponse.json(
        { success: false, error: 'This number is already on the waitlist.' },
        { status: 400 }
      )
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      name,
      phoneNumber,
      createdAt: new Date().toISOString(),
    }
    waitlist.push(newEntry)

    // Save updated waitlist to JSON
    await writeWaitlist(waitlist)

    // Also append to CSV file for sales team (non-blocking, won't fail the request)
    await appendWaitlistCsvEntry(newEntry)

    // Log to console for visibility
    console.log('\n' + '='.repeat(50))
    console.log('📝 NEW WAITLIST SIGNUP')
    console.log('='.repeat(50))
    console.log(`👤 Name: ${name}`)
    console.log(`📞 Phone: ${phoneNumber}`)
    console.log(`🕐 Time: ${newEntry.createdAt}`)
    console.log(`📊 Total signups: ${waitlist.length}`)
    console.log('='.repeat(50) + '\n')

    return NextResponse.json(
      { success: true },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in waitlist signup:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

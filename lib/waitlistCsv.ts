import { promises as fs } from 'fs'
import path from 'path'

const CSV_PATH = path.join(process.cwd(), 'waitlist.csv')
const CSV_HEADER = 'name,phoneNumber,createdAt\n'

interface WaitlistCsvEntry {
  name: string
  phoneNumber: string
  createdAt: string
}

/**
 * Escapes a value for CSV format.
 * Wraps in quotes and escapes any internal quotes.
 */
function escapeCsvValue(value: string): string {
  // If value contains comma, quote, or newline, wrap in quotes
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    // Escape any internal quotes by doubling them
    return `"${value.replace(/"/g, '""')}"`
  }
  // Always wrap in quotes for consistency and safety
  return `"${value}"`
}

/**
 * Checks if the CSV file exists and has content.
 * If not, creates it with the header row.
 */
async function ensureCsvExists(): Promise<void> {
  try {
    const stats = await fs.stat(CSV_PATH)
    // File exists, check if it has content
    if (stats.size === 0) {
      await fs.writeFile(CSV_PATH, CSV_HEADER, 'utf-8')
    }
  } catch {
    // File doesn't exist, create it with header
    await fs.writeFile(CSV_PATH, CSV_HEADER, 'utf-8')
  }
}

/**
 * Appends a new waitlist entry to the CSV file.
 * This function is designed to not throw errors - it logs them instead
 * so the main API response is not affected.
 */
export async function appendWaitlistCsvEntry(entry: WaitlistCsvEntry): Promise<void> {
  try {
    // Ensure CSV file exists with header
    await ensureCsvExists()

    // Format the CSV line
    const csvLine = `${escapeCsvValue(entry.name)},${escapeCsvValue(entry.phoneNumber)},${escapeCsvValue(entry.createdAt)}\n`

    // Append to the CSV file
    await fs.appendFile(CSV_PATH, csvLine, 'utf-8')

    console.log(`📄 CSV: Entry appended to waitlist.csv`)
  } catch (error) {
    // Log error but don't throw - we don't want to break the API response
    console.error('⚠️ CSV: Failed to append entry to waitlist.csv:', error)
  }
}


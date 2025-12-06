import { z } from 'zod'

// Client-side validation schema
// Phone number: exactly 10 digits (user input only, NO +91 prefix)
export const waitlistSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
})

// API validation schema
// Phone number: expects full format with +91 prefix
export const apiWaitlistSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  phoneNumber: z
    .string()
    .regex(/^\+91[0-9]{10}$/, 'Invalid phone number'),
})

export type WaitlistInput = z.infer<typeof waitlistSchema>
export type ApiWaitlistInput = z.infer<typeof apiWaitlistSchema>

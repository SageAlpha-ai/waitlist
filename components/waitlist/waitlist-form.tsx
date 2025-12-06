'use client'

import * as React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export function WaitlistForm() {
  const [isSuccess, setIsSuccess] = React.useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      const payload = {
        name: data.name,
        phoneNumber: `+91${data.phoneNumber}`,
      }

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to join waitlist')
      }

      setIsSuccess(true)
      toast({
        title: 'Success!',
        description: "You've been added to the waitlist.",
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
        variant: 'destructive',
      })
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8 animate-fade-up">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white-lilac flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-primary-navy" />
        </div>
        <h2 className="text-2xl font-bold text-primary-navy mb-2">
          You&apos;re on the List!
        </h2>
        <p className="text-text-secondary">
          Thank you for joining. We&apos;ll notify you when we launch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-8">
        {/* SageAlpha Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/sagealpha-logo.png"
            alt="SageAlpha.ai"
            width={180}
            height={48}
            className="w-[180px] h-auto object-contain"
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-primary-navy mb-1">Join the Waitlist</h2>
        <p className="text-text-secondary">Be the first to experience the future of AI research</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-primary-navy">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber" className="text-primary-navy">Mobile Number (India +91)</Label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-border-muted bg-white-lilac text-text-secondary text-sm font-medium">
              +91
            </span>
            <Input
              id="phoneNumber"
              type="tel"
              inputMode="numeric"
              placeholder="Enter 10-digit number"
              maxLength={10}
              {...register('phoneNumber')}
              className="rounded-l-none"
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-sm text-red-600">{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full group"
        isLoading={isSubmitting}
      >
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
      </Button>

      <p className="text-center text-xs text-text-secondary/60">
        By joining, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  )
}

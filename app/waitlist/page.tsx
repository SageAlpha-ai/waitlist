import { WaitlistForm } from '@/components/waitlist/waitlist-form'

export default function WaitlistPage() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 bg-white-lilac">
      {/* Subtle gradient accent at top */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 stripe-gradient"
        aria-hidden="true"
      />
      
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl p-8 shadow-stripe-md border border-border-muted">
          <WaitlistForm />
        </div>
      </div>
    </main>
  )
}

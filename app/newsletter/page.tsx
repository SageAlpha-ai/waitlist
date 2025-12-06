import { Mail, Bell, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white-lilac border border-border-muted mb-6">
            <Mail className="h-8 w-8 text-primary-navy" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy mb-6">
            SageAlpha.ai{' '}
            <span className="gradient-text">Newsletter</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Stay ahead of the markets with curated AI-driven insights on NSE & BSE, 
            delivered directly to your inbox.
          </p>

          {/* Coming Soon Notice */}
          <div className="bg-white-lilac border border-border-muted rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-gradient-indigo" />
              <span className="text-sm font-semibold text-primary-navy">Coming Soon</span>
            </div>
            <p className="text-text-secondary">
              We&apos;ll publish our first issues soon. Join the waitlist to be notified 
              when the newsletter goes live.
            </p>
          </div>

          {/* CTA */}
          <Link href="/waitlist">
            <Button variant="default" size="xl" className="group">
              Join Waitlist
              <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 md:py-24 bg-white-lilac">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-navy text-center mb-12">
            What to Expect
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 border border-border-muted shadow-stripe">
              <div className="w-10 h-10 rounded-xl bg-primary-navy flex items-center justify-center mb-4">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-navy mb-2">
                Market Analysis
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Weekly deep-dives into NSE & BSE trends, powered by AI-driven insights 
                and expert analysis.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 border border-border-muted shadow-stripe">
              <div className="w-10 h-10 rounded-xl bg-primary-navy flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-navy mb-2">
                Stock Picks
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Curated stock recommendations based on quantitative analysis and 
                machine learning models.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 border border-border-muted shadow-stripe">
              <div className="w-10 h-10 rounded-xl bg-primary-navy flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-navy mb-2">
                Quick Insights
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Bite-sized daily updates on market movements, sector rotations, 
                and breaking news.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


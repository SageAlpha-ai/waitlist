import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white-lilac border border-border-muted mb-6 animate-fade-up">
              <Sparkles className="h-4 w-4 text-gradient-indigo" />
              <span className="text-sm font-medium text-primary-navy">AI-Powered Equity Research Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-6 animate-fade-up animate-delay-100">
              Transform Your Research with{' '}
              <span className="gradient-text">
                SageAlpha AI
              </span>
            </h1>

            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animate-delay-200">
              SageAlpha.ai empowers investors and analysts to adapt, evolve, and thrive in rapidly changing markets. 
              Harness the power of AI to unlock new investment insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animate-delay-300">
              <Link href="/waitlist">
                <Button variant="default" size="xl" className="w-full sm:w-auto group">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border-muted animate-fade-up animate-delay-400">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary-navy">10x</div>
                <div className="text-sm text-text-secondary">Faster Insights</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary-navy">99.9%</div>
                <div className="text-sm text-text-secondary">Uptime</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary-navy">24/7</div>
                <div className="text-sm text-text-secondary">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - AI Dashboard Card with Gradient Border */}
          <div className="relative animate-slide-in-right">
            {/* Gradient Border Container */}
            <div className="stripe-gradient rounded-3xl p-[3px] shadow-stripe-xl">
              {/* Dashboard Card */}
              <div className="bg-white rounded-[22px] p-6">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary-navy">AI Dashboard</h3>
                  <p className="text-sm text-text-secondary">Real-time analytics</p>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Analytics Metric */}
                  <div className="bg-white-lilac rounded-xl p-4 border border-border-muted">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-indigo flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-text-secondary">Analytics</span>
                    </div>
                    <div className="text-2xl font-bold text-primary-navy">+127%</div>
                    <div className="text-xs text-text-secondary">Growth</div>
                  </div>

                  {/* Security Metric */}
                  <div className="bg-white-lilac rounded-xl p-4 border border-border-muted">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gradient-indigo to-gradient-end flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-text-secondary">Security</span>
                    </div>
                    <div className="text-2xl font-bold text-primary-navy">100%</div>
                    <div className="text-xs text-text-secondary">Protected</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-white-lilac rounded-xl p-4 border border-border-muted">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary-navy">Performance Metrics</span>
                    <span className="text-xs text-text-secondary">Last 7 days</span>
                  </div>
                  <div className="space-y-3">
                    {/* Bar 1 */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-text-secondary">AI Processing</span>
                        <span className="text-primary-navy font-medium">94%</span>
                      </div>
                      <div className="h-2 bg-border-muted rounded-full overflow-hidden">
                        <div className="h-full w-[94%] bg-gradient-to-r from-gradient-start via-gradient-indigo to-gradient-end rounded-full" />
                      </div>
                    </div>
                    {/* Bar 2 */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-text-secondary">Data Accuracy</span>
                        <span className="text-primary-navy font-medium">98%</span>
                      </div>
                      <div className="h-2 bg-border-muted rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-gradient-to-r from-gradient-indigo to-gradient-end rounded-full" />
                      </div>
                    </div>
                    {/* Bar 3 */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-text-secondary">Insight Speed</span>
                        <span className="text-primary-navy font-medium">87%</span>
                      </div>
                      <div className="h-2 bg-border-muted rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-gradient-to-r from-gradient-start to-gradient-indigo rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 bg-white border border-border-muted px-4 py-2 rounded-full shadow-stripe-md z-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-primary-navy text-sm font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

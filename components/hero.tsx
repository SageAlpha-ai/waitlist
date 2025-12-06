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

          {/* Right Column - Video Card with Gradient Border */}
          <div className="relative animate-slide-in-right">
            {/* Gradient Border Container */}
            <div className="stripe-gradient rounded-3xl p-[3px] shadow-stripe-xl">
              {/* Video Container */}
              <div className="bg-white rounded-[22px] overflow-hidden">
                <div className="relative aspect-[16/10] w-full">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/hero-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 bg-white border border-border-muted px-4 py-2 rounded-full shadow-stripe-md z-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-primary-navy text-sm font-medium">Live Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

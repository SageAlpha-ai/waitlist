import { Brain, LineChart, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Transform raw data into actionable insights with our advanced machine learning algorithms. Make data-driven decisions with confidence.',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Process and analyze data in real-time. Get instant alerts and notifications when important patterns emerge in your business.',
  },
  {
    icon: LineChart,
    title: 'Predictive Forecasting',
    description: 'Anticipate market trends and customer behavior with our predictive models. Stay ahead of the competition with forward-looking insights.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption. Your data is protected with the highest industry standards and compliance certifications.',
  },
]

export function ProductSection() {
  return (
    <section id="product" className="py-24 md:py-32 bg-white-lilac">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border-muted mb-6">
            <span className="text-sm font-medium text-primary-navy">Product Features</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
            Powerful Features for{' '}
            <span className="gradient-text">Modern Businesses</span>
          </h2>

          <p className="text-lg text-text-secondary">
            Everything you need to harness the power of AI and drive your business forward. 
            Built for scale, designed for simplicity.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-border-muted hover:border-[#D1D5DB] transition-colors duration-150 shadow-stripe"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-navy flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-primary-navy mb-3">
                {feature.title}
              </h3>

              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary/60 text-sm">
            And many more features coming soon...
          </p>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started with AI',
    price: '$49',
    period: '/month',
    features: [
      'Up to 5 team members',
      '10,000 API requests/month',
      'Basic analytics dashboard',
      'Email support',
      'Standard integrations',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For growing businesses with advanced needs',
    price: '$149',
    period: '/month',
    features: [
      'Up to 25 team members',
      '100,000 API requests/month',
      'Advanced analytics & insights',
      'Priority support',
      'Custom integrations',
      'API access',
      'Dedicated account manager',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited team members',
      'Unlimited API requests',
      'Enterprise analytics suite',
      '24/7 dedicated support',
      'Custom development',
      'On-premise deployment',
      'SLA guarantee',
      'Security audit & compliance',
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white-lilac">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border-muted mb-6">
            <span className="text-sm font-medium text-primary-navy">Pricing Plans</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>

          <p className="text-lg text-text-secondary">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-150 shadow-stripe ${
                plan.popular
                  ? 'border-primary-navy shadow-stripe-md'
                  : 'border-border-muted hover:border-[#D1D5DB]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary-navy text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-primary-navy mb-1">{plan.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary-navy">{plan.price}</span>
                  <span className="text-text-secondary">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white-lilac flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary-navy" />
                    </div>
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <div className="text-center text-sm text-primary-navy font-medium bg-white-lilac rounded-full py-2">
                  🚀 Coming Soon – Join Waitlist
                </div>
                <Link href="/waitlist" className="block">
                  <Button
                    variant={plan.popular ? 'default' : 'outline'}
                    className="w-full"
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

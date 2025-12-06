export function GrowthStatsSection() {
  const stats = [
    {
      number: '10+',
      label: 'Accredited Investors Onboard',
    },
    {
      number: '100+',
      label: 'Research Analysts on Waitlist',
    },
    {
      number: '2000+',
      label: 'Investment Advisors on Waitlist',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white-lilac border border-border-muted mb-6">
            <span className="text-sm font-medium text-primary-navy">Growing Community</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy">
            Trusted by{' '}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-white border border-border-muted hover:border-[#D1D5DB] transition-colors duration-150 shadow-stripe"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-navy mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

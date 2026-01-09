import { FileText, Download, BookOpen, TrendingUp, BarChart3, Lightbulb, Target, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function WhitepaperPage() {
  const pdfUrl = 'https://drive.google.com/file/d/1TG34Za4vkYawq_IfHpIiz8g0fwCNj6Xi/view?usp=sharing'
  const pdfViewUrl = 'https://drive.google.com/file/d/1TG34Za4vkYawq_IfHpIiz8g0fwCNj6Xi/view?usp=sharing'

  const keyTopics = [
    {
      icon: TrendingUp,
      title: 'AI-Powered Market Analysis',
      description: 'Discover how advanced machine learning algorithms analyze NSE & BSE markets to provide actionable insights and predictions.',
    },
    {
      icon: BarChart3,
      title: 'Quantitative Research Methodology',
      description: 'Learn about our data-driven approach to equity research, combining traditional analysis with cutting-edge AI technology.',
    },
    {
      icon: Lightbulb,
      title: 'Investment Strategy Framework',
      description: 'Understand the strategic framework that guides our stock recommendations and portfolio optimization techniques.',
    },
    {
      icon: Target,
      title: 'Risk Management & Compliance',
      description: 'Explore how we integrate risk assessment and regulatory compliance into our AI-driven research platform.',
    },
    {
      icon: Zap,
      title: 'Real-Time Market Intelligence',
      description: 'See how real-time data processing and analysis enable faster decision-making in volatile market conditions.',
    },
    {
      icon: BookOpen,
      title: 'Case Studies & Performance Metrics',
      description: 'Review detailed case studies showcasing the effectiveness of our AI-powered research methodology.',
    },
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Top Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Small Title */}
          <p className="text-sm text-text-secondary mb-6">
            SageAlpha Whitepapers
          </p>

          {/* Summary */}
          <p className="text-lg text-text-secondary max-w-3xl mb-12 leading-relaxed">
            A comprehensive guide to AI-powered equity research and how SageAlpha.ai is 
            transforming the way investors analyze NSE & BSE markets through advanced 
            machine learning and quantitative analysis.
          </p>

          {/* THE AUTONOMOUS ANALYST Heading with PDF Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-8 border-b border-border-muted">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy">
              THE AUTONOMOUS ANALYST
            </h1>
            <a
              href={pdfUrl}
              download="SageAlpha-Whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="default" 
                size="lg" 
                className="group bg-gradient-to-r from-[#6a8dff] via-[#8f7bff] to-[#c56bff] hover:opacity-90 border-0 shadow-lg whitespace-nowrap"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white-lilac rounded-2xl p-8 md:p-12 border border-border-muted">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
              About This WhitePaper
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                This whitepaper provides an in-depth exploration of SageAlpha.ai&apos;s 
                revolutionary approach to equity research. We delve into the technical 
                foundations, methodologies, and real-world applications of our AI-powered 
                platform designed specifically for NSE and BSE market analysis.
              </p>
              <p>
                Whether you&apos;re an institutional investor, financial analyst, fund manager, 
                or technology enthusiast, this document offers valuable insights into how 
                artificial intelligence is reshaping the landscape of financial market 
                research and investment decision-making.
              </p>
              <p>
                Our comprehensive analysis covers everything from data collection and 
                processing pipelines to advanced machine learning models, risk management 
                frameworks, and performance validation metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="py-12 md:py-16 bg-white-lilac">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Key Topics Covered
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Explore the comprehensive content included in our whitepaper
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyTopics.map((topic, index) => (
              <Card key={index} className="border-border-muted hover:border-[#D1D5DB] transition-colors duration-150 shadow-stripe">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary-navy flex items-center justify-center mb-4">
                    <topic.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary-navy">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary leading-relaxed">
                    {topic.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#6a8dff] via-[#8f7bff] to-[#c56bff] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Dive Deeper?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Download the complete whitepaper to explore our AI-powered equity research 
              methodology in detail and discover how SageAlpha.ai can transform your 
              investment research process.
            </p>
            <a
              href={pdfUrl}
              download="SageAlpha-Whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="default" 
                size="xl" 
                className="bg-white text-primary-navy hover:bg-white-lilac border-0 shadow-lg group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                Download WhitePaper Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


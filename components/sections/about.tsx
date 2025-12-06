import { Target, Users, Lightbulb } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white-lilac border border-border-muted mb-6">
              <span className="text-sm font-medium text-primary-navy">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
              Building the Future of{' '}
              <span className="gradient-text">Intelligent Business</span>
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              At Sagealpha.ai, we believe that change is the only constant. In a world where 
              businesses must continuously adapt, we provide the AI-powered tools and insights 
              that help organizations not just survive, but thrive.
            </p>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Our mission is to democratize access to cutting-edge AI technology, making it 
              accessible, intuitive, and impactful for businesses of all sizes. We&apos;re committed 
              to helping you navigate the complexities of tomorrow, today.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-navy">10+</div>
                <div className="text-sm text-text-secondary mt-1">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-navy">12</div>
                <div className="text-sm text-text-secondary mt-1">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-navy">2024</div>
                <div className="text-sm text-text-secondary mt-1">Founded</div>
              </div>
            </div>
          </div>

          {/* Right - Visual Cards */}
          <div className="relative">
            <div className="grid gap-4">
              <div className="bg-white rounded-2xl p-6 border border-border-muted hover:border-[#D1D5DB] transition-colors duration-150 shadow-stripe">
                <div className="w-10 h-10 rounded-xl bg-primary-navy flex items-center justify-center mb-4">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-navy mb-2">Our Vision</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  To be the leading AI partner for businesses navigating digital transformation, 
                  enabling smarter decisions and sustainable growth.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border-muted hover:border-[#D1D5DB] transition-colors duration-150 shadow-stripe">
                <div className="w-10 h-10 rounded-xl bg-primary-navy flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-navy mb-2">Our Team</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  A diverse group of engineers, data scientists, and business experts united by 
                  the passion for innovation and excellence.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border-muted hover:border-[#D1D5DB] transition-colors duration-150 shadow-stripe">
                <div className="w-10 h-10 rounded-xl bg-primary-navy flex items-center justify-center mb-4">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-navy mb-2">Our Values</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Innovation, integrity, and impact. We build technology that matters and 
                  partnerships that last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

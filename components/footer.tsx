import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: 'mailto:contact@sagealpha.ai', label: 'Contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand with Logo */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/">
              <Image
                src="/assets/sagealpha-logo.png"
                alt="SageAlpha.ai"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-text-secondary text-sm">Change is the only constant</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-primary-navy text-sm transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-border-muted text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} SageAlpha.ai. All rights reserved.
          </p>
          
          {/* Legal Disclaimer */}
          <p className="text-text-secondary/60 text-xs mt-4 max-w-2xl mx-auto leading-relaxed">
            SageAlpha provides AI-powered insights for informational purposes only and does not offer 
            personalized financial, investment, or legal advice. All investment decisions should be 
            made based on independent judgment or consultation with a licensed professional.
          </p>
        </div>
      </div>
    </footer>
  )
}

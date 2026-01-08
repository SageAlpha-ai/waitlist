'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/#about', label: 'About Us' },
  { href: '/#product', label: 'Product' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/newsletter', label: 'Whitepaper' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/#', '')
      
      if (pathname !== '/') {
        window.location.href = href
        return
      }
      
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white',
        isScrolled && 'border-b border-border-muted shadow-stripe-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 pl-0 sm:pl-0 lg:pl-0">
            <div className="flex-shrink-0">
              <Image
                src="/assets/sagealpha-logo.png"
                alt="SageAlpha.ai"
                width={165}
                height={44}
                className="w-[135px] sm:w-[150px] lg:w-[165px] h-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-text-secondary hover:text-primary-navy transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://blue-cliff-080a39310.4.azurestaticapps.net/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[#6a8dff] via-[#8f7bff] to-[#c56bff] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Get Product Demo
            </a>
            <Link href="/waitlist">
              <Button variant="default" size="default">
                Join Waitlist
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-primary-navy hover:bg-white-lilac"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-up">
            <div className="flex flex-col gap-1 bg-white rounded-2xl p-3 border border-border-muted shadow-stripe-md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-text-secondary hover:text-primary-navy hover:bg-white-lilac font-medium py-2.5 px-4 rounded-xl transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="http://localhost:8000/login"
                target="_self"
                rel="noopener noreferrer"
                onClick={(e) => handleNavClick(e, 'http://localhost:8000/login')}
                className="text-white font-semibold py-2.5 px-4 rounded-xl transition hover:opacity-90 bg-gradient-to-r from-[#6a8dff] via-[#8f7bff] to-[#c56bff] text-center"
              >
                Get Started
              </a>
              <div className="pt-2 mt-1 border-t border-border-muted">
                <Link href="/waitlist" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="default" className="w-full">
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

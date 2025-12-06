import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SageAlpha.ai - AI-Powered Equity Research Platform',
  description: 'SageAlpha.ai is an AI-powered equity research platform helping investors and analysts thrive. Join our waitlist to be the first to experience the future.',
  keywords: ['AI', 'artificial intelligence', 'equity research', 'investment', 'fintech', 'machine learning'],
  authors: [{ name: 'SageAlpha.ai' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    other: [
      { rel: 'icon', url: '/logo-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  openGraph: {
    title: 'SageAlpha.ai - AI-Powered Equity Research Platform',
    description: 'Join the waitlist for the next generation of AI-powered equity research.',
    url: 'https://sagealpha.ai',
    siteName: 'SageAlpha.ai',
    type: 'website',
  },
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}


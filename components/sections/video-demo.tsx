'use client'

import * as React from 'react'

export function VideoDemoSection() {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const sectionRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current

    if (!video || !section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              console.log('Autoplay blocked by browser')
            })
          } else {
            video.pause()
          }
        })
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section 
      id="demo" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-white-lilac"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border-muted mb-6">
            <span className="text-sm font-medium text-primary-navy">Product Demo</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6">
            See SageAlpha{' '}
            <span className="gradient-text">in Action</span>
          </h2>

          <p className="text-lg text-text-secondary">
            Watch how SageAlpha&apos;s AI-powered chatbot transforms customer interactions 
            and delivers intelligent responses in real-time.
          </p>
        </div>

        {/* Video Container */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-white border border-border-muted shadow-stripe-md">
            <video
              ref={videoRef}
              muted
              playsInline
              controls
              loop
              className="w-full h-auto block"
            >
              <source src="/videos/sagealpha-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Caption */}
          <p className="text-center text-text-secondary/60 text-sm mt-6">
            30-second demo showcasing SageAlpha&apos;s intelligent conversation capabilities
          </p>
        </div>
      </div>
    </section>
  )
}

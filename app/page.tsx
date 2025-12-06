import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/sections/about'
import { ProductSection } from '@/components/sections/product'
import { VideoDemoSection } from '@/components/sections/video-demo'
import { GrowthStatsSection } from '@/components/sections/growth-stats'
import { PricingSection } from '@/components/sections/pricing'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductSection />
      <VideoDemoSection />
      <GrowthStatsSection />
      <PricingSection />
    </>
  )
}

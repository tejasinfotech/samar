import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import CategoriesSection from '@/components/CategoriesSection'
import ManPowerSection from '@/components/ManPowerSection'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'SAMAR EXPORTS | Premium Industrial Minerals & Wooden Products',
  description: 'Global exporter of premium industrial minerals, silica sand, dolomite, wooden boxes, and hardwood pallets. ISO certified. Serving 50+ countries.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <ManPowerSection />
      <CTASection />
    </div>
  )
}

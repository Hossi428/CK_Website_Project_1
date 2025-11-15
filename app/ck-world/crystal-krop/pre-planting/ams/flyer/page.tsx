import { Metadata } from 'next'
import AMSFlyerContent from './flyer-content'

export const metadata: Metadata = {
  title: 'CK® Crystal Krop™ AMS Product Flyer | High-Solubility Ammonium Sulfate',
  description: 'Download the CK® Crystal Krop™ AMS product flyer featuring high-solubility ammonium sulfate for fertigation efficiency and balanced N-S nutrition.',
}

export default function AMSFlyerPage() {
  return <AMSFlyerContent />
}

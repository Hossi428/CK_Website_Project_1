import { Metadata } from 'next'
import AMNFlyerContent from './flyer-content'

export const metadata: Metadata = {
  title: 'CK® Crystal Krop™ AMN Product Flyer | Granular Nitrogen Fertilizer',
  description: 'Download the CK® Crystal Krop™ AMN product flyer featuring granular nitrogen fertilizer for rapid and sustained crop growth.',
}

export default function AMNFlyerPage() {
  return <AMNFlyerContent />
}

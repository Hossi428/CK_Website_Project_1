import { Metadata } from 'next'
import DAPFlyerContent from './flyer-content'

export const metadata: Metadata = {
  title: 'CK® Crystal Krop™ DAP Product Flyer | High-Phosphorus Granular Fertilizer',
  description: 'Download the CK® Crystal Krop™ DAP product flyer featuring high-phosphorus granular fertilizer for strong root growth and early crop establishment.',
}

export default function DAPFlyerPage() {
  return <DAPFlyerContent />
}

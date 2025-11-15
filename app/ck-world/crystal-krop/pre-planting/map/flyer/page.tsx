import { Metadata } from 'next'
import MAPFlyerContent from './flyer-content'

export const metadata: Metadata = {
  title: 'CK® Crystal Krop™ MAP Product Flyer | High-Phosphorus Water-Soluble Fertilizer',
  description: 'Download the CK® Crystal Krop™ MAP product flyer featuring high-phosphorus water-soluble fertilizer for early growth and root development.',
}

export default function MAPFlyerPage() {
  return <MAPFlyerContent />
}

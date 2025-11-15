import { Metadata } from 'next'
import AMSGrFlyerContent from './flyer-content'

export const metadata: Metadata = {
  title: 'CK® Crystal Krop™ AMS Gr Product Flyer | Granular Ammonium Sulfate for Efficient N-S Nutrition',
  description: 'Download the CK® Crystal Krop™ AMS Gr product flyer featuring high-purity granular ammonium sulfate for soil application and fertigation.',
}

export default function AMSGrFlyerPage() {
  return <AMSGrFlyerContent />
}

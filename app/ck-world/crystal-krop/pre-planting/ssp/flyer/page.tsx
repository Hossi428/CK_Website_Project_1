import { Metadata } from "next"
import SSPFlyerContent from "./flyer-content"

export const metadata: Metadata = {
  title: "CK® Crystal Krop™ SSP Product Flyer",
  description: "Reliable Solid Single Superphosphate Fertilizer for Soil Fertility, Crop Establishment, and Flexible Application",
}

export default function SSPFlyerPage() {
  return <SSPFlyerContent />
}

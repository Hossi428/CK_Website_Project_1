import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function AMNFlyerPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container py-8">
        {/* Header with Back Button and Download */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/ck-world/crystal-krop/pre-planting/amn">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Product
            </Button>
          </Link>

          <a href="/images/amn-flyer.jpeg" download="CK-Crystal-Krop-AMN-Flyer.jpeg">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Download className="h-4 w-4 mr-2" />
              Download Flyer
            </Button>
          </a>
        </div>

        {/* Flyer Display */}
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
          <Image
            src="/images/amn-flyer.jpeg"
            alt="CK® Crystal Krop ™ AMN Product Flyer"
            width={1200}
            height={1600}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Mobile Download Button */}
        <div className="mt-6 text-center md:hidden">
          <a href="/images/amn-flyer.jpeg" download="CK-Crystal-Krop-AMN-Flyer.jpeg">
            <Button className="bg-emerald-600 hover:bg-emerald-700 w-full max-w-sm">
              <Download className="h-4 w-4 mr-2" />
              Download Flyer
            </Button>
          </a>
        </div>
      </main>
    </div>
  )
}

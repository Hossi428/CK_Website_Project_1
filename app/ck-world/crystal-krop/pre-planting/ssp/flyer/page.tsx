'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function SSPFlyerPage() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/ssp-flyer.jpg'
    link.download = 'CK-Crystal-Krop-SSP-Flyer.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/ck-world/crystal-krop/pre-planting/ssp">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to SSP
            </Button>
          </Link>
          <Button
            onClick={handleDownload}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Flyer
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold">
              CK® Crystal Krop™ SSP Product Flyer
            </h1>
            <p className="text-lg md:text-xl text-emerald-50">
              Reliable Solid Single Superphosphate Fertilizer for Soil Fertility and Crop Establishment
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden border">
            <Image
              src="/images/ssp-flyer.jpg"
              alt="CK® Crystal Krop™ SSP Product Flyer"
              width={1200}
              height={1600}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="text-center md:hidden">
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full max-w-md"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Flyer
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

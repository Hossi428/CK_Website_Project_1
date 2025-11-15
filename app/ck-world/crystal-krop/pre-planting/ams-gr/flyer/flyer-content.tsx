'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function AMSGrFlyerContent() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/ams-gr-flyer.jpg'
    link.download = 'CK-Crystal-Krop-AMS-Gr-Flyer.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/ck-world/crystal-krop/pre-planting/ams-gr">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Product
            </Button>
          </Link>
          <Button 
            onClick={handleDownload}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Flyer
          </Button>
        </div>
      </header>

      <main className="container py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            CK® Crystal Krop™ AMS Gr Product Flyer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Granular Ammonium Sulfate for Efficient N-S Nutrition and Improved Handling
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
            <Image
              src="/images/ams-gr-flyer.jpg"
              alt="CK® Crystal Krop™ AMS Gr Product Flyer"
              width={1200}
              height={1600}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="text-center">
            <Button 
              onClick={handleDownload}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Complete Flyer
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

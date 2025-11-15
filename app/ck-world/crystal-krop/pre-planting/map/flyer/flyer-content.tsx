'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function MAPFlyerContent() {
  const handleDownload = () => {
    // Download page 1
    const link1 = document.createElement('a')
    link1.href = '/images/map-flyer-1.jpg'
    link1.download = 'CK-Crystal-Krop-MAP-Flyer-Page-1.jpg'
    document.body.appendChild(link1)
    link1.click()
    document.body.removeChild(link1)

    // Download page 2 after a short delay
    setTimeout(() => {
      const link2 = document.createElement('a')
      link2.href = '/images/map-flyer-2.jpg'
      link2.download = 'CK-Crystal-Krop-MAP-Flyer-Page-2.jpg'
      document.body.appendChild(link2)
      link2.click()
      document.body.removeChild(link2)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16">
          <Link href="/ck-world/crystal-krop/pre-planting/map">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Product
            </Button>
          </Link>
          <Button onClick={handleDownload} className="bg-emerald-600 hover:bg-emerald-700">
            <Download className="h-4 w-4 mr-2" />
            Download Flyer
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">CK® Crystal Krop™ MAP Product Flyer</h1>
            <p className="text-muted-foreground">High-Phosphorus Water-Soluble Fertilizer for Early Growth and Root Development</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="relative w-full aspect-[8.5/11]">
                <Image
                  src="/images/map-flyer-1.jpg"
                  alt="CK® Crystal Krop™ MAP Product Flyer - Page 1"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="relative w-full aspect-[8.5/11]">
                <Image
                  src="/images/map-flyer-2.jpg"
                  alt="CK® Crystal Krop™ MAP Product Flyer - Page 2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button onClick={handleDownload} size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Download className="h-5 w-5 mr-2" />
              Download MAP Flyer
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

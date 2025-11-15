'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function MAPFlyerPage() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/map-flyer-1.jpg'
    link.download = 'CK-Crystal-Krop-MAP-Flyer.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/ck-world/crystal-krop/pre-planting/map">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to MAP Product
            </Button>
          </Link>
          <Button onClick={handleDownload} className="bg-emerald-600 hover:bg-emerald-700">
            <Download className="h-4 w-4 mr-2" />
            Download Flyer
          </Button>
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/map-flyer-1.jpg"
              alt="CK® Crystal Krop™ MAP Product Flyer - Page 1"
              width={1200}
              height={1600}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/map-flyer-2.jpg"
              alt="CK® Crystal Krop™ MAP Product Flyer - Page 2"
              width={1200}
              height={1600}
              className="w-full h-auto"
            />
          </div>

          <div className="flex justify-center md:hidden">
            <Button onClick={handleDownload} size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Download className="h-5 w-5 mr-2" />
              Download Flyer
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Section - Logo and Navigation */}
          <div className="flex gap-6 items-start">
            {/* Logo Column */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-20 h-20">
                <Image src="/ck-logo-white.png" alt="CK Logo" fill className="object-contain" />
              </div>
            </Link>
            
            {/* Content Column */}
            <div className="flex flex-col gap-4">
              <nav className="flex flex-col gap-2 text-sm">
                <Link href="/the-ck-story/about-ck" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
                <Link href="/the-ck-story/work-with-us" className="hover:text-emerald-400 transition-colors">
                  Work With Us
                </Link>
              </nav>
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <p className="font-semibold text-emerald-400 mb-1">Office – Headquarters</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=29649+Mijas,+Málaga,+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    29649 Mijas, Málaga, Spain
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-emerald-400 mb-1">Factory – Production Facility</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=18240+Pinos+Puente,+Granada,+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors block mb-3"
                  >
                    18240 Pinos Puente, Granada, Spain
                  </a>
                  <div className="flex flex-col gap-1 mt-2">
                    <a href="tel:+34952757255" className="hover:text-emerald-400 transition-colors">
                      +34 952 757 255
                    </a>
                    <a href="mailto:info@c-k.es" className="hover:text-emerald-400 transition-colors">
                      info@c-k.es
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center hover:bg-yellow-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center hover:bg-yellow-500 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Center Section - Verification Message and Button */}
          <div className="flex flex-col items-center gap-4 px-4">
            <p className="text-base leading-relaxed text-center">
              Check the authenticity of your product easily: every CK® package comes with a unique QR code and
              verification code on the back.
            </p>
            <Link href="/verify-your-product">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6">
                Verify Your Product
              </Button>
            </Link>
          </div>

          {/* Right Section - Badge Only */}
          <div className="flex flex-col items-center md:items-end">
            <a
              href="https://ronafm.es"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-32 h-32 hover:opacity-80 transition-opacity"
            >
              <Image src="/ronafm-badge.png" alt="RonaFM Distributor" fill className="object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="bg-black py-3">
        <div className="container mx-auto px-4 text-center text-sm">Copyright © 2026 CK. All rights reserved.</div>
      </div>
    </footer>
  )
}

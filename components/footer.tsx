import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#000000] text-[#F5F5F5]">
      <div className="max-w-[96rem] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Section - Logo and Navigation */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:pr-6">
            {/* Logo Column */}
            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
              <div className="relative w-16 h-16">
                <Image src="/ck-logo-white.png" alt="CK Logo" fill className="object-contain" />
              </div>
            </Link>
            
            {/* Content Column */}
            <div className="flex flex-col gap-4">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 text-base">
                <Link 
                  href="/the-ck-story/about-ck" 
                  className="text-[#CFCFCF] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-all duration-200"
                >
                  About Us
                </Link>
                <Link 
                  href="/the-ck-story/work-with-us" 
                  className="text-[#CFCFCF] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-all duration-200"
                >
                  Work With Us
                </Link>
              </nav>
              
              {/* Addresses */}
              <div className="flex flex-col gap-3 text-base leading-relaxed">
                <div>
                  <p className="font-semibold text-[#D4AF37] mb-1">Office – Headquarters</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=29649+Mijas,+Málaga,+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CFCFCF] hover:text-[#E0E0E0] hover:underline underline-offset-4 transition-all duration-200"
                  >
                    29649 Mijas, Málaga, Spain
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-[#D4AF37] mb-1">Factory – Production Facility</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=18240+Pinos+Puente,+Granada,+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CFCFCF] hover:text-[#E0E0E0] hover:underline underline-offset-4 transition-all duration-200 block mb-3"
                  >
                    18240 Pinos Puente, Granada, Spain
                  </a>
                  
                  {/* Contact Info */}
                  <div className="flex flex-col gap-1.5 mt-3 pt-3 border-t border-[#2C2C2C]">
                    <a 
                      href="tel:+34952757255" 
                      className="text-[#CFCFCF] hover:text-[#E0E0E0] hover:underline underline-offset-4 transition-all duration-200"
                    >
                      +34 952 757 255
                    </a>
                    <a 
                      href="mailto:info@c-k.es" 
                      className="text-[#CFCFCF] hover:text-[#E0E0E0] hover:underline underline-offset-4 transition-all duration-200"
                    >
                      info@c-k.es
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex gap-3 mt-1">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4AF37] rounded-md flex items-center justify-center hover:bg-[#E5C158] transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4AF37] rounded-md flex items-center justify-center hover:bg-[#E5C158] transition-all duration-200 hover:scale-105"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Center Section - Verification Message and Button */}
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-4 md:py-0 text-center">
            <p className="text-base leading-relaxed text-[#F5F5F5] max-w-md">
              Check the authenticity of your product easily: every CK® package comes with a unique QR code and
              verification code on the back.
            </p>
            <Link href="/verify-your-product">
              <Button className="bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold px-6 py-3 text-base transition-all duration-200 hover:scale-105">
                Verify Your Product
              </Button>
            </Link>
          </div>

          {/* Right Section - RonaFM Badge */}
          <div className="flex flex-col items-center justify-center py-4 md:py-0 md:pl-6">
            <a
              href="https://ronafm.es"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-28 h-28 hover:opacity-80 transition-opacity duration-200"
              aria-label="RonaFM Distributor"
            >
              <Image src="/ronafm-badge.png" alt="RonaFM Distributor" fill className="object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="bg-[#000000] py-3 border-t border-[#2C2C2C]">
        <div className="max-w-[96rem] mx-auto px-6 text-center text-base text-[#CFCFCF]">
          Copyright © 2026 CK. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

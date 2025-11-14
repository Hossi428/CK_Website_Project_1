import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#000000] text-[#F5F5F5]">
      <div className="max-w-[96rem] mx-auto px-12 py-6">
        {/* Main Footer Content - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-6">
          <div className="flex flex-col gap-3">
            {/* Logo */}
            <Link href="/" className="mb-2 hover:opacity-80 transition-opacity">
              <div className="relative w-16 h-16">
                <Image src="/ck-logo-white.png" alt="CK Logo" fill className="object-contain" />
              </div>
            </Link>
            
            {/* Navigation Links */}
            <Link 
              href="/the-ck-story/about-ck" 
              className="text-[#CFCFCF] hover:text-[#FFFFFF] hover:underline text-base leading-tight transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/the-ck-story/work-with-us" 
              className="text-[#CFCFCF] hover:text-[#FFFFFF] hover:underline text-base leading-tight transition-colors"
            >
              Work With Us
            </Link>
            
            {/* Office Address */}
            <p className="font-semibold text-[#D4AF37] text-base leading-tight mt-2">Office – Headquarters</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=29649+Mijas,+Málaga,+Spain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CFCFCF] hover:text-[#FFFFFF] hover:underline text-base leading-tight transition-colors"
            >
              29649 Mijas, Málaga, Spain
            </a>
            
            {/* Factory Address */}
            <p className="font-semibold text-[#D4AF37] text-base leading-tight mt-2">Factory – Production Facility</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=18240+Pinos+Puente,+Granada,+Spain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CFCFCF] hover:text-[#FFFFFF] hover:underline text-base leading-tight transition-colors"
            >
              18240 Pinos Puente, Granada, Spain
            </a>
            
            {/* Contact Details */}
            <a 
              href="tel:+34952757255" 
              className="text-[#CFCFCF] hover:text-[#FFFFFF] hover:underline text-base leading-tight transition-colors mt-3"
            >
              +34 952 757 255
            </a>
            <a 
              href="mailto:info@c-k.es" 
              className="text-[#CFCFCF] hover:text-[#FFFFFF] hover:underline text-base leading-tight transition-colors"
            >
              info@c-k.es
            </a>
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-4">
            <p className="text-base leading-relaxed text-[#F5F5F5] max-w-md">
              Check the authenticity of your product easily: every CK® package comes with a unique QR code and verification code on the back.
            </p>
            <Link href="/verify-your-product">
              <Button className="bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold px-8 py-2 text-base rounded-md transition-all duration-200">
                Verify Your Product
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="https://ronafm.es"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-40 h-32 hover:opacity-80 transition-opacity duration-200"
              aria-label="RonaFM Distributor"
            >
              <Image src="/ronafm-badge.png" alt="RonaFM Distributor" fill className="object-contain" />
            </a>
          </div>
        </div>

        {/* Bottom Section - Social Icons and Copyright */}
        <div className="border-t border-[#2C2C2C] pt-4 mt-2">
          <div className="flex items-center justify-between relative">
            {/* Social Media Icons - Bottom Left */}
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D4AF37] rounded flex items-center justify-center hover:bg-[#E5C158] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#D4AF37] rounded flex items-center justify-center hover:bg-[#E5C158] transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-black" />
              </a>
            </div>

            {/* Copyright - Center */}
            <p className="text-sm text-[#CFCFCF] absolute left-1/2 -translate-x-1/2">
              Copyright © 2026 CK. All rights reserved.
            </p>

            {/* Spacer for balance */}
            <div className="w-[88px]"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

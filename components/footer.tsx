import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#000000] text-[#F5F5F5]">
      <div className="max-w-[96rem] mx-auto px-16 py-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.2fr,0.8fr] gap-12 items-start">
          {/* Left Section - Logo and Contact Info */}
          <div className="flex gap-6 items-start">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity mt-1">
              <div className="relative w-14 h-14">
                <Image src="/ck-logo-white.png" alt="CK Logo" fill className="object-contain" />
              </div>
            </Link>
            
            {/* Contact Information */}
            <div className="flex flex-col gap-0.5">
              {/* Navigation Links */}
              <Link 
                href="/the-ck-story/about-ck" 
                className="text-[#F5F5F5] hover:text-[#FFFFFF] text-base leading-relaxed transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/the-ck-story/work-with-us" 
                className="text-[#F5F5F5] hover:text-[#FFFFFF] text-base leading-relaxed mb-2 transition-colors"
              >
                Work With Us
              </Link>
              
              {/* Office Address */}
              <p className="font-semibold text-[#D4AF37] text-base leading-relaxed">Office – Headquarters</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=29649+Mijas,+Málaga,+Spain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F5] hover:text-[#FFFFFF] text-base leading-relaxed mb-2 transition-colors"
              >
                29649 Mijas, Málaga, Spain
              </a>
              
              {/* Factory Address */}
              <p className="font-semibold text-[#D4AF37] text-base leading-relaxed">Factory – Production Facility</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=18240+Pinos+Puente,+Granada,+Spain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5F5] hover:text-[#FFFFFF] text-base leading-relaxed mb-3 transition-colors"
              >
                18240 Pinos Puente, Granada, Spain
              </a>
              
              {/* Contact Details */}
              <a 
                href="tel:+34952757255" 
                className="text-[#F5F5F5] hover:text-[#FFFFFF] text-base leading-relaxed transition-colors"
              >
                +34 952 757 255
              </a>
              <a 
                href="mailto:info@c-k.es" 
                className="text-[#F5F5F5] hover:text-[#FFFFFF] text-base leading-relaxed transition-colors"
              >
                info@c-k.es
              </a>
            </div>
          </div>

          {/* Center Section - Verification */}
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <p className="text-base leading-relaxed text-[#F5F5F5] max-w-md">
              Check the authenticity of your product easily: every CK® package comes with a unique QR code and
              verification code on the back.
            </p>
            <Link href="/verify-your-product">
              <Button className="bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold px-8 py-2.5 text-base transition-all duration-200">
                Verify Your Product
              </Button>
            </Link>
          </div>

          {/* Right Section - RonaFM Logo */}
          <div className="flex items-center justify-center">
            <a
              href="https://ronafm.es"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-32 h-24 hover:opacity-80 transition-opacity duration-200"
              aria-label="RonaFM Distributor"
            >
              <Image src="/ronafm-badge.png" alt="RonaFM Distributor" fill className="object-contain" />
            </a>
          </div>
        </div>

        {/* Bottom Row - Social Icons and Copyright */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#1a1a1a]">
          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#D4AF37] rounded flex items-center justify-center hover:bg-[#E5C158] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-black" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#D4AF37] rounded flex items-center justify-center hover:bg-[#E5C158] transition-all duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 text-black" />
            </a>
          </div>

          {/* Copyright */}
          <div className="absolute left-1/2 -translate-x-1/2 text-base text-[#F5F5F5]">
            Copyright © 2026 CK. All rights reserved.
          </div>

          {/* Spacer for layout balance */}
          <div className="w-[72px]"></div>
        </div>
      </div>
    </footer>
  )
}

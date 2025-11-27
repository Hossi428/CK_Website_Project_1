"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Award,
  TrendingUp,
  Users,
  Globe,
  Package,
  Shield,
  Leaf,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Search,
  X,
  Upload,
  Briefcase,
  Handshake,
  MessageCircle,
  Mail,
  Microscope,
  FlaskConical,
  Sprout,
  Target,
  Recycle,
  TestTube,
  Building2,
  Lightbulb,
  BookOpen,
  Calendar,
  Video,
  FileText,
  Truck,
  Scan,
  CheckCircle,
  Sparkles,
  Zap,
  MapPin,
  Phone,
  Clock,
  Download,
  Share2,
  Linkedin,
  Youtube,
  Check,
} from "lucide-react"

export default function DownloadIconsPage() {
  const [downloadStatus, setDownloadStatus] = useState<string>("")

  // Comprehensive list of all icons used throughout the site
  const iconsByPage = [
    {
      page: "Homepage",
      sections: [
        {
          section: "Features - Why Choose CK",
          icons: [
            { name: "Leaf", component: Leaf, description: "Precision Nutrition" },
            { name: "Sprout", component: Sprout, description: "Sustainable Solutions" },
            { name: "Shield", component: Shield, description: "Proven Performance" },
          ],
        },
        {
          section: "Hero & Navigation",
          icons: [
            { name: "ArrowRight", component: ArrowRight, description: "Buttons and navigation" },
            { name: "ChevronLeft", component: ChevronLeft, description: "Carousel navigation" },
            { name: "ChevronRight", component: ChevronRight, description: "Carousel navigation" },
          ],
        },
      ],
    },
    {
      page: "Achievements Section",
      sections: [
        {
          section: "Achievement Cards",
          icons: [
            { name: "Award", component: Award, description: "Excellence/Certification" },
            { name: "Globe", component: Globe, description: "Global reach" },
            { name: "Users", component: Users, description: "Customers" },
            { name: "TrendingUp", component: TrendingUp, description: "Growth/Success" },
            { name: "Package", component: Package, description: "Tailored Solutions" },
            { name: "Shield", component: Shield, description: "Verified Products" },
            { name: "Leaf", component: Leaf, description: "Sustainability" },
          ],
        },
      ],
    },
    {
      page: "Navigation & UI",
      sections: [
        {
          section: "Navigation Menu",
          icons: [
            { name: "ChevronDown", component: ChevronDown, description: "Dropdown indicators" },
            { name: "Search", component: Search, description: "Search icon" },
            { name: "X", component: X, description: "Close buttons" },
            { name: "Briefcase", component: Briefcase, description: "Employment" },
            { name: "Handshake", component: Handshake, description: "Representative" },
            { name: "MessageCircle", component: MessageCircle, description: "General Inquiry" },
            { name: "Mail", component: Mail, description: "Contact Us" },
          ],
        },
      ],
    },
    {
      page: "CK Knowledge Hub",
      sections: [
        {
          section: "Articles & Resources",
          icons: [
            { name: "Calendar", component: Calendar, description: "Article dates" },
            { name: "BookOpen", component: BookOpen, description: "Articles/Reading" },
            { name: "Video", component: Video, description: "Video content" },
            { name: "FileText", component: FileText, description: "Documents" },
            { name: "ArrowRight", component: ArrowRight, description: "Read more" },
            { name: "Share2", component: Share2, description: "Share article" },
          ],
        },
      ],
    },
    {
      page: "Our Applied Science",
      sections: [
        {
          section: "Science & Research",
          icons: [
            { name: "Microscope", component: Microscope, description: "Research" },
            { name: "FlaskConical", component: FlaskConical, description: "Laboratory" },
            { name: "TestTube", component: TestTube, description: "Testing" },
            { name: "Target", component: Target, description: "Precision/Goals" },
            { name: "Recycle", component: Recycle, description: "Sustainability" },
          ],
        },
      ],
    },
    {
      page: "The CK Story",
      sections: [
        {
          section: "About & Mission",
          icons: [
            { name: "Building2", component: Building2, description: "Company/Office" },
            { name: "Target", component: Target, description: "Mission" },
            { name: "Lightbulb", component: Lightbulb, description: "Innovation" },
            { name: "Truck", component: Truck, description: "Distribution" },
          ],
        },
      ],
    },
    {
      page: "Contact & Connect",
      sections: [
        {
          section: "Contact Information",
          icons: [
            { name: "MapPin", component: MapPin, description: "Location" },
            { name: "Phone", component: Phone, description: "Phone number" },
            { name: "Mail", component: Mail, description: "Email" },
            { name: "Clock", component: Clock, description: "Business hours" },
            { name: "Linkedin", component: Linkedin, description: "LinkedIn social" },
            { name: "Youtube", component: Youtube, description: "YouTube social" },
          ],
        },
      ],
    },
    {
      page: "Products & Verification",
      sections: [
        {
          section: "Product Pages",
          icons: [
            { name: "Download", component: Download, description: "Download flyers" },
            { name: "ArrowLeft", component: ArrowLeft, description: "Back navigation" },
            { name: "Scan", component: Scan, description: "QR code scanning" },
            { name: "CheckCircle", component: CheckCircle, description: "Verification/Success" },
          ],
        },
      ],
    },
    {
      page: "Join Community",
      sections: [
        {
          section: "Community Features",
          icons: [
            { name: "Sparkles", component: Sparkles, description: "Premium features" },
            { name: "Zap", component: Zap, description: "Fast/Efficient" },
            { name: "Upload", component: Upload, description: "File upload" },
            { name: "Check", component: Check, description: "Checkmark/Completed" },
          ],
        },
      ],
    },
  ]

  const downloadIcon = (IconComponent: any, name: string) => {
    const svg = document.createElement("div")
    svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">${IconComponent({ size: 48 }).props.children}</svg>`

    const svgData = svg.innerHTML
    const blob = new Blob([svgData], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `${name.toLowerCase()}-icon.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    setDownloadStatus(`Downloaded ${name} icon`)
    setTimeout(() => setDownloadStatus(""), 2000)
  }

  const downloadAllIcons = () => {
    let count = 0
    iconsByPage.forEach((page) => {
      page.sections.forEach((section) => {
        section.icons.forEach((icon) => {
          setTimeout(() => {
            downloadIcon(icon.component, icon.name)
            count++
          }, count * 100)
        })
      })
    })
    setDownloadStatus("Downloading all icons...")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CK Website Icon Library</h1>
            <p className="text-lg text-gray-600 mb-6">All icons used throughout the Crop Keeper™ website</p>
            <Button onClick={downloadAllIcons} size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Download className="mr-2 h-5 w-5" />
              Download All Icons as SVG
            </Button>
            {downloadStatus && <p className="mt-4 text-sm text-emerald-600 font-medium">{downloadStatus}</p>}
          </div>

          {/* Icons by Page */}
          {iconsByPage.map((page, pageIndex) => (
            <div key={pageIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-emerald-600 pb-2">{page.page}</h2>

              {page.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">{section.section}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {section.icons.map((icon, iconIndex) => {
                      const IconComponent = icon.component
                      return (
                        <Card key={iconIndex} className="p-6 hover:shadow-lg transition-shadow">
                          <div className="flex flex-col items-center text-center space-y-3">
                            <div className="p-4 bg-emerald-50 rounded-lg">
                              <IconComponent className="h-12 w-12 text-emerald-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{icon.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">{icon.description}</p>
                            </div>
                            <Button
                              onClick={() => downloadIcon(IconComponent, icon.name)}
                              size="sm"
                              variant="outline"
                              className="w-full"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download SVG
                            </Button>
                          </div>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Footer Info */}
          <div className="mt-12 p-6 bg-emerald-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About These Icons</h3>
            <p className="text-gray-700 mb-2">
              All icons are from the Lucide icon library and are available as SVG files.
            </p>
            <p className="text-gray-600 text-sm">
              Total Icons:{" "}
              {iconsByPage.reduce(
                (total, page) =>
                  total + page.sections.reduce((sectionTotal, section) => sectionTotal + section.icons.length, 0),
                0,
              )}{" "}
              unique icons used across the website
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

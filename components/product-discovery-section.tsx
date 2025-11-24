"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const productLines = [
  {
    id: "crystal-krop",
    name: "Crystal Krop™",
    tagline: "Precision Nutrition",
    description: "Premium water-soluble NPKs and macronutrients",
    familyCount: 7,
    color: "emerald",
    icon: "/images/crystal-krop-icon-removebg-preview.png",
  },
  {
    id: "cultivation-key",
    name: "Cultivation Key™",
    tagline: "Unlock Potential",
    description: "Solutions for soil and crop challenges",
    familyCount: 7,
    color: "blue",
    icon: "/images/cultivation-key-icon-removebg-preview.png",
  },
  {
    id: "crop-karma",
    name: "Crop Karma™",
    tagline: "Rebuild Soil",
    description: "Soil conditioners and biological activators",
    familyCount: 2,
    color: "amber",
    icon: "/images/crop-karma-icon-removebg-preview.png",
  },
  {
    id: "crop-keeper",
    name: "Crop Keeper™",
    tagline: "Protect & Strengthen",
    description: "Crop protection and stress management",
    familyCount: 3,
    color: "red",
    icon: "/images/crop-keeper-icon-removebg-preview.png",
  },
  {
    id: "crop-kit",
    name: "Crop Kit™",
    tagline: "Integrated Solutions",
    description: "Complete nutrient programs",
    productCount: 27,
    color: "violet",
    icon: "/images/crop-kit-icon-removebg-preview.png",
  },
]

const colorGradients = {
  emerald: "from-emerald-500/10 to-emerald-600/5",
  blue: "from-blue-500/10 to-blue-600/5",
  amber: "from-amber-500/10 to-amber-600/5",
  red: "from-red-500/10 to-red-600/5",
  violet: "from-violet-500/10 to-violet-600/5",
}

const colorBorders = {
  emerald: "border-emerald-200 hover:border-emerald-400",
  blue: "border-blue-200 hover:border-blue-400",
  amber: "border-amber-200 hover:border-amber-400",
  red: "border-red-200 hover:border-red-400",
  violet: "border-violet-200 hover:border-violet-400",
}

const colorText = {
  emerald: "text-emerald-700",
  blue: "text-blue-700",
  amber: "text-amber-700",
  red: "text-red-700",
  violet: "text-violet-700",
}

const colorButtons = {
  emerald: "bg-emerald-600 hover:bg-emerald-700",
  blue: "bg-blue-600 hover:bg-blue-700",
  amber: "bg-amber-600 hover:bg-amber-700",
  red: "bg-red-600 hover:bg-red-700",
  violet: "bg-violet-600 hover:bg-violet-700",
}

export default function ProductDiscoverySection() {
  const [selectedLine, setSelectedLine] = useState<string | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full mb-6 border border-emerald-200">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Explore Our Product Ecosystem</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Discover the Right Solution
              <br />
              <span className="text-emerald-600">For Your Crops</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Navigate through our comprehensive product hierarchy: Lines → Families → Products. Find exactly what your
              crops need with intuitive, smart navigation.
            </p>
          </div>

          {/* Navigation Breadcrumb */}
          <div className="flex items-center justify-center gap-3 mb-12 text-sm text-muted-foreground">
            <span className="font-semibold text-emerald-600">Product Lines</span>
            <ChevronRight className="h-4 w-4" />
            <span>Product Families</span>
            <ChevronRight className="h-4 w-4" />
            <span>Individual Products</span>
          </div>

          {/* Product Lines Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {productLines.map((line) => (
              <Card
                key={line.id}
                className={`group cursor-pointer transition-all duration-300 border-2 ${colorBorders[line.color as keyof typeof colorBorders]} bg-gradient-to-br ${colorGradients[line.color as keyof typeof colorGradients]} hover:shadow-xl hover:scale-105`}
                onMouseEnter={() => setSelectedLine(line.id)}
                onMouseLeave={() => setSelectedLine(null)}
              >
                <Link href={`/ck-world/${line.id}`}>
                  <div className="p-6 flex flex-col items-center text-center space-y-4 h-full">
                    {/* Icon */}
                    <div className="relative w-16 h-16">
                      <Image
                        src={line.icon || "/placeholder.svg"}
                        alt={`${line.name} icon`}
                        fill
                        className="object-contain transition-transform group-hover:scale-110"
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <h3 className={`font-bold text-lg mb-1 ${colorText[line.color as keyof typeof colorText]}`}>
                        {line.name}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">{line.tagline}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-snug flex-1">{line.description}</p>

                    {/* Count Badge */}
                    <div className="text-xs font-semibold text-muted-foreground pt-2 border-t w-full">
                      {line.familyCount ? `${line.familyCount} Families` : `${line.productCount} Products`}
                    </div>

                    {/* Hover Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className={`h-5 w-5 ${colorText[line.color as keyof typeof colorText]}`} />
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-10 md:p-14 text-white text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Need Help Finding the Right Product?</h3>
            <p className="text-lg md:text-xl text-emerald-50 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our agronomic experts are ready to guide you through our product range and recommend the perfect solution
              for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lets-connect">
                <Button
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 hover:scale-105 text-lg px-10 py-6 h-auto font-bold shadow-xl transition-all"
                >
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/ck-world">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 hover:border-white text-lg px-10 py-6 h-auto font-semibold bg-transparent transition-all"
                >
                  Explore All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

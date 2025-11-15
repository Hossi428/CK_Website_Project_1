"use client"

import Image from "next/image"
import { useState } from "react"

const orchards = [
  {
    name: "Grape Vineyards",
    image: "/images/orchards/grape-vineyard.jpg",
    description: "Expansive vineyard rows stretching across rolling hills"
  },
  {
    name: "Citrus Orchards",
    image: "/images/orchards/citrus-orchard.jpg",
    description: "Orange, lemon, and mandarin groves in perfect symmetry"
  },
  {
    name: "Apple Orchards",
    image: "/images/orchards/apple-orchard.jpg",
    description: "Organized apple tree plantations in full bloom"
  },
  {
    name: "Olive Orchards",
    image: "/images/orchards/olive-orchard.jpg",
    description: "Ancient olive groves with modern cultivation practices"
  },
  {
    name: "Pistachio Orchards",
    image: "/images/orchards/pistachio-orchard.jpg",
    description: "Vast pistachio plantations under Mediterranean sun"
  }
]

export function OrchardGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Top Cash-Crop Orchards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            One magnificent journey through the world's most productive and beautifully managed orchards. 
            These expansive gardens showcase the perfect harmony of nature, precision agriculture, and sustainable farming practices.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orchards.map((orchard, index) => (
            <div
              key={orchard.name}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={orchard.image || "/placeholder.svg"}
                alt={orchard.name}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {orchard.name}
                </h3>
                <p className={`text-sm text-white/90 leading-relaxed transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  {orchard.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            These world-class orchards represent the pinnacle of modern agricultural excellence, 
            where tradition meets innovation to produce the finest crops for global markets.
          </p>
        </div>
      </div>
    </section>
  )
}

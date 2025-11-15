"use client"

import Image from "next/image"
import { useState } from "react"

const orchards = [
  {
    name: "Grape Vineyards",
    image: "/images/orchards/grape-vineyard.jpg",
    query: "aerial view of vast grape vineyard with perfectly aligned rows, rolling hills in background, bright natural sunlight, HD quality, magnificent scale",
  },
  {
    name: "Citrus Orchards",
    image: "/images/orchards/citrus-orchard.jpg",
    query: "top-down aerial view of expansive orange and lemon citrus orchard with symmetrical tree rows, green foliage, irrigation canals, bright sunny day, HD quality",
  },
  {
    name: "Apple Orchards",
    image: "/images/orchards/apple-orchard.jpg",
    query: "long-shot aerial view of magnificent apple orchard with organized rows of apple trees, pathways between sections, mountain backdrop, professional agricultural operation, HD quality",
  },
  {
    name: "Olive Orchards",
    image: "/images/orchards/olive-orchard.jpg",
    query: "aerial bird's-eye view of sprawling olive grove with ancient olive trees in neat rows, Mediterranean landscape, natural lighting, grand scale, HD quality",
  },
  {
    name: "Pistachio Orchards",
    image: "/images/orchards/pistachio-orchard.jpg",
    query: "expansive aerial view of pistachio orchard with uniform tree spacing, irrigation systems visible, vast scale showing hundreds of trees, bright natural light, HD quality",
  },
]

export function OrchardGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Text Block */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 text-balance">
            Top Cash-Crop Orchards
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-pretty">
            One magnificent garden after another — from lush vineyards to sprawling citrus groves, from pristine
            apple orchards to ancient olive plantations. These are the crops that shape agriculture, define regions,
            and feed the world. At CK®, we support every stage of their growth with precision nutrition and
            sustainable solutions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orchards.map((orchard, index) => (
            <div
              key={orchard.name}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={orchard.image || "/placeholder.svg"}
                alt={orchard.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Orchard Name */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className={`text-2xl font-bold text-white transition-all duration-300 ${
                    hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-2 opacity-90"
                  }`}
                >
                  {orchard.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

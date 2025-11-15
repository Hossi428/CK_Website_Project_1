import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

const productLines = [
  {
    id: "crystal-krop",
    name: "Crystal Krop™",
    tagline: "Precision Meets Performance in Plant Nutrition",
    description:
      "A comprehensive range of premium water-soluble NPKs, dual and triple nutrient formulations, and primary and secondary macronutrients in powder, crystal, and liquid forms. Engineered to deliver balanced, efficient, and tailored nutrition for optimal crop growth.",
    color: "emerald",
    familyCount: 7,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crystal_Krop_-Icon-removebg-preview-5D3zEQXivTyUSq9vWYOGpA4jZaMHUT.png",
  },
  {
    id: "cultivation-key",
    name: "Cultivation Key™",
    tagline: "Unlock the Full Potential of Your Soil and Crops",
    description:
      "Specialized solutions addressing critical agronomic challenges - from salinity stress and nutrient deficiency to soil structure recovery and root zone activation. Strategic tools to cultivate healthier plants and optimize resource efficiency.",
    color: "blue",
    familyCount: 7,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cultivation_Key__-_Icon-removebg-preview-w5HHMKgvDSRO7OVAM7bvyIumhYoywF.png",
  },
  {
    id: "crop-karma",
    name: "Crop Karma™",
    tagline: "Rebuilding Soil, Rooting the Future",
    description:
      "Soil-applied products that directly improve soil structure, biological activity, and rooting conditions. Features soil conditioners, microbial activators, and biologically active compounds designed to enrich the soil environment.",
    color: "amber",
    familyCount: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crop_Karma__-_Icon-removebg-preview-x5xTkensVvtp4owGUXfvgGF9ZG0kzU.png",
  },
  {
    id: "crop-keeper",
    name: "Crop Keeper™",
    tagline: "Your Trusted Partner in Crop Protection and Stress Management",
    description:
      "Specially designed to support plant resilience and protect your harvest from biotic and abiotic stresses. Enhances plant defense mechanisms, promotes stress tolerance, and helps safeguard yield quality.",
    color: "red",
    familyCount: 3,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crop_Keeper__-_Icon-removebg-preview-vPs3H1LyA4U16qpIhyjnS79GYKoSMM.png",
  },
  {
    id: "crop-kit",
    name: "Crop Kit™",
    tagline: "Integrated Solutions for Crop Performance",
    description:
      "A comprehensive line of synergistic input solutions, including single elements and micronutrient formulations, designed to work together throughout the entire crop cycle. Tailored nutrient programs that simplify decision-making.",
    color: "violet",
    familyCount: 0,
    productCount: 27,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crop_Kit__-_Icon-removebg-preview-DQRoErhATMboLpgNlhI8t16rqeNJdA.png",
  },
]

const colorClasses = {
  emerald:
    "border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/50 hover:shadow-lg hover:shadow-emerald-100",
  blue: "border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-lg hover:shadow-blue-100",
  amber: "border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100/50 hover:shadow-lg hover:shadow-amber-100",
  red: "border-red-200 bg-gradient-to-br from-red-50 to-red-100/50 hover:shadow-lg hover:shadow-red-100",
  violet: "border-violet-200 bg-gradient-to-br from-violet-50 to-violet-100/50 hover:shadow-lg hover:shadow-violet-100",
}

const colorAccents = {
  emerald: "text-emerald-700",
  blue: "text-blue-700",
  amber: "text-amber-700",
  red: "text-red-700",
  violet: "text-violet-700",
}

const buttonColors = {
  emerald: "bg-emerald-600 hover:bg-emerald-700",
  blue: "bg-blue-600 hover:bg-blue-700",
  amber: "bg-amber-600 hover:bg-amber-700",
  red: "bg-red-600 hover:bg-red-700",
  violet: "bg-violet-600 hover:bg-violet-700",
}

const iconFilterClasses = {
  emerald: "",
  blue: "",
  amber: "",
  red: "",
  violet: "",
}

const iconBgColors = {
  emerald: "bg-emerald-50",
  blue: "bg-blue-50",
  amber: "bg-amber-50",
  red: "bg-red-50",
  violet: "bg-violet-50",
}

export default function CKWorldPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container py-12 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Welcome to <span className="text-emerald-600">CK World</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Explore our comprehensive range of agricultural solutions designed to empower farmers and maximize crop
            potential across every stage of growth.
          </p>
        </div>

        <Separator className="mb-16" />

        {/* Product Lines Grid */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center">
            {productLines.map((line, index) => (
              <Card
                key={line.id}
                className={`w-full max-w-sm transition-all duration-300 ${colorClasses[line.color as keyof typeof colorClasses]} border-2 group flex flex-col h-full ${
                  index === 3 ? 'lg:col-start-2' : ''
                }`}
              >
                <CardHeader className="flex-shrink-0">
                  {line.icon && (
                    <div className="flex justify-center mb-4">
                      <Image
                        src={line.icon || "/placeholder.svg"}
                        alt={`${line.name} icon`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <CardTitle className={`text-2xl ${colorAccents[line.color as keyof typeof colorAccents]}`}>
                    {line.name}
                  </CardTitle>
                  <CardDescription className="text-base font-medium">{line.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-6 flex-1">
                    <p className="text-muted-foreground leading-relaxed text-pretty">{line.description}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        {line.familyCount > 0
                          ? `${line.familyCount} Product ${line.familyCount === 1 ? "Family" : "Families"}`
                          : `${line.productCount} Products`}
                      </span>
                    </div>
                  </div>

                  <Link href={`/ck-world/${line.id}`} className="block mt-6">
                    <Button
                      className={`w-full ${buttonColors[line.color as keyof typeof buttonColors]} text-white group-hover:gap-3 transition-all`}
                    >
                      Explore {line.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-balance">Ready to Partner with CK®?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Contact us today to learn more about how our product lines can transform your agricultural operations.
          </p>
        </div>
      </main>
    </div>
  )
}

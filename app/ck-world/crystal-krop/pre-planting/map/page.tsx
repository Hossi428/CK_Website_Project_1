import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function MAPProductPage() {
  const otherProducts = ["AMN", "DAP", "AMS", "AMS Gr", "SSP"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container py-12 md:py-20">
        <Link href="/ck-world/crystal-krop">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Crystal Krop™
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-sm font-semibold text-emerald-600 mb-3">■ Pre-planting Family</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Pre-planting Family brings together essential base fertilizers that secure a strong nutritional
                foundation for crops right from the start. This group of products deliver key macronutrients like
                nitrogen, phosphorus, and sulfur in highly available forms, ensuring vigorous early root development and
                balanced soil fertility. Designed for incorporation before sowing, this family helps optimize seedbed
                conditions, support uniform germination, and set the stage for higher yields throughout the growing
                season.
              </p>
            </section>

            <section className="bg-white rounded-xl shadow-sm border p-8 space-y-6">
              <h1 className="text-3xl font-bold text-foreground">CK® Crystal Krop™ MAP</h1>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
                <p className="text-gray-700 leading-relaxed">
                  <strong>CK® Crystal Krop™ MAP</strong> is a high-phosphorus, water-soluble fertilizer formulated to
                  support early crop growth and robust root development. Its excellent solubility ensures rapid nutrient
                  availability, making it ideal for enhancing phosphorus uptake and promoting vigorous plant
                  establishment across various soil types.
                </p>
              </div>

              <Link href="/ck-world/crystal-krop/pre-planting/map/flyer" className="inline-block">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-base font-semibold">
                  <Download className="h-5 w-5 mr-2" />
                  Download Product Flyer
                </Button>
              </Link>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-white border shadow-md sticky top-8">
              <CardHeader className="bg-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold text-center">Other Products in This Family</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {otherProducts.map((product, index) => (
                    <li key={index}>
                      <Link
                        href={`/ck-world/crystal-krop/pre-planting/${product.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-emerald-600 hover:text-emerald-700 transition-colors text-lg font-medium"
                      >
                        • {product}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download } from 'lucide-react'
import Link from "next/link"

export default function AMNProductPage() {
  const otherProducts = ["MAP", "DAP", "AMS", "AMS Gr", "SSP"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <main className="container py-12 md:py-20">
        {/* Back Button */}
        <Link href="/ck-world/crystal-krop">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Crystal Krop™
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Family Introduction */}
            <section>
              <h2 className="text-sm font-semibold text-emerald-600 mb-2">■ Pre-planting Family</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Pre-planting Family brings together essential base fertilizers that secure a strong nutritional
                foundation for crops right from the start. This group of products deliver key macronutrients like
                nitrogen, phosphorus, and sulfur in highly available forms, ensuring vigorous early root development and
                balanced soil fertility. Designed for incorporation before sowing, this family helps optimize seedbed
                conditions, support uniform germination, and set the stage for higher yields throughout the growing
                season.
              </p>
            </section>

            {/* Product Details */}
            <section className="space-y-4">
              <h1 className="text-2xl font-bold text-foreground">• CK® Crystal Krop ™ AMN</h1>

              {/* Product Description with Yellow Background */}
              <div className="bg-yellow-200 p-6 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  <strong>CK® Crystal Krop ™ AMN</strong> is a high-quality granular Ammonium Nitrate fertilizer
                  designed for soil application, delivering a rapid and balanced supply of nitrogen in both ammoniacal
                  and nitrate forms. This dual nitrogen source ensures immediate availability for fast uptake while
                  providing a longer-lasting nitrogen supply to support sustained vegetative growth and optimal crop
                  development.
                </p>
              </div>

              {/* Download Flyer Button */}
              <Link href="/ck-world/crystal-krop/pre-planting/amn/flyer" className="inline-block">
                <Button
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-8 py-6 text-base font-semibold"
                >
                  <Download className="h-5 w-5 mr-2" />
                  CK® Crystal Krop ™ AMN Flyer
                </Button>
              </Link>
            </section>
          </div>

          {/* Sidebar - Right 1/3 */}
          <div className="lg:col-span-1">
            <Card className="bg-emerald-600 text-white border-none shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center">Other Products in This Family</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {otherProducts.map((product, index) => (
                    <li key={index}>
                      <Link
                        href={`/ck-world/crystal-krop/pre-planting/${product.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-white hover:text-emerald-100 transition-colors text-lg"
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

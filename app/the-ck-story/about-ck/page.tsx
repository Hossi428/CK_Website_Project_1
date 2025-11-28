import { FileText, Globe, Users, Award } from "lucide-react"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About CK</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover the heritage, expertise, and commitment that make CK® - Complete Krop your trusted partner in
              agricultural innovation.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">At a Glance</h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
            {/* Left Column - Text Content */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                CK® - Complete Krop is a proud <span className="font-semibold text-emerald-600">division</span> of
                Nevian Fertilizantes S.L., a company with over{" "}
                <span className="font-semibold">18 years of excellence</span> in fertilizer manufacturing and agronomic
                innovation, headquartered in Puente, Granada, Southern Spain.
              </p>
              <p>
                Since 2006, Nevian has built a solid reputation across Europe and international markets by offering a
                diverse portfolio of <span className="font-semibold">proprietary brands</span> - from{" "}
                <span className="text-emerald-600">classic fertilizers</span> to{" "}
                <span className="text-emerald-600">next-generation agricultural solutions</span>.
              </p>
              <p>
                CK® was born from this rich legacy with a clear mission: to deliver custom-formulated{" "}
                <span className="font-semibold">agricultural technologies</span> for today's dynamic climate, diverse
                soils, and evolving crop demands.
              </p>
            </div>

            {/* Right Column - Icon Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">18+</div>
                <h3 className="text-sm font-semibold text-gray-900">Years of Excellence</h3>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 mt-4">Global</div>
                <p className="text-xs text-gray-600">Market Presence</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 mt-4">Expert</div>
                <p className="text-xs text-gray-600">Agronomy Team</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900 mt-4">Premium</div>
                <p className="text-xs text-gray-600">Quality Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Andalusian Heritage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Andalusian Heritage</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Rooted in the fertile lands of <span className="font-semibold">Southern Spain</span>, CK® combines{" "}
                <span className="text-emerald-600 font-semibold">Andalusian farming passion</span> with European
                precision in formulation. Our <span className="font-semibold">headquarters in Granada</span> serves as
                the heart of our research, development, and production operations.
              </p>
              <p>
                This strategic location allows us to understand{" "}
                <span className="font-semibold">Mediterranean agriculture</span> intimately while serving diverse
                climates and crops worldwide - from <span className="text-emerald-600">orchards to greenhouses</span>,
                from arid zones to high-rainfall regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Distribution Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Global Distribution Partnership</h2>
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Thanks to our exclusive distribution partnership with{" "}
                <span className="font-semibold text-emerald-700">RONAFM S.L.</span>, CK® products reach new markets with
                customized packaging, bulk delivery formats (<span className="font-semibold">IBC, Jumbo</span>), and{" "}
                <span className="text-emerald-600 font-semibold">private labeling opportunities</span> for international
                partners.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This collaboration ensures that every grower receives the{" "}
                <span className="font-semibold">right formula</span>, in the{" "}
                <span className="font-semibold">right form</span>, at the{" "}
                <span className="font-semibold">right time</span> - whether{" "}
                <span className="text-emerald-600">cultivating vineyards</span> in Europe,{" "}
                <span className="text-emerald-600">orchards</span> in the Middle East, or{" "}
                <span className="text-emerald-600">open-field vegetables</span> in North Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

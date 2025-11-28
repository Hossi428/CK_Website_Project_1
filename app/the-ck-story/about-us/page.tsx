import { Users, Award, Globe, TrendingUp } from "lucide-react"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About CK®</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Complete Krop is a leading agricultural solutions provider, dedicated to empowering farmers with
              innovative, sustainable, and science-backed products that maximize crop yields and soil health.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Founded with a vision to revolutionize modern agriculture, CK® has grown from a small fertilizer company
                into a comprehensive agricultural solutions provider. Our journey began with a simple mission: to help
                farmers grow healthier crops while protecting the environment.
              </p>
              <p>
                Today, we serve thousands of farmers across multiple continents, providing them with cutting-edge
                fertilizers, soil amendments, and agronomic expertise. Our commitment to innovation and sustainability
                has made us a trusted partner in the agricultural community.
              </p>
              <p>
                At CK®, we believe that the future of farming lies in the perfect balance between productivity and
                environmental stewardship. Every product we develop, every solution we provide, is designed with this
                principle at its core.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer-Centric</h3>
              <p className="text-gray-600">
                We listen to farmers and develop solutions tailored to their specific needs and challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure the highest standards of quality and performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Operating across continents, we bring world-class agricultural solutions to farmers everywhere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Innovation</h3>
              <p className="text-gray-600">
                We invest heavily in research and development to stay at the forefront of agricultural technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-emerald-600">2010</span>
                </div>
                <div className="flex-grow border-l-2 border-emerald-200 pl-6 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">The Beginning</h3>
                  <p className="text-gray-600">
                    CK® was founded with a mission to provide farmers with high-quality, science-backed fertilizers.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-emerald-600">2015</span>
                </div>
                <div className="flex-grow border-l-2 border-emerald-200 pl-6 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Launched Crystal Krop™ product line and expanded operations to serve international markets.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-emerald-600">2018</span>
                </div>
                <div className="flex-grow border-l-2 border-emerald-200 pl-6 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Hub</h3>
                  <p className="text-gray-600">
                    Opened state-of-the-art research facility focused on sustainable agriculture solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-emerald-600">2020</span>
                </div>
                <div className="flex-grow border-l-2 border-emerald-200 pl-6 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Portfolio</h3>
                  <p className="text-gray-600">
                    Introduced Cultivation Key™, Crop Keeper™, Crop Kit™, and Crop Karma™ product lines.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-emerald-600">2024</span>
                </div>
                <div className="flex-grow pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Leader</h3>
                  <p className="text-gray-600">
                    Recognized as a leading provider of sustainable agricultural solutions worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with CK® and experience the difference that quality, innovation, and dedication can make.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}

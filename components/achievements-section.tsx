import { Award, TrendingUp, Users, Globe, Package, Shield, Leaf } from 'lucide-react'

export function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      value: "18+",
      label: "Years of Excellence",
      description: "Pioneering agricultural innovation since 2006",
      color: "emerald"
    },
    {
      icon: Globe,
      value: "20+",
      label: "Countries Served",
      description: "Global reach with local expertise",
      color: "blue"
    },
    {
      icon: Package,
      value: "150+",
      label: "Tailored Solutions",
      description: "Over 150 custom concepts with flexible packaging options",
      color: "purple"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Verified Products",
      description: "Unique QR code and verification for every single package",
      color: "orange"
    },
    {
      icon: Users,
      value: "100K+",
      label: "Farmers Trust Us",
      description: "Building partnerships that grow success",
      color: "teal"
    },
    {
      icon: Leaf,
      value: "100%",
      label: "Sustainable & Eco-Friendly",
      description: "Environmentally responsible solutions for modern agriculture",
      color: "green"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-50",
        icon: "text-emerald-600",
        border: "border-emerald-200",
        accent: "bg-emerald-600"
      },
      blue: {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        border: "border-blue-200",
        accent: "bg-blue-600"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        border: "border-purple-200",
        accent: "bg-purple-600"
      },
      orange: {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        border: "border-orange-200",
        accent: "bg-orange-600"
      },
      teal: {
        bg: "bg-teal-50",
        icon: "text-teal-600",
        border: "border-teal-200",
        accent: "bg-teal-600"
      },
      green: {
        bg: "bg-green-50",
        icon: "text-green-600",
        border: "border-green-200",
        accent: "bg-green-600"
      }
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-semibold uppercase tracking-wider mb-3">
            Our Impact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Achievements That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Delivering excellence through innovation, sustainability, and unwavering commitment to farmer success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            const colorClasses = getColorClasses(achievement.color)
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${colorClasses.accent}`} />
                
                {/* Icon Container */}
                <div className={`h-14 w-14 rounded-xl ${colorClasses.bg} flex items-center justify-center mb-4 border ${colorClasses.border} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 ${colorClasses.icon}`} />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {achievement.value}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed text-balance">
                  {achievement.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 bg-emerald-600 rounded-xl p-8 text-white text-center">
          <p className="text-lg mb-2">
            Join thousands of farmers worldwide who trust CK® for their agricultural success
          </p>
          <p className="text-emerald-100 text-balance">
            Together, we're cultivating a sustainable future for agriculture
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Zap, Users, Shield, Target, ArrowRight, Sparkles } from "lucide-react"

export default function JoinCommunitySection() {
  const benefits = [
    {
      icon: Zap,
      title: "Make Smarter Decisions Faster",
      description: "Cut through noise with field-tested insights that save time and eliminate guesswork",
    },
    {
      icon: TrendingUp,
      title: "Increase Yields & Profitability",
      description: "Apply proven strategies from real orchards and farms to boost productivity and revenue",
    },
    {
      icon: Target,
      title: "Stay Ahead of Challenges",
      description: "Anticipate seasonal issues before they arise with predictive insights and early warnings",
    },
    {
      icon: Users,
      title: "Connect with Expert Growers",
      description: "Learn directly from agronomists and successful farmers solving problems just like yours",
    },
    {
      icon: Shield,
      title: "Build Season-to-Season Resilience",
      description: "Strengthen your crop management with time-tested methods and breakthrough innovations",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          {/* Premium Header with Social Proof Badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-800/60 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-emerald-700/50">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-100">
                Trusted by Growers & Agronomists Across 20+ Countries
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Start Growing Smarter,
              <br />
              <span className="text-emerald-300">Not Harder</span>
            </h2>

            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl mx-auto text-balance">
              Join forward-thinking farmers who are reducing risk, increasing profits, and making confident decisions
              with exclusive crop intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/20 hover:bg-white/15 hover:border-emerald-400/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-emerald-100 leading-relaxed text-[15px]">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Premium CTA Section with Enhanced Visual Hierarchy */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl p-10 md:p-14 border-2 border-emerald-400/30 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Get Exclusive Access to Field-Ready Insights
            </h3>

            <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our professional network and unlock practical strategies applied in orchards, vineyards, open fields,
              and greenhouses worldwide
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8">
              <Button
                size="lg"
                onClick={() => (window.location.href = "/join-community")}
                className="bg-white text-emerald-900 hover:bg-emerald-50 hover:scale-105 text-lg px-12 py-7 h-auto font-bold shadow-xl transition-all duration-300"
                aria-label="Join the Complete Krop community and start growing smarter"
              >
                Start Growing Smarter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = "/join-community")}
                className="border-2 border-white/70 text-white hover:bg-white/10 hover:border-white text-lg px-12 py-7 h-auto font-semibold bg-transparent transition-all duration-300"
                aria-label="Learn more about community benefits"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-emerald-100 border-t border-white/20 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                <span className="font-medium">No spam—only practical, field-ready insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                <span className="font-medium">Built with real field insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                <span className="font-medium">Free access, cancel anytime</span>
              </div>
            </div>

            <p className="text-emerald-200 text-sm mt-6 font-medium">
              Join thousands of growers making confident, informed decisions every season
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

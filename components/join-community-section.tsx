"use client"

import { useState } from "react"

import type React from "react"

import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react"

export default function JoinCommunitySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleJoinCommunity = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setIsSuccess(true)
    setTimeout(() => {
      setIsModalOpen(false)
      setIsSuccess(false)
      setEmail("")
      setName("")
    }, 3000)
  }

  const benefits = [
    {
      icon: Zap,
      title: "Exclusive Agricultural Insights",
      description: "Access cutting-edge research, smart farming techniques, and expert analysis in crop management",
    },
    {
      icon: TrendingUp,
      title: "Early Access to Innovations",
      description: "Be the first to discover new tools, guides, and breakthrough solutions for modern agriculture",
    },
    {
      icon: Users,
      title: "Expert Network Connection",
      description: "Connect directly with agronomists, researchers, and industry professionals worldwide",
    },
    {
      icon: CheckCircle,
      title: "Premium Community Benefits",
      description: "Share field experiences, practical solutions, and proven strategies with fellow growers",
    },
    {
      icon: Shield,
      title: "Tailored Industry Updates",
      description: "Receive personalized content based on your crops, region, and specific farming interests",
    },
  ]

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />

        <div className="container relative">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-800/50 px-4 py-2 rounded-full mb-6">
                <Users className="h-5 w-5 text-emerald-300" />
                <span className="text-sm font-semibold text-emerald-100">Join 5,000+ Agriculture Professionals</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Become Part of the Crop Keeper™ Community
              </h2>
              <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl mx-auto text-balance">
                Connect with industry experts, access premium resources, and stay ahead in modern agriculture
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-emerald-100 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white/30 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your Agricultural Knowledge?</h3>
              <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
                Join our professional community and unlock exclusive insights, tools, and networking opportunities
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button
                  size="lg"
                  onClick={() => (window.location.href = "/join-community")}
                  className="bg-white text-emerald-900 hover:bg-emerald-50 text-lg px-10 py-6 h-auto font-semibold"
                  aria-label="Join the Crop Keeper community"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = "/join-community")}
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 h-auto font-semibold bg-transparent"
                  aria-label="Learn more about our community"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-emerald-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-300" />
                  <span>No spam—only valuable content</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-300" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-300" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

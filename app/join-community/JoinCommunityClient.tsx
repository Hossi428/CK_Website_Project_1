"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Users, ArrowRight, Mail, Globe, BookOpen, Award } from "lucide-react"

export default function JoinCommunityClient() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    profession: "",
    interests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setIsSuccess(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const stats = [
    { icon: Users, value: "5,000+", label: "Community Members" },
    { icon: Globe, value: "20+", label: "Countries" },
    { icon: Award, value: "18+", label: "Years Experience" },
    { icon: BookOpen, value: "500+", label: "Resources Shared" },
  ]

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center space-y-6">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-14 w-14 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-emerald-900">Welcome to Complete Krop Community!</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Thank you for joining our global network of agriculture professionals. Check your email for confirmation and
            exclusive welcome resources.
          </p>
          <div className="pt-6 space-y-4">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 h-auto text-lg"
              onClick={() => (window.location.href = "/ck-knowledge-hub")}
            >
              Explore Knowledge Hub
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 h-auto text-lg bg-transparent"
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-800/50 px-4 py-2 rounded-full mb-6">
              <Users className="h-5 w-5 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-100">Join 5,000+ Agriculture Professionals</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Become Part of the Complete Krop Community
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl mx-auto text-balance">
              Connect with industry experts, access premium resources, and stay ahead in modern agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Join Today</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below to become part of our professional community
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="profession" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Profession / Role <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="profession"
                    name="profession"
                    type="text"
                    placeholder="e.g., Farmer, Agronomist, Researcher"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Your Interests (Optional)
                  </label>
                  <Textarea
                    id="interests"
                    name="interests"
                    placeholder="Tell us about your farming interests, crops you grow, or areas you'd like to learn about..."
                    value={formData.interests}
                    onChange={handleChange}
                    rows={4}
                    className="text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 text-lg font-semibold"
                >
                  <Mail className="mr-2 h-6 w-6" />
                  Join Community
                </Button>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>No spam—only valuable content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Free to join</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Cancel anytime</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center pt-2">
                  By joining, you agree to receive updates and insights from Complete Krop. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

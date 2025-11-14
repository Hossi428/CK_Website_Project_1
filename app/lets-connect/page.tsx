"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from "next/link"

export default function LetsConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-[96rem] mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl text-balance">
            Ready to transform your agricultural practices? Get in touch with our team to discuss how CK® can help you achieve better results.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're here to answer your questions and provide the support you need. Reach out to us through any of the channels below.
                </p>
              </div>

              {/* Office - Headquarters */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office – Headquarters</h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=29649+Mijas,+Málaga,+Spain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-emerald-600 hover:underline transition-colors"
                    >
                      29649 Mijas, Málaga, Spain
                    </a>
                  </div>
                </div>
              </div>

              {/* Factory - Production Facility */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Factory – Production Facility</h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=18240+Pinos+Puente,+Granada,+Spain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-emerald-600 hover:underline transition-colors"
                    >
                      18240 Pinos Puente, Granada, Spain
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Phone</h3>
                    <a
                      href="tel:+34952757255"
                      className="text-gray-900 hover:text-emerald-600 transition-colors font-medium"
                    >
                      +34 952 757 255
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                    <a
                      href="mailto:info@c-k.es"
                      className="text-gray-900 hover:text-emerald-600 transition-colors font-medium"
                    >
                      info@c-k.es
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-lg p-3">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Opening Hours</h3>
                    <p className="text-gray-900 font-medium">
                      Monday to Friday / 9:00 to 15:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 XXX XXX XXX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company / Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-6 text-lg rounded-lg transition-colors"
                >
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Looking for Career Opportunities?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our team and be part of the agricultural innovation revolution.
          </p>
          <Link href="/the-ck-story/work-with-us">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-lg rounded-lg">
              Explore Careers
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

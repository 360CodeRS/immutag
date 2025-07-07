"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, QrCode, Shield, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Attach Your Immutag",
    description: "Place the NFC/QR code tag on your valuable device",
    icon: QrCode,
    details: [
      "Peel and stick the tamper-evident tag",
      "Position on a flat, clean surface",
      "Each tag contains a unique cryptographic identifier",
      "Works with smartphones, laptops, tablets, and more",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    number: 2,
    title: "Register Your Device",
    description: "Use our mobile app or web platform to create ownership record",
    icon: Smartphone,
    details: [
      "Scan the tag with your phone camera",
      "Enter device details and purchase information",
      "Upload photos and documentation",
      "Verify your identity securely",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    number: 3,
    title: "Blockchain Verification",
    description: "Your ownership is recorded immutably on the blockchain",
    icon: Shield,
    details: [
      "Smart contract creates permanent ownership record",
      "Cryptographic proof links you to your device",
      "Decentralized network validates the transaction",
      "Record cannot be altered or deleted",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    number: 4,
    title: "Verify Anytime",
    description: "Instantly prove ownership through your secure account",
    icon: CheckCircle,
    details: [
      "Access your ownership certificate 24/7",
      "Share verification with insurance companies",
      "Generate proof for warranty claims",
      "Transfer ownership when selling",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    number: 5,
    title: "Theft Protection",
    description: "Flag stolen devices and prevent unauthorized resale",
    icon: AlertTriangle,
    details: [
      "Mark device as stolen instantly",
      "Alert network of verified retailers",
      "Assist law enforcement with recovery",
      "Prevent resale on major platforms",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-step") || "0")
            setVisibleSteps((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const stepElements = pageRef.current?.querySelectorAll("[data-step]")
    stepElements?.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={pageRef} className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Secure your valuable devices in 5 simple steps. Experience the future of digital ownership verification.
          </p>
        </div>
      </section>

      {/* Interactive Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeStep === index ? "bg-white text-blue-600" : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {step.number}
                  </div>
                  <Icon className="h-5 w-5" />
                  <span className="font-medium hidden sm:block">{step.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {steps[activeStep].number}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{steps[activeStep].title}</h2>
                  <p className="text-xl text-gray-300">{steps[activeStep].description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex space-x-4">
                {activeStep > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                  >
                    Previous Step
                  </Button>
                )}
                {activeStep < steps.length - 1 && (
                  <Button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-gray-800/50 border-blue-500/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-blue-800/20 flex items-center justify-center">
                    <div className="text-center">
                      {React.createElement(steps[activeStep].icon, {
                        className: "h-24 w-24 text-blue-400 mx-auto mb-4",
                      })}
                      <p className="text-gray-300">Interactive Demo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Complete Process Overview</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how all the steps work together to create a comprehensive ownership verification system.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isVisible = visibleSteps.includes(index)

              return (
                <div
                  key={index}
                  data-step={index}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-1 flex justify-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            {step.number}
                          </div>
                        </div>

                        <div className="md:col-span-2 flex justify-center">
                          <div className="p-4 bg-blue-500/10 rounded-full">
                            <Icon className="h-12 w-12 text-blue-400" />
                          </div>
                        </div>

                        <div className="md:col-span-9">
                          <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                          <p className="text-lg text-gray-300 mb-4">{step.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-400">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-4">
                      <ArrowRight className="h-8 w-8 text-blue-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Secure Your Devices?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Immutag to protect their valuable assets. Get started today and experience
            peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Protecting Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Watch Demo Video
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Lock, Zap, Globe, Users, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Shield,
    title: "Immutable Protection",
    description: "Blockchain technology ensures your ownership records cannot be altered or forged.",
  },
  {
    icon: Lock,
    title: "Secure Verification",
    description: "Cryptographic proof of ownership that can be verified instantly by anyone.",
  },
  {
    icon: Zap,
    title: "Instant Claims",
    description: "Streamline insurance claims with verifiable digital proof of ownership.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Your ownership proof is recognized worldwide through blockchain consensus.",
  },
  {
    icon: Users,
    title: "Easy Transfer",
    description: "Securely transfer ownership when selling or gifting your valuable items.",
  },
  {
    icon: CheckCircle,
    title: "Theft Prevention",
    description: "Flag stolen items instantly and help prevent resale of stolen goods.",
  },
]

export function BenefitsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Why Choose Immutag?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary blockchain technology meets practical asset protection. Experience the future of digital
            ownership verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isVisible = visibleItems.includes(index)

            return (
              <Card
                key={index}
                data-index={index}
                className={`bg-gray-900/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-blue-500/10 rounded-full">
                      <Icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

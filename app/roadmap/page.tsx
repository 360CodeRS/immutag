"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Circle, Clock, Rocket } from "lucide-react"

const roadmapItems = [
  {
    quarter: "Q1 2024",
    title: "Prototype Development",
    description: "Core blockchain infrastructure and NFC tag integration testing",
    status: "completed",
    details: [
      "Smart contract architecture design",
      "NFC/QR code tag prototyping",
      "Initial security audits",
      "MVP user interface development",
    ],
  },
  {
    quarter: "Q2 2024",
    title: "MVP Launch",
    description: "Limited device support with core functionality",
    status: "completed",
    details: [
      "Support for smartphones and laptops",
      "Web-based registration platform",
      "Basic ownership verification",
      "Beta user onboarding (1,000 users)",
    ],
  },
  {
    quarter: "Q3 2024",
    title: "Strategic Partnerships",
    description: "Collaborations with insurers and device manufacturers",
    status: "in-progress",
    details: [
      "Insurance company integrations",
      "OEM partnership agreements",
      "Retail channel partnerships",
      "API development for third parties",
    ],
  },
  {
    quarter: "Q4 2024",
    title: "Mobile App & Dashboard",
    description: "Native mobile applications and enhanced web dashboard",
    status: "upcoming",
    details: [
      "iOS and Android mobile apps",
      "Enhanced web dashboard",
      "Real-time notifications",
      "Advanced analytics and reporting",
    ],
  },
  {
    quarter: "Q1 2025",
    title: "Global Rollout",
    description: "Worldwide expansion and mass user onboarding",
    status: "upcoming",
    details: [
      "Multi-language support",
      "Global compliance and regulations",
      "Scaled infrastructure",
      "Marketing and user acquisition",
    ],
  },
  {
    quarter: "Q2 2025",
    title: "Token System & DAO",
    description: "Governance token launch and decentralized autonomous organization",
    status: "upcoming",
    details: [
      "IMMU token launch",
      "DAO governance structure",
      "Community voting mechanisms",
      "Staking and rewards system",
    ],
  },
]

export default function RoadmapPage() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const pageRef = useRef<HTMLDivElement>(null)

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

    const items = pageRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-400" />
      case "in-progress":
        return <Clock className="h-6 w-6 text-blue-400" />
      default:
        return <Circle className="h-6 w-6 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-400/40 bg-green-400/5"
      case "in-progress":
        return "border-blue-400/40 bg-blue-400/5"
      default:
        return "border-gray-400/40 bg-gray-400/5"
    }
  }

  return (
    <div ref={pageRef} className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <Rocket className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Our Roadmap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Follow our journey as we revolutionize digital ownership verification and build the future of asset
            protection.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-gray-400"></div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => {
                const isVisible = visibleItems.includes(index)

                return (
                  <div
                    key={index}
                    data-index={index}
                    className={`relative transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 top-6 z-10 bg-gray-900 p-2 rounded-full border-2 border-current">
                      {getStatusIcon(item.status)}
                    </div>

                    {/* Content Card */}
                    <Card
                      className={`ml-20 ${getStatusColor(item.status)} border-2 hover:scale-105 transition-all duration-300`}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <div className="text-sm font-medium text-blue-400 mb-1">{item.quarter}</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-lg">{item.description}</p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                item.status === "completed"
                                  ? "bg-green-400/20 text-green-400"
                                  : item.status === "in-progress"
                                    ? "bg-blue-400/20 text-blue-400"
                                    : "bg-gray-400/20 text-gray-400"
                              }`}
                            >
                              {item.status === "completed"
                                ? "Completed"
                                : item.status === "in-progress"
                                  ? "In Progress"
                                  : "Upcoming"}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-2">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  item.status === "completed"
                                    ? "bg-green-400"
                                    : item.status === "in-progress"
                                      ? "bg-blue-400"
                                      : "bg-gray-400"
                                }`}
                              ></div>
                              <span className="text-gray-300">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Progress So Far</h2>
            <p className="text-xl text-gray-300">Key milestones and achievements on our journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-green-400/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">2/6</div>
                <p className="text-gray-300">Milestones Completed</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-blue-400/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                <p className="text-gray-300">Devices Protected</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-blue-400/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <p className="text-gray-300">Partner Integrations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

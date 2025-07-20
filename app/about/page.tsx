"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Award } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former blockchain architect at major tech companies. 10+ years in cybersecurity.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Smart contract expert and full-stack developer. Previously led engineering at fintech startups.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of Security",
    bio: "PhD in Cryptography. Former security researcher at government agencies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "James Park",
    role: "Head of Product",
    bio: "Product strategist with experience in consumer electronics and IoT devices.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We empower individuals and businesses with clear, secure, and indisputable proof of ownership.",
  },
  {
    icon: Users,
    title: "Collaboration-Focused",
    description: "We partner with manufacturers, insurers, and law enforcement to protect assets effectively.",
  },
  {
    icon: Lightbulb,
    title: "Technologically Advanced",
    description: "We combine blockchain innovation with physical tagging to secure ownership.",
  },
  {
    icon: Award,
    title: "Trust & Transparency",
    description: "We reduce fraud and disputes by making ownership verifiable and transferable.",
  },
]

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<string[]>([])
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section") || ""
            setVisibleSections((prev) => [...prev, sectionId])
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = pageRef.current?.querySelectorAll("[data-section]")
    sections?.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={pageRef} className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            About Immutag
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Revolutionizing ownership protection through blockchain and physical tagging. Immutag ensures your assets are secure, verifiable, and protected.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        data-section="mission"
        className={`py-20 transition-all duration-1000 ${
          visibleSections.includes("mission") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Immutag, our mission is to empower individuals and businesses by providing clear, secure, and indisputable proof of ownership for valuable items.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                By combining advanced blockchain technology with physical tagging, we’re revolutionising how ownership is secured and verified.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-gray-800/50 border-blue-500/20">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">Our Vision</div>
                  <p className="text-gray-300 leading-relaxed">
                    A world where every valuable asset is protected, verifiable, and effortlessly transferable—reducing theft, fraud, and disputes over ownership.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        data-section="values"
        className={`py-20 bg-gray-800/30 transition-all duration-1000 ${
          visibleSections.includes("values") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Core principles that guide everything we build—security, trust, innovation, and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-blue-500/10 rounded-full">
                        <Icon className="h-8 w-8 text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        data-section="team"
        className={`py-20 transition-all duration-1000 ${
          visibleSections.includes("team") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Led by blockchain experts, security specialists, and technology entrepreneurs, our team is focused on creating secure, user-friendly solutions that protect what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                  <p className="text-blue-400 mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Section */}
      <section
        data-section="story"
        className={`py-20 bg-gradient-to-r from-blue-600/10 to-blue-800/10 transition-all duration-1000 ${
          visibleSections.includes("story") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Who We Are</h2>
          <div className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              Immutag began as LOX Network and evolved into a leading provider of blockchain-based verification solutions.
            </p>
            <p>
              We collaborate with manufacturers, insurers, network providers, and law enforcement to ensure that every asset registered with us is secure and verifiable.
            </p>
            <p>
              Our commitment is to create a more secure world—one asset at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

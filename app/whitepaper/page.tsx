"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Shield, Zap, Globe, Lock } from "lucide-react"

const sections = [
  {
    id: "overview",
    title: "Executive Summary",
    icon: FileText,
    content: `Immutag represents a paradigm shift in asset ownership verification, leveraging blockchain technology to create immutable, verifiable proof of ownership for high-value personal electronics. Our solution addresses critical gaps in traditional ownership verification methods while providing a seamless user experience.`,
  },
  {
    id: "technology",
    title: "Technology Stack",
    icon: Zap,
    content: `Our platform utilizes a hybrid approach combining NFC/QR code physical tags with Ethereum-based smart contracts. The architecture ensures scalability, security, and interoperability while maintaining low transaction costs through Layer 2 solutions.`,
  },
  {
    id: "integration",
    title: "Digital Tag Integration",
    icon: Shield,
    content: `Each Immutag contains a unique cryptographic identifier that links physical assets to their blockchain records. The integration process involves secure key generation, device registration, and ownership attestation through our decentralized verification network.`,
  },
  {
    id: "security",
    title: "Security Architecture",
    icon: Lock,
    content: `Our security model implements multiple layers of protection including cryptographic signatures, multi-factor authentication, and decentralized consensus mechanisms. Privacy is maintained through zero-knowledge proofs while ensuring transparency for verification purposes.`,
  },
  {
    id: "governance",
    title: "Decentralized Governance",
    icon: Globe,
    content: `The Immutag ecosystem will transition to a DAO model, allowing token holders to participate in protocol governance, fee structures, and feature development. This ensures community-driven evolution and long-term sustainability.`,
  },
]

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <FileText className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Whitepaper
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Comprehensive technical documentation of Immutag's blockchain-based ownership verification system.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Whitepaper
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-900/50 border-blue-500/20 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                          activeSection === section.id
                            ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                            : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    )
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-gray-900/50 border-blue-500/20">
                <CardContent className="p-8">
                  {sections.map((section) => {
                    const Icon = section.icon
                    return (
                      <div
                        key={section.id}
                        className={`transition-all duration-500 ${activeSection === section.id ? "block" : "hidden"}`}
                      >
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Icon className="h-6 w-6 text-blue-400" />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                        </div>
                        <div className="prose prose-lg prose-invert max-w-none">
                          <p className="text-gray-300 leading-relaxed mb-6">{section.content}</p>

                          {/* Additional detailed content based on section */}
                          {section.id === "overview" && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-semibold text-white">Key Benefits</h3>
                              <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Immutable ownership records on blockchain</li>
                                <li>Instant verification for insurance claims</li>
                                <li>Global recognition and transferability</li>
                                <li>Theft prevention and recovery assistance</li>
                              </ul>
                            </div>
                          )}

                          {section.id === "technology" && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-semibold text-white">Core Components</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-800/50 p-4 rounded-lg">
                                  <h4 className="font-semibold text-blue-400 mb-2">Blockchain Layer</h4>
                                  <p className="text-sm text-gray-300">Ethereum mainnet with Layer 2 scaling</p>
                                </div>
                                <div className="bg-gray-800/50 p-4 rounded-lg">
                                  <h4 className="font-semibold text-blue-400 mb-2">Physical Tags</h4>
                                  <p className="text-sm text-gray-300">NFC/QR codes with cryptographic security</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {section.id === "integration" && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-semibold text-white">Integration Process</h3>
                              <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    1
                                  </div>
                                  <p className="text-gray-300">Attach Immutag to device</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    2
                                  </div>
                                  <p className="text-gray-300">Register through mobile app or web platform</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    3
                                  </div>
                                  <p className="text-gray-300">Blockchain records ownership immutably</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-blue-800/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get the Complete Whitepaper</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download our comprehensive 40-page technical whitepaper for detailed specifications, architecture diagrams,
            and implementation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF (2.3 MB)
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              View Online Version
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

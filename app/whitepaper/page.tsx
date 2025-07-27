"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Globe, Lock, BookCopyIcon, ChartNoAxesGantt, CheckCircle, Rocket, TowerControlIcon, Plane } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const sections = [
  {
    id: "overview",
    title: "Technical Overview",
    icon: FileText,
    content: `Understand our blockchain-based verification system.\n\nImmutag represents a revolutionary approach to asset ownership verification, leveraging cutting-edge blockchain technology to create immutable, verifiable proof of ownership for high-value personal electronics and luxury goods.\n\nThe system operates on a hybrid blockchain architecture, combining the security of public blockchain networks with the efficiency of private sidechains for optimal performance and cost-effectiveness.\n\nOur smart contract infrastructure automatically handles ownership transfers, warranty validations, and insurance claim verifications without requiring intermediaries or centralized authorities.`,
  },
  {
    id: "token",
    title: "Token Economics",
    icon: Lock,
    content: `Detailed insights into our dual-token TAGX/IMTG ecosystem.\n\nThe Immutag ecosystem operates on a sophisticated dual-token model designed to optimize both utility and governance functions while ensuring long-term economic sustainability.\n\nTAGX serves as the primary utility token, powering all network transactions including device registration, ownership transfers, verification requests, and premium feature access. Token holders can stake TAGX to earn rewards while contributing to network security through our Proof-of-Stake consensus mechanism.\n\nIMTG functions as the governance token, granting holders voting rights in the Immutag DAO. This includes decisions on protocol upgrades, fee structures, treasury allocations, and strategic partnerships. IMTG holders also receive priority access to new features and exclusive ecosystem benefits.\n\nOur tokenomics model incorporates deflationary mechanisms through quarterly token burns based on network usage, ensuring scarcity and value appreciation over time. Additionally, a portion of transaction fees is distributed to long-term stakers as passive income.\n\n`,
  },
  {
    id: "usecases",
    title: "Use Cases",
    icon: Globe,
    content: `Real-world scenarios demonstrating the Immutag solution.\n`,
  },
  {
    id: "roadmap",
    title: "Strategic Roadmap",
    icon: ChartNoAxesGantt,
    content: `Milestones, future development, and expansion plans. \n\nImmutag's strategic roadmap outlines our vision for the next 3 years, focusing on technology enhancements, ecosystem growth, and global market expansion.\n\nQ1 2024: Launch of Immutag v2.0 with enhanced security features, expanded device compatibility, and integration with major insurance providers. Begin partnerships with luxury brands for pilot programs.\n\nQ3 2024: Initiate public token sale for TAGX and IMTG tokens to fund ecosystem development. Expand mobile app capabilities with AI-driven asset management features.\n\n2025: Launch Immutag DAO to decentralize governance and empower community participation in decision-making. Introduce advanced analytics tools for businesses to gain insights from asset data.\n\n2026: Expand globally into Europe and Asia-Pacific markets, establishing partnerships with local brands and insurance companies. Introduce new use cases in automotive and real estate sectors.\n\nOngoing: Continuous improvements to blockchain infrastructure, user experience enhancements, and community engagement initiatives to drive adoption and network effects.`,
  }
];

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/particles.mp4" type="video/mp4" />
          </video>
          {/* Enhanced Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-gray-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>

        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="p-4 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <BookCopyIcon className="h-12 w-12 text-blue-400 drop-shadow-lg" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Whitepaper
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10"
          >
            <p className="text-xl text-white mb-0 leading-relaxed font-medium">
              Our whitepaper provides an in-depth look into Immutag's technology,
              tokenomics, business model, and strategic roadmap. It outlines how
              we're transforming asset ownership, tracking, and verification
              through blockchain innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 border border-blue-400/30"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Full Whitepaper
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="bg-gray-900/50 border-blue-500/20 sticky top-24 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">What You'll Discover</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <motion.button
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 border ${activeSection === section.id
                          ? "bg-blue-600/20 text-blue-400 border-blue-500/30 shadow-lg shadow-blue-500/20"
                          : "text-gray-300 hover:bg-gray-800/50 hover:text-white border-transparent"
                          }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </motion.button>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-3 relative"
            >
              <Card className="bg-gray-900/50 border-blue-500/20 relative overflow-hidden backdrop-blur-sm p-5">
                <CardContent className="p-8 relative bg-gray-900/90 rounded-lg space-y-6">
                  <AnimatePresence mode="wait">
                    {sections.map(
                      (section) =>
                        activeSection === section.id && (
                          <motion.div
                            key={section.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full"
                          >
                            <div className="flex items-center space-x-3 mb-6">
                              <div className="p-2 bg-blue-500/10 rounded-lg">
                                <section.icon className="h-6 w-6 text-blue-400" />
                              </div>
                              <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                            </div>

                            {/* Section-Specific Content Blocks */}
                            {section.id === "overview" && (
                              <div className="space-y-4 mb-6">
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                  {section.content.split("\n").map((line, index) => (
                                    <p key={index}>{line.trim()}</p>
                                  ))}
                                </div>
                                <h3 className="text-xl font-semibold text-white">Key Benefits</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                  <li>Immutable ownership records on blockchain</li>
                                  <li>Global recognition and transferability</li>
                                  <li>Theft prevention and recovery assistance</li>
                                </ul>
                              </div>
                            )}

                            {section.id === "token" && (
                              <>
                                <div className="space-y-4 mb-6">
                                  <h3 className="text-xl font-semibold text-white">2 Core Tokens</h3>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gray-800/50 p-4 rounded-lg">
                                      <h4 className="font-semibold text-blue-400 mb-2">TAGX Token</h4>
                                      <p className="text-sm text-gray-300">Used for staking, fees, and feature access.</p>
                                    </div>
                                    <div className="bg-gray-800/50 p-4 rounded-lg">
                                      <h4 className="font-semibold text-blue-400 mb-2">IMTG Token</h4>
                                      <p className="text-sm text-gray-300">Represents voting power in the DAO.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                  {section.content.split("\n").slice(3).map((line, index) => (
                                    <p key={index}>{line.trim()}</p>
                                  ))}
                                </div>
                              </>
                            )}

                            {section.id === "usecases" && (
                              <div className="space-y-6">
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                  {section.content.split("\n").slice(0, 1).map((line, index) => (
                                    <p key={index} className="text-lg font-medium">{line.trim()}</p>
                                  ))}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {[
                                    { title: "Luxury Goods Authentication", desc: "Instant authenticity verification for high-end products" },
                                    { title: "Insurance Claim Processing", desc: "90% faster claims with blockchain proof of ownership" },
                                    { title: "Secondary Market Trading", desc: "Verified ownership history for peer-to-peer transactions" },
                                    { title: "Warranty Management", desc: "Automated warranty validation through smart contracts" },
                                    { title: "Supply Chain Transparency", desc: "Complete product journey tracking and accountability" },
                                    { title: "Corporate Asset Management", desc: "Real-time equipment tracking and management" }
                                  ].map((usecase, idx) => (
                                    <div key={idx} className="bg-gray-800/50 p-4 rounded-lg border border-blue-500/20">
                                      <h4 className="font-semibold text-blue-400 mb-2">{usecase.title}</h4>
                                      <p className="text-sm text-gray-300">{usecase.desc}</p>
                                    </div>
                                  ))}
                                </div>
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                  {section.content.split("\n").slice(2).map((line, index) => (
                                    <p key={index}>{line.trim()}</p>
                                  ))}
                                </div>
                              </div>
                            )}
                            {section.id === "roadmap" && (
                              <div className="relative max-h-[70vh] overflow-y-auto px-4 sm:px-6 lg:px-10 scrollbar-thin">
                                <div
                                  className="
        relative 
        border-l-0 sm:border-l-4 border-blue-500/60 
        ml-0 sm:ml-4 md:ml-12
      "
                                >
                                  {[
                                    {
                                      title: "Completed Milestones",
                                      date: "2023",
                                      Icon: CheckCircle,
                                      items: [
                                        "LOX Network foundation established",
                                        "Initial blockchain integration",
                                        "Partnerships with key manufacturers and insurers",
                                        "Successful proof-of-concept deployment",
                                      ],
                                    },
                                    {
                                      title: "Q3/Q4 2025",
                                      date: "Jul - Dec 2025",
                                      Icon: TowerControlIcon,
                                      items: [
                                        "Completion of Immutag rebranding",
                                        "Token swap launch",
                                        "Beta testing of mobile and web applications",
                                        "Expansion of supported device categories",
                                      ],
                                    },
                                    {
                                      title: "Q1/Q2 2026",
                                      date: "Jan - Jun 2026",
                                      Icon: Rocket,
                                      items: [
                                        "Official app launch",
                                        "Global partnership announcements",
                                        "Launch of developer APIs (immutag.link)",
                                        "Enhanced law enforcement and insurance integrations",
                                      ],
                                    },
                                    {
                                      title: "Future Goals",
                                      date: "2026+",
                                      Icon: Plane,
                                      items: [
                                        "Introduction of AI-driven theft detection",
                                        "Expansion into luxury goods and collectibles",
                                        "Continuous platform improvements based on user feedback",
                                        "Establishment of a global DAO for governance",
                                      ],
                                    },
                                  ].map((milestone, index) => (
                                    <motion.div
                                      key={milestone.title}
                                      initial={{ opacity: 0, x: -40 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.6, delay: index * 0.15 }}
                                      viewport={{ once: true }}
                                      className="
            mb-10 
            relative 
            pl-4 sm:pl-6 md:pl-10
          "
                                    >


                                      {/* Date */}
                                      <p className="text-xs sm:text-sm text-blue-400 font-semibold mb-1">{milestone.date}</p>

                                      {/* Title with Icon */}
                                      <h3 className="flex items-center text-lg sm:text-xl font-semibold text-white mb-3 space-x-2">
                                        <milestone.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                        <span>{milestone.title}</span>
                                      </h3>

                                      {/* Items */}
                                      <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-300 leading-relaxed text-sm sm:text-base">
                                        {milestone.items.map((item, idx) => (
                                          <li key={idx}>{item}</li>
                                        ))}
                                      </ul>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}

                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

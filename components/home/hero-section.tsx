"use client";

import { Parallax } from "react-scroll-parallax";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Laptop, Watch, Sparkles, Bike } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function HeroSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const [typewriterText, setTypewriterText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const fullText = "The future of secure ownership starts here."

  const devices = [
    { icon: Smartphone, name: "Smartphones", delay: 0.2 },
    { icon: Laptop, name: "Laptops", delay: 0.4 },
    { icon: Watch, name: "Watches", delay: 0.6 },
    {
      icon: Bike,
      name: "E-bikes",
      delay: 0.8
    }
  ]

  // Typewriter effect
  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setTypewriterText(fullText.slice(0, index))
          index++
        } else {
          setIsTypingComplete(true)
          clearInterval(interval)
        }
      }, 80)

      return () => clearInterval(interval)
    }, 1000)

    return () => clearTimeout(timer)
  }, [isInView, fullText])
  return (
    <section ref={containerRef}
      className="relative min-h-screen flex items-center justify-end overflow-hidden bg-black text-white">
      {/* Background Layers */}
      {/* <Parallax speed={-40} className="absolute inset-0 z-0">
        <img
          src="/images/bg-test.jpg"
          alt="Background Layer 2"
          className="w-full h-full object-cover opacity-40"
        />
      </Parallax> */}
      <Parallax speed={-20} className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/images/lock.mp4"
          className="w-full h-full object-cover opacity-90 md:opacity-80 -translate-x-8 md:-translate-x-32"
        />
      </Parallax>

      {/* Enhanced Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl px-4 text-center py-12 min-h-screen flex flex-col justify-center  ">
        {/* Shield Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <img
              src="/images/favicon.png"
              alt="Immutag Icon"
              className="h-16 w-16 animate-pulse drop-shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/20 to-transparent z-10 pointer-events-none" />
          </div>
        </motion.div>

        {/* Fixed Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-sky-200 via-blue-200 to-blue-400 bg-clip-text text-transparent"
        >
          Own it. Prove it. Protect it.
        </motion.h1>

        {/* Concise Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 mb-6 max-w-2xl mx-auto font-medium"
        >
          Immutag secures your most valuable devices with blockchain-backed physical tags - preventing theft, simplifying ownership, and giving you peace of mind.        </motion.p>

        {/* Animated Device Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-2xl mx-auto"
        >
          {devices.map((device, index) => {
            const IconComponent = device.icon
            return (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + device.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 hover:border-blue-400/50 cursor-pointer group transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                  </div>
                  <span className="text-white text-sm font-medium group-hover:text-blue-200 transition-colors duration-300">
                    {device.name}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center gap-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-400/30 max-w-3xl mx-auto mb-4 shadow-xl"
        >
          <Sparkles className="h-6 w-6 text-blue-300 flex-shrink-0" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl lg:text-2xl text-white font-medium">
                {typewriterText}
                {!isTypingComplete && (
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </span>
            </div>

          </div>
        </motion.div>





        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full text-lg font-bold shadow-2xl shadow-blue-500/30 border border-blue-400/50 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Join the Waitlist
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 py-3 rounded-full text-lg font-bold backdrop-blur-sm bg-black/20 transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Status Indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2.5 h-2.5 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="text-green-300 font-semibold">App coming soon</span>
            </div>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="text-white/70 font-medium">Be the first to experience smarter ownership security</span>
          </div>
        </motion.div>



      </div>

    </section>
  );
}

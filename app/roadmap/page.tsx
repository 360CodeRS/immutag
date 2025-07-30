"use client"

import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { useRef, useState } from "react"
import Lottie from "lottie-react"
import droneAnimation from "@/public/animations/drone.json"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const slides = [
  {
    title: "Completed Milestones",
    bg: "/images/roadmap-city.webp",
    items: [
      "LOX Network foundation established",
      "Initial blockchain integration",
      "Partnerships with manufacturers and insurers",
      "Proof-of-concept deployment",
    ],
  },
  {
    title: "Q3/Q4 2025",
    bg: "/images/roadmap-sky.webp",
    items: [
      "Immutag rebranding complete",
      "Token swap launch",
      "Beta testing web & mobile apps",
      "Device support expansion",
    ],
  },
  {
    title: "Q1/Q2 2026",
    bg: "/images/roadmap-stars.webp",
    items: [
      "Official app launch",
      "Global partnerships",
      "Launch of developer APIs",
      "Law enforcement + insurance integrations",
    ],
  },
  {
    title: "Future Goals",
    bg: "/images/roadmap-space.webp",
    items: [
      "AI theft detection",
      "Luxury goods/collectibles expansion",
      "Global DAO governance launch",
      "Continuous improvement via feedback",
    ],
  },
]

export default function RoadmapWithHero() {
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  const flyUp = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const springFlyUp = useSpring(flyUp, { stiffness: 100, damping: 20 })

  return (
    <ParallaxProvider>
      <div className="relative bg-black text-white overflow-hidden">
        {/* Fixed Drone + Card */}
        <motion.div
          style={{ y: springFlyUp }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-none"
        >
          {/* Drone */}
          <div className="w-24 h-24 sm:w-28 sm:h-28">
            <Lottie animationData={droneAnimation} loop autoplay />
          </div>

          {/* Beam */}
          <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[130px] sm:border-b-[150px] border-l-transparent border-r-transparent border-b-blue-400/30 blur-md opacity-80 -mt-1" />

          {/* Card */}
          <motion.div
            key={currentIndex}
            className="mt-2 w-[90vw] sm:max-w-md bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-5 sm:p-6 shadow-xl ring-1 ring-white/10 text-center pointer-events-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">
              {slides[currentIndex].title}
            </h2>
            <ul className="space-y-3 list-disc list-inside text-gray-100 text-sm sm:text-base text-left leading-relaxed">
              {slides[currentIndex].items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Scrollable Slide Container */}
        <div
          ref={containerRef}
          className="relative z-10 flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
          onScrollCapture={(e) => {
            const scrollTop = (e.target as HTMLElement).scrollTop
            const height = window.innerHeight
            const index = Math.round(scrollTop / height)
            setCurrentIndex(index)
          }}
        >
          {slides.map((slide, index) => (
            <Parallax key={index} translateY={[-15, 15]}>
              <div
                className="w-full h-screen flex-shrink-0 relative flex items-center justify-center snap-center"
                style={{
                  backgroundImage: `url('${slide.bg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </ParallaxProvider>
  )
}

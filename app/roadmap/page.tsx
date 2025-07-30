"use client"

import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { useRef, useState, useEffect } from "react"
import Lottie from "lottie-react"
import droneAnimation from "@/public/animations/drone.json"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const slides = [
  {
    title: "Completed Milestones",
    gradient: "from-cyan-900 via-blue-900 to-indigo-900",
    accent: "cyan",
    glowColor: "cyan-400",
    items: [
      "LOX Network foundation established",
      "Initial blockchain integration",
      "Partnerships with manufacturers and insurers",
      "Proof-of-concept deployment",
    ],
  },
  {
    title: "Q3/Q4 2025",
    gradient: "from-blue-900 via-indigo-900 to-purple-900",
    accent: "blue",
    glowColor: "blue-400",
    items: [
      "Immutag rebranding complete",
      "Token swap launch",
      "Beta testing web & mobile apps",
      "Device support expansion",
    ],
  },
  {
    title: "Q1/Q2 2026",
    gradient: "from-purple-900 via-violet-900 to-fuchsia-900",
    accent: "purple",
    glowColor: "purple-400",
    items: [
      "Official app launch",
      "Global partnerships",
      "Launch of developer APIs",
      "Law enforcement + insurance integrations",
    ],
  },
  {
    title: "Future Goals",
    gradient: "from-indigo-900 via-purple-900 to-cyan-900",
    accent: "indigo",
    glowColor: "indigo-400",
    items: [
      "AI theft detection",
      "Luxury goods/collectibles expansion",
      "Global DAO governance launch",
      "Continuous improvement via feedback",
    ],
  },
]

export default function RoadmapWithHero() {
  const roadmapRef = useRef<HTMLElement>(null) // Ref for the roadmap section
  const [currentIndex, setCurrentIndex] = useState(0)

  // 1. Scroll progress for internal slide tracking and drone Y position
  // This tracks scroll from the top of the roadmap section to its bottom.
  const { scrollYProgress: roadmapContentScrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start start", "end end"], // 0 when roadmap top hits viewport top, 1 when roadmap bottom hits viewport bottom
  })

  // Map internal scroll progress to a continuous slide index
  const currentSlideIndexValue = useTransform(
    roadmapContentScrollYProgress,
    [0, 1], // Input range (0 to 1 as roadmap section scrolls)
    [0, slides.length - 1], // Output range (index from 0 to last slide)
    { clamp: true }, // Clamp output to stay within range
  )

  // Update currentIndex state when currentSlideIndexValue changes
  useEffect(() => {
    const unsubscribe = currentSlideIndexValue.onChange((latest) => {
      // Ensure newIndex is always within valid array bounds
      const newIndex = Math.max(0, Math.min(slides.length - 1, Math.floor(latest)))
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    })
    return () => unsubscribe()
  }, [currentSlideIndexValue, currentIndex, slides.length])

  // Drone animation based on roadmap internal scroll progress
  const flyUp = useTransform(roadmapContentScrollYProgress, [0, 1], ["0%", "-20%"])
  const springFlyUp = useSpring(flyUp, { stiffness: 100, damping: 20 })

  // 2. Scroll progress for drone/nav visibility (fade in/out at section boundaries)
  // This tracks when the roadmap section is entering/leaving the viewport.
  const { scrollYProgress: roadmapVisibilityScrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start end", "end start"], // 0 when roadmap bottom enters viewport, 1 when roadmap top leaves viewport
  })

  // Opacity for drone/card and side navigation based on roadmap section visibility
  // Fades in quickly at the start of the roadmap section, fades out quickly at the end.
  const droneAndNavOpacity = useTransform(roadmapVisibilityScrollYProgress, [0, 0.01, 0.99, 1], [0, 1, 1, 0])

  // Function to scroll to specific slide
  const scrollToSlide = (index: number) => {
    if (roadmapRef.current) {
      // Calculate target scroll position relative to the start of the roadmap section
      // Each slide is 100vh, so we scroll to the roadmap's top + (index * 100vh)
      const targetScroll = roadmapRef.current.offsetTop + index * window.innerHeight
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/images/blockchain.mp4" type="video/mp4" />
          </video>
          {/* Overlays for enhanced readability */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-blue-900/40 to-gray-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Road Map
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our journey from foundation to the future of blockchain innovation
          </p>
        </div>

        {/* Smooth transition to roadmap */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Roadmap Section - This section will be the scroll target */}
      <section ref={roadmapRef} className="relative bg-black" style={{ minHeight: `${slides.length * 100}vh` }}>
        <ParallaxProvider>
          {/* Reduced Matrix Background Effect */}
          <div className="absolute inset-0 opacity-3 pointer-events-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                style={{
                  left: `${i * 10}%`,
                  height: "100%",
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Drone + Card - Now sticky within the roadmap section */}
          {/* This container will stick to the top of the viewport when roadmapRef is in view */}
          <div className="sticky top-0 h-screen flex items-center justify-center z-30">
            <motion.div
              className="flex flex-col items-center pointer-events-none" // pointer-events-none here
              style={{ y: springFlyUp, opacity: droneAndNavOpacity }}
            >
              {/* Enhanced Drone with Holographic Ring */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                <Lottie animationData={droneAnimation} loop autoplay />

                {/* Holographic Rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 border border-blue-400/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Pulsing Glow */}
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />

                {/* Corner Brackets */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60" />
              </div>

              {/* Enhanced Futuristic Beam */}
              <div className="relative -mt-4">
                {/* Outer beam with particles */}
                <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-b-[180px] sm:border-b-[200px] border-l-transparent border-r-transparent border-b-cyan-400/30 blur-lg" />
                {/* Middle beam */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[35px] border-r-[35px] border-b-[120px] sm:border-b-[140px] border-l-transparent border-r-transparent border-b-cyan-300/50 blur-md" />
                {/* Inner beam */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[80px] sm:border-b-[100px] border-l-transparent border-r-transparent border-b-white/90" />

                {/* Floating particles in beam */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-300 rounded-full"
                    style={{
                      left: "50%",
                      top: `${20 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, 20, 0],
                      x: [-5, 5, -5],
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Ultra Futuristic Card */}
              <motion.div
                key={currentIndex}
                className="mt-4 w-[90vw] sm:max-w-lg bg-black/60 backdrop-blur-3xl rounded-3xl border border-cyan-400/40 p-6 sm:p-8 shadow-2xl ring-2 ring-cyan-400/30 text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  boxShadow: `
                    0 0 60px ${slides[currentIndex].glowColor === "cyan-400" ? "#00f5ff" : slides[currentIndex].glowColor === "blue-400" ? "#3b82f6" : slides[currentIndex].glowColor === "purple-400" ? "#a855f7" : "#6366f1"}40,
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                {/* Make card content interactive */}
                <div className="pointer-events-auto">
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-3xl" />

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${slides[currentIndex].glowColor === "cyan-400" ? "#00f5ff" : slides[currentIndex].glowColor === "blue-400" ? "#3b82f6" : slides[currentIndex].glowColor === "purple-400" ? "#a855f7" : "#6366f1"}40, transparent)`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <div className="absolute inset-[1px] bg-black/60 backdrop-blur-3xl rounded-3xl" />

                  {/* Simplified Tech Grid Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                          radial-gradient(circle at 25% 25%, rgba(0, 245, 255, 0.2) 1px, transparent 1px),
                          radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: "40px 40px, 40px 40px",
                      }}
                    />
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-t-3xl overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>

                  {/* Corner Tech Elements */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse" />
                    <div
                      className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 w-6 h-6 border border-cyan-400/30 transform rotate-45" />

                  <div className="relative z-10">
                    <h2
                      className={`text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r ${
                        slides[currentIndex].accent === "cyan"
                          ? "from-cyan-400 to-blue-400"
                          : slides[currentIndex].accent === "blue"
                            ? "from-blue-400 to-purple-400"
                            : slides[currentIndex].accent === "purple"
                              ? "from-purple-400 to-fuchsia-400"
                              : "from-indigo-400 to-cyan-400"
                      } bg-clip-text text-transparent drop-shadow-lg`}
                    >
                      {slides[currentIndex].title}
                    </h2>

                    <ul className="space-y-4 text-gray-100 text-sm sm:text-base text-left leading-relaxed">
                      {slides[currentIndex].items.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-4 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                          <div className="relative mt-2 flex-shrink-0">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                slides[currentIndex].accent === "cyan"
                                  ? "bg-cyan-400"
                                  : slides[currentIndex].accent === "blue"
                                    ? "bg-blue-400"
                                    : slides[currentIndex].accent === "purple"
                                      ? "bg-purple-400"
                                      : "bg-indigo-400"
                              }`}
                            />
                            <div
                              className={`absolute inset-0 w-2 h-2 rounded-full ${
                                slides[currentIndex].accent === "cyan"
                                  ? "bg-cyan-400"
                                  : slides[currentIndex].accent === "blue"
                                    ? "bg-blue-400"
                                    : slides[currentIndex].accent === "purple"
                                      ? "bg-purple-400"
                                      : "bg-indigo-400"
                              } animate-ping opacity-75`}
                            />
                          </div>
                          <span className="group-hover:text-white transition-colors duration-300 relative">
                            {item}
                            <div className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Enhanced Step Counter */}
                    <div className="absolute bottom-4 right-4 text-xs text-cyan-400/70 font-mono bg-black/50 px-3 py-2 rounded-lg border border-cyan-400/30 backdrop-blur-sm">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                        {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scrollable Slides Container - These are the actual full-screen slides */}
          {slides.map((slide, index) => (
            <Parallax key={index} translateY={[-10, 10]}>
              <div className="w-full h-screen flex-shrink-0 relative snap-center overflow-hidden">
                {/* Simplified Futuristic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}>
                  {/* Reduced Hexagonal Grid */}
                  <div className="absolute inset-0 opacity-3">
                    <svg width="100%" height="100%" className="absolute inset-0">
                      <defs>
                        <pattern
                          id={`hexagons-${index}`}
                          x="0"
                          y="0"
                          width="120"
                          height="104"
                          patternUnits="userSpaceOnUse"
                        >
                          <polygon
                            points="60,3 95,33 95,71 60,101 25,71 25,33"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            opacity="0.2"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#hexagons-${index})`} className="text-cyan-400/10" />
                    </svg>
                  </div>

                  {/* Simplified Geometric Elements */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/15 rounded-full"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }}
                  />

                  <motion.div
                    className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-purple-400/15"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    animate={{
                      rotate: [0, 360],
                      opacity: [0.2, 0.05, 0.2],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  {/* Single Scanning Line */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-1"
                    animate={{
                      y: ["-100%", "100vh"],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  {/* Enhanced Radial Overlay */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/80" />
                </div>

                {/* Reduced Floating Data Points */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${25 + (i % 3) * 20}%`,
                    }}
                  >
                    <motion.div
                      className="w-1 h-1 bg-cyan-400/60 rounded-full"
                      animate={{
                        y: [-15, 15, -15],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 4 + i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.6,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </Parallax>
          ))}

          {/* Functional Side Navigation - Fixed and conditionally visible/opacity controlled */}
          <motion.div
            className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4"
            style={{ opacity: droneAndNavOpacity }}
          >
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.2 }}
                onClick={() => scrollToSlide(index)}
              >
                <motion.div
                  className={`w-3 h-3 transition-all duration-300 rounded-full ${
                    index === currentIndex ? `scale-125` : "hover:scale-110"
                  }`}
                  style={{
                    backgroundColor:
                      index === currentIndex
                        ? slide.glowColor === "cyan-400"
                          ? "#00f5ff"
                          : slide.glowColor === "blue-400"
                            ? "#3b82f6"
                            : slide.glowColor === "purple-400"
                              ? "#a855f7"
                              : "#6366f1"
                        : "rgba(255, 255, 255, 0.2)",
                    boxShadow:
                      index === currentIndex
                        ? `0 0 20px ${slide.glowColor === "cyan-400" ? "#00f5ff" : slide.glowColor === "blue-400" ? "#3b82f6" : slide.glowColor === "purple-400" ? "#a855f7" : "#6366f1"}`
                        : "none",
                  }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 animate-ping opacity-75 rounded-full"
                      style={{
                        backgroundColor:
                          slide.glowColor === "cyan-400"
                            ? "#00f5ff"
                            : slide.glowColor === "blue-400"
                              ? "#3b82f6"
                              : slide.glowColor === "purple-400"
                                ? "#a855f7"
                                : "#6366f1",
                      }}
                    />
                  )}
                </motion.div>

                {/* Enhanced Tooltip */}
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/90 backdrop-blur-sm text-cyan-400 text-xs px-3 py-2 rounded-lg border border-cyan-400/30 whitespace-nowrap shadow-lg">
                    {slide.title}
                    <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-black/90 border-l border-b border-cyan-400/30 rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

 
        </ParallaxProvider>
      </section>

      <style jsx global>{`
        html,
        body {
          overflow-x: hidden; /* Prevent horizontal scroll */
          scroll-behavior: smooth; /* Smooth scroll for window.scrollTo */
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

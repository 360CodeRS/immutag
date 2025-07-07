"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Smartphone, Laptop, Watch } from "lucide-react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>


      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-600/8 rounded-full blur-xl animate-pulse delay-500"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Shield className="h-24 w-24 text-blue-500 animate-pulse" />
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-ping"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
          Secure Digital
          <br />
          <span className="text-blue-400">Ownership</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Blockchain-powered verification for your valuable assets. Protect smartphones, laptops, 
          and e-bikes with immutable proof of ownership.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Secure Your Device
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Device Icons */}
        <div className="flex justify-center space-x-8 md:space-x-12 opacity-60">
          <div className="text-center group">
            <Smartphone className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            <p className="text-sm text-gray-400">Smartphones</p>
          </div>
          <div className="text-center group">
            <Laptop className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            <p className="text-sm text-gray-400">Laptops</p>
          </div>
          <div className="text-center group">
            <Watch className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            <p className="text-sm text-gray-400">Smartwatches</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

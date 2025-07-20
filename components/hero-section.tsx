"use client";

import { Parallax } from "react-scroll-parallax";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Smartphone, Laptop, Watch } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Layers */}
      {/* <Parallax speed={-40} className="absolute inset-0 z-0">
        <img
          src="/images/bg-test.jpg"
          alt="Background Layer 2"
          className="w-full h-full object-cover opacity-40"
        />
      </Parallax> */}
      {/* <Parallax speed={-20} className="absolute inset-0 z-0 bg-black">
        <img
          src="/images/bg-test4.2.png"
          alt="Background Layer 3"
         className="w-full h-full object-cover opacity-20 md:opacity-30"
        />
      </Parallax> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center py-28">
        {/* Shield Icon */}
        <Parallax speed={5}>
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/images/favicon.png"
                alt="Immutag Icon"
                className="h-20 w-20 animate-pulse drop-shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-ping" />
            </div>
          </div>
        </Parallax>

        {/* Headline */}
        <Parallax speed={4}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
            Own it. Prove it. Protect it.
          </h1>
        </Parallax>

        {/* Subheadline */}
        <Parallax speed={2}>
          <p className="text-base md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Immutag provides blockchain-based proof-of-ownership and tracking
            solutions for high-value items such as smartphones, laptops,
            smartwatches, and e-bikes.
          </p>
        </Parallax>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-full text-lg font-semibold"
          >
            Learn More
          </Button>
        </div>

    
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

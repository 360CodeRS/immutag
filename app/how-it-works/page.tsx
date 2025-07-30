"use client";

import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, QrCode, Shield, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { EnhancedCTASection } from "@/components/home/enhanced-cta-section";
import Lottie from "lottie-react";
import tagAnimation from "@/public/animations/shield.json";
import registerAnimation from "@/public/animations/register.json";
import protectAnimation from "@/public/animations/auth.json";

const steps = [
  {
    number: 1,
    title: "Tag Your Device",
    description:
      "Attach a secure, tamper-proof tag to your item, linking it to a secure NFT.",
    icon: QrCode,
    animation: tagAnimation,
    details: [
      "Peel and stick the secure Immutag on your item",
      "Each tag contains a unique identifier",
      "Tags link directly to an encrypted NFT on our blockchain network",
      "Create a permanent digital record of ownership",
    ],
  },
  {
    number: 2,
    title: "Register Ownership",
    description:
      "Create a secure, verifiable ownership record on our platform (App coming soon!).",
    icon: Smartphone,
    animation: registerAnimation,
    details: [
      "Scan the tag with your phone",
      "Securely Register your tagged item",
      "Instantly verify ownership and confirm your identity",
      "Publicly verifiable but privacy-focused",
    ],
  },
  {
    number: 3,
    title: "Manage and Protect",
    description:
      "Enjoy full control - transfer, verify, or report stolen items easily.",
    icon: Shield,
    animation: protectAnimation,
    details: [
      "Prove ownership anytime, anywhere",
      "Tagged item becomes secure against theft or unauthorised resale",
      "Easily transfer ownership when you sell or gift an item",
      "Swiftly report it as lost or stolen",
      "Alert our global network instantly to help prevent resale",
    ],
  },
];

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);
  const pageRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "0px 0px -20% 0px",
    once: true,
  });

  return (
    <div
      ref={pageRef}
      className="pt-16 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"
    >
      {/* Hero Section */}

      <section className="relative py-28 overflow-hidden flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/how_it_works_bg.mp4" type="video/mp4" />
          </video>
          {/* Overlays for enhanced readability */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-gray-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}s
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Secure your valuable devices in 3 simple steps. Experience the
            future of digital ownership verification.
          </motion.p>
        </div>
      </section>

      {/* Steps Navigation */}
      <section ref={sectionRef} className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Responsive step tabs */}
          <div className="mb-16">
            {/* Mobile horizontal scroll container */}
            <div className="flex sm:hidden overflow-x-auto space-x-4 px-2 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`flex flex-col items-center min-w-[72px] px-4 py-2 rounded-xl transition-all duration-300
                      ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold md:mb-1 mb-2
                        ${
                          isActive
                            ? "bg-white text-blue-600"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                    >
                      {step.number}
                    </div>
                    <Icon className="h-6 w-6 mb-1" />
                    <span className="mt-1 text-xs font-medium text-center">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop and sm+ layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                        ${
                          isActive
                            ? "bg-white text-blue-600"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                    >
                      {step.number}
                    </div>
                    <Icon className="h-5 w-5" />
                    <span className="font-medium hidden sm:block">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 md:rounded-full sm:rounded-none flex items-center justify-center text-white text-xl font-bold">
                    {steps[activeStep].number}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {steps[activeStep].title}
                    </h2>
                    <p className="text-xl text-gray-300">
                      {steps[activeStep].description}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {steps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex space-x-4">
                  {activeStep > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                    >
                      Previous Step
                    </Button>
                  )}
                  {activeStep < steps.length - 1 && (
                    <Button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              key={"visual" + activeStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-gray-800/50 border-blue-500/20 overflow-hidden">
                <CardContent className="p-4 flex items-center justify-center aspect-video">
                  <Lottie
                    animationData={steps[activeStep].animation}
                    loop
                    autoplay
                    className="w-full h-full max-w-md"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technology Behind Immutag */}
      <section className="py-20 bg-gray-800/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Technology Behind Immutag
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Immutag utilises advanced blockchain technology, specifically NFTs,
            ensuring all ownership data is immutable, transparent, yet
            completely secure. Our infrastructure is built on robust
            cryptographic standards, offering unparalleled security.
          </p>
        </motion.div>
      </section>

      <EnhancedCTASection />
    </div>
  );
}

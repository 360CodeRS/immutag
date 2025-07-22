"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Zap, Clock, ArrowRightLeft, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView, useAnimation } from "framer-motion";

const benefits = [
  {
    icon: Shield,
    title: "Proven Ownership",
    description: "Your tag is linked to a blockchain-verified NFT, providing immutable proof of ownership that cannot be forged.",
  },
  {
    icon: Users,
    title: "Theft Deterrent", 
    description: "Make it harder for thieves to profit from stolen goods with verifiable ownership records.",
  },
  {
    icon: Clock,
    title: "Faster Insurance Claims",
    description: "Verifiable ownership history speeds up insurance payouts and reduces claim processing time.",
  },
  {
    icon: ArrowRightLeft,
    title: "Simplified Transfers",
    description: "Sell or gift your item with digital proof of ownership transfer, making transactions seamless.",
  },
  {
    icon: CheckCircle2,
    title: "Law Enforcement Integration",
    description: "Streamlined verification process for law enforcement to check for stolen assets quickly.",
  },
  {
    icon: Zap,
    title: "Trust in Technology",
    description: "Built with transparency, security, and compliance at the core. Your ownership record is encrypted and immutable.",
  },
];

export function BenefitsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        {/* Animated background grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Why Immutag?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionary blockchain technology meets practical asset protection. 
            <span className="text-blue-300 font-semibold"> Experience the future of digital ownership.</span>
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <motion.div
                key={index}
                data-index={index}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="group perspective-1000"
              >
                <Card
                  className={`
                    relative h-full bg-slate-900/40 backdrop-blur-sm 
                    border border-blue-500/20 hover:border-blue-400/40
                    transition-all duration-500 overflow-hidden
                    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                  `}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="relative p-8 text-center h-full flex flex-col">
                    {/* Icon with animated background */}
                    <div className="mb-6 flex justify-center">
                      <motion.div
                        className="relative p-4 rounded-2xl bg-blue-500/10 border border-blue-400/30"
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-10 w-10 text-blue-400" />
                        
                        {/* Rotating ring */}
                        <motion.div
                          className="absolute inset-0 border border-blue-400/20 rounded-2xl"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed flex-grow group-hover:text-slate-200 transition-colors duration-300">
                      {benefit.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div
                      className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? "60%" : 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-8 py-4 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse" />
            <span className="text-blue-200 font-semibold text-lg">
              Join thousands protecting their valuable devices with Immutag
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

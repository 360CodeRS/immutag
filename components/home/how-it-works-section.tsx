"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Tag, Lock, Zap } from "lucide-react";

export function HowItWorksSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <motion.section 
      ref={targetRef}
      className="py-24 relative overflow-hidden"
      style={{ opacity, scale }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, cyan 2px, transparent 2px),
                              radial-gradient(circle at 75% 75%, purple 2px, transparent 2px)`,
              backgroundSize: '100px 100px',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Immutag links a tamper-proof tag on your device with a unique digital identity stored on the blockchain. 
            Once tagged, your item becomes verifiable, transferable, and harder to steal or resell.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Tag, title: "Tag your device", desc: "Apply our tamper-proof smart tag to your valuable device" },
            { icon: Lock, title: "Register it securely", desc: "Create an immutable blockchain record of ownership" },
            { icon: Zap, title: "Prove, transfer, or recover", desc: "Access ownership anytime, anywhere with full verification" }
          ].map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
                    <step.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

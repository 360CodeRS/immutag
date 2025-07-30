"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Trust in Technology
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            We're building with <span className="text-slate-50 font-semibold">Transparency</span>, 
            <span className="text-cyan-400 font-semibold"> Security</span>, and 
            <span className="text-indigo-400 font-semibold"> Compliance</span> at the core.
          </p>
          <motion.p 
            className="text-lg text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your ownership record is encrypted, immutable, and verifiable — anytime, anywhere.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { 
                icon: Lock,
                label: "Encrypted", 
                desc: "End-to-end encryption",
                iconColor: "text-indigo-400"
              },
              { 
                icon: Shield,
                label: "Immutable", 
                desc: "Blockchain security",
                iconColor: "text-purple-400"
              },
              { 
                icon: CheckCircle,
                label: "Verifiable", 
                desc: "Global accessibility",
                iconColor: "text-cyan-400"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <motion.div
                    className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                  </motion.div>
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-slate-200 transition-colors">
                  {feature.label}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>

                {/* Accent line */}
                <motion.div
                  className={`mt-4 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function EnhancedCTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-purple-950">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay Ahead of the Curve
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Be the first to protect what's yours. Join our waitlist to get early access,
            news updates, and exclusive launch offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="border-2 border-sky-500/50 text-blue-300 hover:bg-purple-500/10 hover:border-sky-400 px-12 py-6 rounded-full text-xl font-bold backdrop-blur-sm bg-black/20"
              >
                Join the Waitlist
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-12 py-6 rounded-full text-xl font-bold backdrop-blur-sm bg-black/20"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Button> */}
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 backdrop-blur-sm">
              <div className="flex space-x-1 mr-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
              <span className="text-emerald-300 font-semibold text-lg">
                Join thousands already on the waitlist
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Smartphone, Laptop, Watch, Bike } from "lucide-react";
import Image from "next/image";

export function SupportedDevicesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Supported Devices
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immutag is being developed to protect your most valuable devices
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: Smartphone,
              label: "Smartphones",
              color: "from-purple-400 to-pink-400",
              image: "/images/smartphone.svg"
            },
            {
              icon: Laptop,
              label: "Laptops",
              color: "from-blue-400 to-violet-400",
              image: "/images/laptop.png"
            },
            {
              icon: Bike,
              label: "E-bikes",
              color: "from-sky-400 to-emerald-400",
              image: "/images/ebike.png"
            },
            {
              icon: Watch,
              label: "Smartwatches",
              color: "from-purple-400 to-blue-400",
              image: "/images/smartwatch.png"
            }
          ].map((device, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-gray-700/30 group-hover:border-gray-500/50 transition-all duration-300 text-center h-full flex flex-col">

                {/* Device Image */}
                <div className="mb-4 flex justify-center relative">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src={device.image}
                      alt={device.label}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback icon (hidden by default) */}
                    <div className={`hidden absolute inset-0 flex items-center justify-center p-4 rounded-full bg-gradient-to-r ${device.color} bg-opacity-20 border-2 border-current`}>
                      <device.icon className={`h-12 w-12 bg-gradient-to-r ${device.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${device.color} opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300`} />
                </div>

                {/* Device Label */}
                <h3 className="text-xl font-semibold text-white group-hover:text-gray-200 transition-colors mt-auto">
                  {device.label}
                </h3>

                {/* Accent line */}
                <motion.div
                  className={`mt-3 h-0.5 bg-gradient-to-r ${device.color} rounded-full mx-auto`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-800/70 to-gray-900/70 border border-gray-600/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse" />
            <span className="text-gray-300 font-medium">More categories launching soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

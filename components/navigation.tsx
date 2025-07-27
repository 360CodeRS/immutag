"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuContent: { [key: string]: { title: string; description?: string; link: string }[] } = {
    "Company": [
      { title: "About Us", description: "Learn more about our company and team.", link: "/about" },
      { title: "Roadmap", description: "Our plans for the future.", link: "/roadmap" },
      { title: "How It Works", description: "Understand the mechanics of Immutag.", link: "/how-it-works" },

    ],
    "Resources": [
      { title: "Whitepaper", description: "Read our detailed whitepaper.", link: "/whitepaper" },
    ],
  };

  // Close dropdown menu
  const closeDropdown = () => {
    setHoveredMenu(null)
  }

  return (
    <>
      <AnimatePresence>
        {hoveredMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setHoveredMenu(null)}
          />
        )}
      </AnimatePresence>
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${scrolled
          ? "bg-gray-900/80 border-b border-blue-500/20 shadow-md"
          : "bg-gray-900/30"
          }`}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/immutag-logo.png" alt="Immutag" width={120} height={40} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Home as separate link */}
              <Link href="/" className="text-gray-300 hover:text-blue-400 font-medium transition duration-200">
                Home
              </Link>

              {/* Dropdown menus */}
              {Object.keys(menuContent).map((title) => (
                <div
                  key={title}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(title)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <span className="flex items-center text-gray-300 hover:text-blue-400 font-medium transition duration-200 cursor-pointer">
                    {title} <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${hoveredMenu === title ? 'transform rotate-180' : ''}`} />
                  </span>
                </div>
              ))}

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition duration-200 transform hover:scale-105">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white z-60 relative"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
          <AnimatePresence>
            {hoveredMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-0 w-full"
                onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-lg p-6">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                    {menuContent[hoveredMenu].map((item, idx) => (
                      <Link href={item.link} key={idx} onClick={closeDropdown}>
                        <div className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-700/50 cursor-pointer">
                          <h4 className="font-semibold text-lg mb-1 text-white">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Full Height Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="flex h-full">
              {/* Backdrop */}
              <div
                className="flex-1 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Content */}
              <div className="w-80 bg-gray-900/95 backdrop-blur-md border-l border-blue-500/20 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                  <Image src="/images/immutag-logo.png" alt="Immutag" width={100} height={33} />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  {/* Home link */}
                  <Link
                    href="/"
                    className="block text-blue-400 hover:text-blue-400 font-sm py-3 text-lg border-b border-gray-700/50"
                    onClick={() => setIsOpen(false)}
                  >
                    HOME
                  </Link>

                  {Object.keys(menuContent).map((title) => (
                    <div key={title}>
                      <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
                        {title}
                      </h3>
                      <div className="space-y-2 ml-2">
                        {menuContent[title].map((item, idx) => (
                          <Link
                            href={item.link}
                            key={idx}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="p-3 rounded-lg transition-colors duration-200 hover:bg-gray-800/60 cursor-pointer">
                              <h4 className="font-medium mb-1 text-white">
                                {item.title}
                              </h4>
                              {item.description && (
                                <p className="text-xs text-gray-400">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-700/50">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

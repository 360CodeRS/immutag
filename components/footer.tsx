import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/images/immutag-logo.webp" alt="Immutag" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Combining blockchain technology with physical tagging to give you irrefutable proof of ownership for your most valuable devices
            </p>

          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">
                  How It Works
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">

              <li>
                <Link href="/whitepaper" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Whitepaper
                </Link>
              </li>

            </ul>
          </div>


        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()}  Immutag. All rights reserved. Securing ownership through blockchain innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}

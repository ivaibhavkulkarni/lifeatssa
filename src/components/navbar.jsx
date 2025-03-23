"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLayoutDropdownOpen, setIsLayoutDropdownOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const layoutOptions = [
    { name: "Life@SSA Students", path: "/life@ssa-students" },
    { name: "Life@SSA Teachers", path: "/life@ssa-teachers" },
  ]

  return (
    <nav className="w-full bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Navbar
          </Link>
          <div className="flex items-center space-x-6">
            {/* Button Layouts Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLayoutDropdownOpen(!isLayoutDropdownOpen)
                }}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                Life@SSA
                <ChevronDown className={`w-4 h-4 transition-transform ${isLayoutDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isLayoutDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  {layoutOptions.map((layout) => (
                    <Link
                      key={layout.name}
                      href={layout.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsLayoutDropdownOpen(false)}
                    >
                      {layout.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-800">
            navbar
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-md shadow-lg py-2 z-20">
            {/* Button Layouts Section */}
            <div>
              <button
                onClick={() => setIsLayoutDropdownOpen(!isLayoutDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                <span>Life@SSA</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLayoutDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isLayoutDropdownOpen && (
                <div className="bg-gray-50 py-1">
                  {layoutOptions.map((layout) => (
                    <Link
                      key={layout.name}
                      href={layout.path}
                      className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => {
                        setIsLayoutDropdownOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      {layout.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


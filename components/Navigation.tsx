'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

const sectors = [
  { name: 'Manufacturing & Industrial', href: '/sectors/manufacturing', description: 'Prevent injuries on production lines, reduce fatigue, and keep operations compliant.' },
  { name: 'Pharma & MedTech', href: '/sectors/pharma', description: 'Support GMP compliance, improve ergonomics in high-precision tasks.' },
  { name: 'Government & Public Sector', href: '/sectors/government', description: 'Meet duty of care, reduce absence costs, simplify compliance.' },
  { name: 'Construction & Infrastructure', href: '/sectors/construction', description: 'Manage manual task risks, streamline safety reporting.' },
  { name: 'Hybrid & Office-based', href: '/sectors/hybrid', description: 'Ensure DSE compliance and wellbeing, anywhere.' }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSectorsOpen, setIsSectorsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Habitus Health</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            
            {/* Sectors Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsSectorsOpen(true)}
              onMouseLeave={() => setIsSectorsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                <span>Sectors</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Mega Menu */}
              {isSectorsOpen && (
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-white shadow-2xl border border-gray-200 rounded-lg p-8 transform -translate-x-1/2">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Who We Help</h3>
                      <p className="text-gray-600 mb-6">
                        From factory floors to council offices, Habitus is protecting workforces 
                        and strengthening resilience across industries.
                      </p>
                      <Link href="/sectors" className="text-primary-600 hover:text-primary-700 font-medium">
                        View all sectors →
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {sectors.map((sector) => (
                        <Link
                          key={sector.name}
                          href={sector.href}
                          className="group p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                                {sector.name}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">{sector.description}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">
              Solutions
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Sectors Dropdown */}
              <div>
                <button
                  onClick={() => setIsSectorsOpen(!isSectorsOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <span>Sectors</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSectorsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSectorsOpen && (
                  <div className="pl-4 space-y-1">
                    {sectors.map((sector) => (
                      <Link
                        key={sector.name}
                        href={sector.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                href="/how-it-works" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/blog" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <div className="px-4 pt-2">
                <Link href="/contact" className="btn-primary w-full text-center">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

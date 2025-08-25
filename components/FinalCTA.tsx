'use client'

import Link from 'next/link'
import { ArrowRight, Download, Calendar } from 'lucide-react'

export default function FinalCTA() {
  const scrollToSectors = () => {
    const sectorsSection = document.getElementById('sectors')
    if (sectorsSection) {
      sectorsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
      <div className="container-custom text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to protect your people and prove your impact?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join leading organizations that are already protecting their workforce 
            and proving their impact with Habitus. Start your journey to better 
            workplace safety today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="btn-hero-primary inline-flex items-center space-x-2 group">
              <Calendar className="w-5 h-5" />
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/roi-calculator" className="btn-hero-secondary inline-flex items-center space-x-2 group">
              <Download className="w-5 h-5" />
              <span>Download the ROI Calculator</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>
          
          <button
            onClick={scrollToSectors}
            className="text-primary-100 hover:text-white font-medium inline-flex items-center space-x-2 group transition-colors"
          >
            <span>Find your sector</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

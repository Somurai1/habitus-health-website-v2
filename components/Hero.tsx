import Link from 'next/link'
import { Shield, Users, TrendingUp, Play, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Protect your workforce. Build resilience. Prove your impact.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              From preventing injuries to proving compliance, Habitus gives you the tools and insights 
              to keep your people healthy, safe, and performing at their best — while meeting every 
              regulation and freeing up time for what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-hero-primary inline-flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Book a Demo
              </Link>
              <Link href="/how-it-works" className="btn-hero-secondary inline-flex items-center gap-3 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                See how it works
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Trial-to-contract conversion rate</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Employees protected</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-gray-600">Reduction in injury risk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Shield, Users, TrendingUp, Play, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI-powered workplace health and safety platform for injury prevention, compliance, and wellbeing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Protect your workforce with Habitus Health. AI-powered risk detection, ergonomic support, and wellbeing tools for modern organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-hero-primary inline-flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Book a Demo
              </Link>
              <Link href="/how-it-works" className="btn-hero-secondary inline-flex items-center gap-3">
                <Play className="w-5 h-5" />
                See how it works
              </Link>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Risk Detection</h3>
              <p className="text-gray-600">Advanced algorithms identify workplace hazards before they become injuries</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Workforce Protection</h3>
              <p className="text-gray-600">Comprehensive safety solutions for every worker, everywhere</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">40% reduction in injury risk and 70% faster compliance reporting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

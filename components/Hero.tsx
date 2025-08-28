import Link from 'next/link'
import { Shield, Users, TrendingUp, Play, Calendar, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section">
      <div className="section-header text-center">
        <h1 className="heading-1 text-4xl md:text-5xl lg:text-6xl">
          AI-powered workplace health and safety platform for injury prevention, compliance, and wellbeing
        </h1>
        <p className="section-subtitle text-xl md:text-2xl max-w-4xl mx-auto">
          Protect your workforce with Habitus Health. AI-powered risk detection, ergonomic support, and wellbeing tools for modern organisations.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link href="/contact" className="btn-primary text-base px-6 py-3">
          <Calendar className="w-5 h-5 mr-2" />
          Book a Demo
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
        <Link href="/how-it-works" className="btn-secondary text-base px-6 py-3">
          <Play className="w-5 h-5 mr-2" />
          See how it works
        </Link>
      </div>
      
      {/* Trust Indicators - GitBook-style Cards */}
      <div className="grid-cards">
        <div className="card fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="card-body text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-3">AI-Powered Risk Detection</h3>
            <p className="body-text">Advanced algorithms identify workplace hazards before they become injuries</p>
          </div>
        </div>
        
        <div className="card fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="card-body text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-3">Workforce Protection</h3>
            <p className="body-text">Comprehensive safety solutions for every worker, everywhere</p>
          </div>
        </div>
        
        <div className="card fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="card-body text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="heading-3">Proven Results</h3>
            <p className="body-text">40% reduction in injury risk and 70% faster compliance reporting</p>
          </div>
        </div>
      </div>

      {/* Info Block */}
      <div className="info-block mt-8">
        <div className="flex items-start">
          <Shield className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Trusted by Leading Organizations</h4>
            <p className="text-blue-800 text-sm">
              J&J MedTech, Kerry Group, Wates Construction, Cork County Council, and more rely on Habitus Health 
              to protect their workforces and ensure compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

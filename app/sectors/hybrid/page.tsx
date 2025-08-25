import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { Monitor, Shield, TrendingUp, Users, Clock, CheckCircle, Home, Building } from 'lucide-react'

export default function HybridPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hybrid & Office-based Organisations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthy work, anywhere. Whether staff are in the office, at home, or in 
              co-working spaces, DSE compliance and wellbeing remain your responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                The Challenge
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Inconsistent Work Setups
                  </h3>
                  <p className="text-gray-600">
                    Staff working from different locations with varying workstation 
                    setups, making DSE compliance difficult to monitor and enforce.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Rising Musculoskeletal Complaints
                  </h3>
                  <p className="text-gray-600">
                    Increased cases of back pain, neck strain, and repetitive strain 
                    injuries in hybrid teams working from non-ergonomic setups.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Compliance Without In-Person Assessments
                  </h3>
                  <p className="text-gray-600">
                    Managing DSE compliance across multiple locations and work 
                    arrangements without the ability to conduct on-site assessments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Assess Anywhere
                  </h3>
                  <p className="text-gray-600">
                    AI-enabled DSE assessments work remotely or on site, 
                    providing consistent evaluation regardless of location.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Act Quickly
                  </h3>
                  <p className="text-gray-600">
                    Tailored fixes for poor posture, workstation setup, and screen use, 
                    with immediate recommendations for improvement.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Monitor and Improve
                  </h3>
                  <p className="text-gray-600">
                    Discomfort tracking and wellbeing scores show ongoing progress, 
                    helping you measure the impact of your interventions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Proven Results
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 rounded-xl bg-green-50 border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">47%</div>
                  <p className="text-gray-700">
                    Reduction in musculoskeletal complaints across hybrid teams
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <p className="text-gray-700">
                    Compliance rates in audited departments
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Measurable</div>
                  <p className="text-gray-700">
                    Gains in employee wellbeing and satisfaction scores
                  </p>
                </div>
              </div>
              
              {/* ROI Calculator Preview */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Calculate Your Potential Savings
                </h3>
                <p className="text-gray-600 mb-6">
                  See how much you could save by improving DSE compliance and 
                  reducing musculoskeletal issues in your hybrid workforce.
                </p>
                <Link href="/roi-calculator" className="btn-primary inline-flex items-center space-x-2">
                  <span>Try the ROI Calculator</span>
                  <TrendingUp className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Modules Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Relevant Modules
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    DSE Compliance
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive display screen equipment assessments that work 
                    remotely, ensuring compliance across all work locations.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Best fit for hybrid, office-based organizations</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Discomfort & Injury Tracking
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Monitor early warning signs and track improvements in 
                    musculoskeletal health across your distributed workforce.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Best fit for all sectors</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Mental Health Support
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Accessible resources to strengthen resilience and engagement, 
                    supporting the mental wellbeing of remote and hybrid workers.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Best fit for knowledge workers, hybrid teams</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Dashboards & Analytics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Centralized view of wellbeing and compliance across all locations, 
                    with insights to drive continuous improvement.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Best fit for multi-location organizations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Case Studies
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-600">Wellbeing Improvement</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Global Tech Company
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A technology company with 5,000 hybrid workers achieved 47% reduction 
                    in musculoskeletal complaints using Habitus DSE assessments.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Result:</strong> 47% reduction in musculoskeletal complaints
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-600">Compliance Success</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Financial Services Firm
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Achieved 100% compliance rates in audited departments, with 
                    measurable improvements in employee wellbeing scores.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Result:</strong> 100% compliance rates in audited departments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Support Your People Wherever They Work
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join organizations that are already ensuring DSE compliance and 
              supporting wellbeing across their hybrid and remote workforce.
            </p>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2">
              <span>Book a Demo</span>
              <CheckCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

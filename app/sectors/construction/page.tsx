import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { HardHat, Shield, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react'

export default function ConstructionPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HardHat className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Construction & Infrastructure
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build safety into every shift. Heavy workloads, long hours, and physically 
              demanding tasks put construction crews at constant risk.
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
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Manual Handling & Repetitive Strain
                  </h3>
                  <p className="text-gray-600">
                    Heavy lifting, awkward postures, and repetitive movements lead to 
                    musculoskeletal injuries that can sideline workers for weeks.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Fatigue & Reduced Alertness
                  </h3>
                  <p className="text-gray-600">
                    Long shifts and physically demanding work lead to fatigue, 
                    increasing the risk of accidents and injuries on site.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Complex Reporting Requirements
                  </h3>
                  <p className="text-gray-600">
                    Contractors and regulators require detailed safety documentation, 
                    creating administrative burden for site managers.
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
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Assess Without Slowing Work
                  </h3>
                  <p className="text-gray-600">
                    AI-driven video assessments capture real-world tasks on site 
                    without disrupting productivity or workflow.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Tackle High-Risk Activities First
                  </h3>
                  <p className="text-gray-600">
                    Ergonomists prioritize actions with the most impact, 
                    focusing on activities that pose the greatest risk to workers.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Keep Records Ready
                  </h3>
                  <p className="text-gray-600">
                    Dashboards centralize safety and compliance data across projects, 
                    making reporting and audits straightforward.
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
                  <div className="text-3xl font-bold text-green-600 mb-2">6 months</div>
                  <p className="text-gray-700">
                    Reduction in manual handling injuries in under 6 months
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Faster</div>
                  <p className="text-gray-700">
                    Faster, easier reporting for site managers
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Improved</div>
                  <p className="text-gray-700">
                    Improved crew resilience and productivity
                  </p>
                </div>
              </div>
              
              {/* ROI Calculator Preview */}
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Calculate Your Potential Savings
                </h3>
                <p className="text-gray-600 mb-6">
                  See how much you could save by reducing injuries and improving 
                  safety compliance on your construction sites.
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
                    Manual Task AI Assessments
                  </h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered video analysis identifies risky postures and movements 
                    in real construction tasks, from lifting to repetitive operations.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Best fit for construction, infrastructure</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Anti-Fatigue Devices
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Reduce strain and boost shift performance with ergonomic solutions 
                    designed for physically demanding construction work.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Best fit for construction, heavy industry</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Injury & Discomfort Tracking
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Spot early warning signs in your construction crews and act 
                    before minor issues escalate into serious injuries.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Best fit for all sectors</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Dashboards & Analytics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Centralize safety data across multiple sites and projects, 
                    with real-time insights for better decision-making.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Best fit for multi-site operations</span>
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
                    <span className="text-sm font-medium text-gray-600">Success Story</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Major Infrastructure Project
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A large construction company reduced manual handling injuries by 60% 
                    across three major infrastructure projects using Habitus assessments.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Result:</strong> 60% reduction in manual handling injuries
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-600">Efficiency Gain</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Multi-Site Construction Firm
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Site managers now complete safety assessments 80% faster, 
                    freeing up valuable time for on-site supervision and worker training.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Result:</strong> 80% faster safety assessments
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
              Make Every Site Safer and Every Report Simpler
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join construction companies that are already protecting their crews 
              and streamlining their safety processes with Habitus.
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

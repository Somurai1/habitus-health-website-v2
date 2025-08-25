import { Video, Monitor, Zap, Activity, Brain, ArrowRight } from 'lucide-react'

const modules = [
  {
    icon: Video,
    title: 'Manual task AI assessments',
    description: 'Stop musculoskeletal disorders before they start with AI-powered video analysis of workers in real tasks.',
    bestFit: ['Manufacturing', 'Construction', 'Pharma'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Monitor,
    title: 'DSE compliance',
    description: 'Protect hybrid workers and keep them productive without site visits.',
    bestFit: ['Hybrid & Office', 'Government', 'Pharma'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'Anti-fatigue devices',
    description: 'Reduce strain, boost shift performance, and improve resilience across the workforce.',
    bestFit: ['Manufacturing', 'Construction', 'Pharma'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Activity,
    title: 'Injury & discomfort tracking',
    description: 'Spot early warning signs in your people and act before they escalate.',
    bestFit: ['All Sectors'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Brain,
    title: 'Mental health support',
    description: 'Accessible resources to strengthen resilience and engagement.',
    bestFit: ['All Sectors'],
    color: 'from-red-500 to-red-600'
  }
]

export default function ModulesSection() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The platform modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All benefit-first, tech-enabled to protect workers. Each module is designed to address 
            specific safety challenges while integrating seamlessly with your existing systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <div
                key={module.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{module.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{module.description}</p>
                
                {/* Best fit tags */}
                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 mb-2">Best fit for:</div>
                  <div className="flex flex-wrap gap-2">
                    {module.bestFit.map((sector) => (
                      <span
                        key={sector}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

        {/* How it fits section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How it fits into your world
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integrates with ERP, HR, and LIMS systems</h4>
              <p className="text-gray-600 text-sm">
                Seamlessly connects with your existing technology stack
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure and compliant</h4>
              <p className="text-gray-600 text-sm">
                ISO 27001, GDPR, EU AI Act ready
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Scales from 50 to 50,000 employees</h4>
              <p className="text-gray-600 text-sm">
                Grows with your organization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

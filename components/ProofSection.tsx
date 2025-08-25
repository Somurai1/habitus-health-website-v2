import { Shield, CheckCircle, Award } from 'lucide-react'

const trustedOrganizations = [
  'J&J MedTech',
  'Kerry Group',
  'Cork County Council'
]

const stats = [
  {
    value: '100%',
    label: 'trial-to-contract conversion rate',
    icon: CheckCircle,
    color: 'from-green-500 to-green-600'
  },
  {
    value: '50,000+',
    label: 'employees protected',
    icon: Shield,
    color: 'from-blue-500 to-blue-600'
  },
  {
    value: '40%',
    label: 'reduction in injury risk in pilot sites',
    icon: Award,
    color: 'from-purple-500 to-purple-600'
  }
]

const complianceBadges = [
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'GDPR', description: 'Data Protection Compliance' },
  { name: 'EU AI Act Ready', description: 'AI Governance Standards' }
]

export default function ProofSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        {/* Trusted Organizations */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by leading organisations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustedOrganizations.map((org, index) => (
              <div
                key={org}
                className="text-gray-600 font-medium text-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {org}
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Compliance Badges */}
        <div className="text-center animate-fade-in">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Compliance & Standards
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {complianceBadges.map((badge, index) => (
              <div
                key={badge.name}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-semibold text-gray-900 mb-1">{badge.name}</div>
                <div className="text-sm text-gray-600">{badge.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

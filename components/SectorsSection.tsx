import Link from 'next/link'
import { Factory, Shield, Building2, Car, Home } from 'lucide-react'

const sectors = [
  {
    name: 'Manufacturing & Industrial',
    description: 'Prevent injuries on production lines, reduce fatigue, and keep operations compliant with ISO 45001.',
    icon: Factory,
    href: '/sectors/manufacturing',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Pharma & MedTech',
    description: 'Support GMP compliance, improve ergonomics in high-precision tasks, and deliver audit-ready evidence.',
    icon: Shield,
    href: '/sectors/pharma',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Government & Public Sector',
    description: 'Meet duty of care requirements, control costs, and protect diverse roles — from desk-based to field-based staff.',
    icon: Building2,
    href: '/sectors/government',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Construction & Infrastructure',
    description: 'Manage manual task risks, streamline safety reporting, and integrate with existing safety systems.',
    icon: Car,
    href: '/sectors/construction',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Hybrid & Office-based',
    description: 'Ensure DSE compliance, improve wellbeing, and maintain consistent safety standards across locations.',
    icon: Home,
    href: '/sectors/hybrid',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export default function SectorsSection() {
  return (
    <section id="sectors" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who we help</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted across industries. From factory floors to council offices, Habitus is protecting 
            workforces and strengthening resilience in:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <Link
                key={sector.name}
                href={sector.href}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${sector.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {sector.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {sector.description}
                </p>
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

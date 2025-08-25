import Link from 'next/link'
import { TrendingUp, Clock, Users, ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'Global medtech leader',
    subtitle: '40% drop in injury risk in 30 days',
    description: 'After implementing worker-focused assessments, this leading medtech company achieved remarkable safety improvements.',
    metrics: [
      { label: 'Injury Risk Reduction', value: '40%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
      { label: 'Time to Implementation', value: '30 days', icon: Clock, color: 'from-blue-500 to-blue-600' },
      { label: 'Workers Protected', value: '2,500+', icon: Users, color: 'from-purple-500 to-purple-600' }
    ],
    sector: 'Pharma & MedTech',
    sectorLink: '/sectors/pharma'
  },
  {
    title: 'Local authority',
    subtitle: 'Assessment time cut by 70%',
    description: 'A local government organization streamlined their safety processes, freeing up valuable time for prevention.',
    metrics: [
      { label: 'Time Savings', value: '70%', icon: Clock, color: 'from-blue-500 to-blue-600' },
      { label: 'Hours Saved Weekly', value: '12 hours', icon: TrendingUp, color: 'from-green-500 to-green-600' },
      { label: 'Staff Satisfaction', value: '85%', icon: Users, color: 'from-purple-500 to-purple-600' }
    ],
    sector: 'Government',
    sectorLink: '/sectors/government'
  },
  {
    title: 'Manufacturing facility',
    subtitle: 'Zero lost-time injuries in 12 months',
    description: 'A manufacturing plant achieved an unprecedented safety record through proactive risk management.',
    metrics: [
      { label: 'Lost-Time Injuries', value: '0', icon: TrendingUp, color: 'from-green-500 to-green-600' },
      { label: 'Near-Miss Reports', value: '+300%', icon: Clock, color: 'from-blue-500 to-blue-600' },
      { label: 'Safety Culture Score', value: '92%', icon: Users, color: 'from-purple-500 to-purple-600' }
    ],
    sector: 'Manufacturing',
    sectorLink: '/sectors/manufacturing'
  }
]

export default function CaseStudiesSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Proof in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real organizations. See how Habitus has transformed 
            workplace safety across different industries and company sizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-primary-200 transition-colors animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-lg font-semibold text-primary-600 mb-3">{study.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{study.description}</p>
              </div>

              {/* Metrics */}
              <div className="space-y-4 mb-6">
                {study.metrics.map((metric, metricIndex) => {
                  const Icon = metric.icon
                  return (
                    <div key={metric.label} className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                        <div className="font-semibold text-gray-900">{metric.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Sector and CTA */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{study.sector}</span>
                <Link 
                  href={study.sectorLink}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Link href="/sectors" className="btn-outline text-lg px-8 py-4">
            Read more case studies
          </Link>
        </div>
      </div>
    </section>
  )
}

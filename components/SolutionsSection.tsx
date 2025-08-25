import Link from 'next/link'
import { Shield, CheckCircle, Clock, TrendingUp, ArrowRight, Calendar, Play } from 'lucide-react'

const solutions = [
  {
    icon: Shield,
    title: 'Reduce risk before it becomes injury',
    description: 'AI pinpoints risky movements, poor setups, and early signs of strain — so you can protect workers before problems escalate.',
    color: 'from-green-500 to-green-600',
    sectorLink: '/sectors/manufacturing'
  },
  {
    icon: CheckCircle,
    title: 'Prove compliance instantly',
    description: 'Audit-ready reports at the click of a button, aligned with ISO, EU, and national standards — showing your workforce is protected.',
    color: 'from-blue-500 to-blue-600',
    sectorLink: '/sectors/pharma'
  },
  {
    icon: Clock,
    title: 'Save hours every week',
    description: 'Automated assessments and instant dashboards free up time for prevention, coaching, and worker engagement.',
    color: 'from-purple-500 to-purple-600',
    sectorLink: '/sectors/government'
  },
  {
    icon: TrendingUp,
    title: 'Show your value',
    description: 'Real-time ROI metrics and wellbeing scores demonstrate how protecting your people drives business results.',
    color: 'from-orange-500 to-orange-600',
    sectorLink: '/sectors/construction'
  }
]

export default function SolutionsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Habitus delivers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent platform transforms workplace safety from reactive to proactive, 
            delivering measurable improvements across all key areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <Link 
                  href={solution.sectorLink}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                >
                  <span>See it in action</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to transform your workplace safety?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            See how Habitus can help you protect your workforce, prove compliance, 
            and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-hero-primary inline-flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Book a Demo
            </Link>
            <Link href="/how-it-works" className="btn-hero-secondary inline-flex items-center gap-3">
              <Play className="w-5 h-5" />
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

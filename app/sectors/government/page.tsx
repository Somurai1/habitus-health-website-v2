import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  AlertTriangle,
  Target,
  BarChart3,
  Award,
  Zap,
  Shield
} from 'lucide-react'

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Multiple job types: office, field, and public-facing roles',
    description: 'Diverse workforce with varying safety needs across different environments.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Clock,
    title: 'High absence costs from preventable injuries and fatigue',
    description: 'Public sector budgets are strained by avoidable workplace incidents.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Time lost to manual compliance processes',
    description: 'Administrative burden reduces time available for core public services.',
    color: 'from-yellow-500 to-yellow-600'
  }
]

const solutions = [
  {
    icon: Target,
    title: 'One platform for all roles',
    description: 'From DSE compliance to manual task assessments, tailored to each job type.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Spot and fix early',
    description: 'Injury and discomfort tracking catches issues before they escalate.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: CheckCircle,
    title: 'Prove your duty of care',
    description: 'Audit-ready evidence for health, safety, and wellbeing initiatives.',
    color: 'from-purple-500 to-purple-600'
  }
]

const results = [
  {
    metric: '70%',
    label: 'reduction in time spent on assessments',
    icon: Clock,
    color: 'from-green-500 to-green-600'
  },
  {
    metric: 'Improved',
    label: 'worker satisfaction and engagement scores',
    icon: Users,
    color: 'from-blue-500 to-blue-600'
  },
  {
    metric: 'Documented',
    label: 'compliance gains for audits and tenders',
    icon: Award,
    color: 'from-purple-500 to-purple-600'
  }
]

const modules = [
  {
    title: 'Manual task AI assessments',
    description: 'AI-powered video analysis identifies ergonomic risks in field and office work.',
    icon: Target
  },
  {
    title: 'DSE compliance',
    description: 'Protect office workers and ensure proper workstation setup.',
    icon: Zap
  },
  {
    title: 'Discomfort and injury tracking',
    description: 'Early warning system for musculoskeletal issues before they become injuries.',
    icon: AlertTriangle
  },
  {
    title: 'Mental health support',
    description: 'Resources to maintain resilience in high-pressure public service roles.',
    icon: Award
  },
  {
    title: 'Dashboards and analytics',
    description: 'Real-time visibility into safety performance and compliance status.',
    icon: BarChart3
  }
]

const caseStudies = [
  {
    company: 'Local Authority',
    challenge: 'High injury rates among field workers and office staff affecting 800 employees',
    solution: 'Implemented comprehensive safety platform across all departments',
    results: [
      '65% reduction in workplace injuries',
      '80% improvement in compliance reporting efficiency',
      'ROI of 320% within 15 months'
    ]
  },
  {
    company: 'Government Agency',
    challenge: 'Manual compliance processes consuming 15 hours per week per manager',
    solution: 'Deployed automated safety assessment and reporting system',
    results: [
      '70% reduction in compliance time',
      '100% audit readiness achieved',
      'Improved staff morale and retention'
    ]
  }
]

export default function GovernmentPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-600 font-semibold">Government & Public Sector</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Protecting people, proving value.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Local authorities and public agencies face a duty of care across diverse roles, 
                often with tight budgets and heavy reporting demands. Habitus delivers the 
                comprehensive safety solutions you need to protect your workforce and prove your impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Demo
                </Link>
                <Link href="#how-it-works" className="btn-outline">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-scale-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average injury cost</span>
                  <span className="text-2xl font-bold text-red-600">$38,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Compliance time</span>
                  <span className="text-2xl font-bold text-blue-600">12-18 hrs/week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Audit frequency</span>
                  <span className="text-2xl font-bold text-purple-600">2-4 per year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Government organizations face unique safety challenges that require flexible, 
              cost-effective solutions while maintaining the highest standards of public service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={challenge.title}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="how-it-works" className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive safety solutions that work across diverse public sector 
              environments while delivering measurable value and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={solution.title}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our government clients consistently achieve measurable improvements in safety, 
              efficiency, and compliance while protecting their workforce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {results.map((result, index) => {
              const Icon = result.icon
              return (
                <div
                  key={result.label}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-24 h-24 bg-gradient-to-r ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{result.metric}</div>
                  <div className="text-gray-600">{result.label}</div>
                </div>
              )
            })}
          </div>

          {/* ROI Calculator Preview */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center border border-purple-100 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Calculate Your ROI
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              See how much you could save with Habitus. Our ROI calculator shows the real cost 
              of workplace injuries and the potential savings from prevention.
            </p>
            <Link href="/roi-calculator" className="btn-primary">
              Try the ROI Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Relevant Modules */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Relevant Modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These platform modules are specifically designed to address the unique 
              challenges of government and public sector environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon
              return (
                <div
                  key={module.title}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real government organizations. See how Habitus has 
              transformed workplace safety across different public sector environments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.company}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{study.company}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Deliver safer workplaces and stronger compliance with less effort.
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join leading government organizations who are already protecting their workforce 
              and proving their impact with Habitus.
            </p>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

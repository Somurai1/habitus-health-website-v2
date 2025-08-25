import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  AlertTriangle,
  Target,
  BarChart3,
  Award,
  Zap
} from 'lucide-react'

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Ergonomic strain in high-precision tasks',
    description: 'Repetitive movements and poor posture in lab work lead to musculoskeletal issues.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Clock,
    title: 'Fatigue affecting focus and accuracy',
    description: 'Long hours and demanding precision work impact concentration and safety.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'Constant GMP and ISO compliance pressure',
    description: 'Regulatory requirements demand comprehensive documentation and evidence.',
    color: 'from-yellow-500 to-yellow-600'
  }
]

const solutions = [
  {
    icon: Target,
    title: 'Pinpoint strain before it causes harm',
    description: 'AI-based posture and movement analysis identifies early-stage risks.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Support focus and consistency',
    description: 'Ergonomics improvements reduce discomfort and distraction.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: CheckCircle,
    title: 'Stay audit-ready',
    description: 'Instant compliance reporting aligned with GMP and ISO standards.',
    color: 'from-purple-500 to-purple-600'
  }
]

const results = [
  {
    metric: '30%',
    label: 'drop in reported discomfort within 8 weeks',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600'
  },
  {
    metric: 'Significant',
    label: 'reduction in near-miss incidents',
    icon: Shield,
    color: 'from-blue-500 to-blue-600'
  },
  {
    metric: 'Faster',
    label: 'audit preparation and zero non-conformance findings',
    icon: Clock,
    color: 'from-purple-500 to-purple-600'
  }
]

const modules = [
  {
    title: 'Manual task AI assessments',
    description: 'AI-powered video analysis identifies ergonomic risks in lab and production tasks.',
    icon: Shield
  },
  {
    title: 'DSE compliance',
    description: 'Protect workers using computers and monitors in research and production.',
    icon: Zap
  },
  {
    title: 'Discomfort and injury tracking',
    description: 'Early warning system for musculoskeletal issues before they become injuries.',
    icon: AlertTriangle
  },
  {
    title: 'Mental health support',
    description: 'Resources to maintain focus and resilience in high-pressure environments.',
    icon: Award
  }
]

const caseStudies = [
  {
    company: 'Global MedTech Leader',
    challenge: 'High injury rates in clean room operations affecting 2,500 workers',
    solution: 'Implemented AI-powered ergonomic assessments across 8 facilities',
    results: [
      '35% reduction in musculoskeletal injuries',
      '40% improvement in ergonomic compliance scores',
      'ROI of 280% within 12 months'
    ]
  },
  {
    company: 'Pharmaceutical Research Lab',
    challenge: 'Fatigue-related errors in precision tasks affecting research quality',
    solution: 'Deployed comprehensive ergonomic and wellbeing monitoring system',
    results: [
      '50% reduction in fatigue-related incidents',
      '25% improvement in task accuracy',
      'Zero lost-time injuries in 18 months'
    ]
  }
]

export default function PharmaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 font-semibold">Pharma & MedTech</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Precision work demands precision care.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                In labs, clean rooms, and production suites, small strains can have big impacts — 
                on people, productivity, and compliance. Habitus delivers the precision safety 
                solutions your high-stakes environment demands.
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
                  <span className="text-2xl font-bold text-red-600">$65,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Compliance time</span>
                  <span className="text-2xl font-bold text-blue-600">10-15 hrs/week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Regulatory audits</span>
                  <span className="text-2xl font-bold text-green-600">4-6 per year</span>
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
              Pharma and MedTech environments present unique safety challenges that require 
              intelligent, compliant solutions to protect workers and maintain standards.
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
              We combine cutting-edge AI technology with deep regulatory knowledge to create 
              safety solutions that meet the highest standards of precision and compliance.
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
              Our pharma and MedTech clients consistently achieve measurable improvements in safety, 
              compliance, and operational efficiency.
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
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center border border-green-100 animate-fade-in">
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
              challenges of pharma and MedTech environments.
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
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-600" />
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
              Real results from real pharma and MedTech companies. See how Habitus has 
              transformed workplace safety across different industry segments.
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
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Support your people and safeguard your standards.
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join leading pharma and MedTech companies who are already protecting their workforce 
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

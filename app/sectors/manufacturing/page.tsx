'use client'

import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { 
  Factory, 
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
    title: 'Injury hotspots on production lines',
    description: 'Repetitive movements and awkward postures create consistent risk areas that traditional assessments often miss.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Clock,
    title: 'Fatigue and strain affecting shift performance',
    description: 'Long shifts and physically demanding work lead to decreased alertness and increased accident risk.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Time-consuming safety reporting and audits',
    description: 'Manual processes and scattered data make compliance reporting a burden that takes time away from prevention.',
    color: 'from-yellow-500 to-yellow-600'
  }
]

const solutions = [
  {
    icon: Target,
    title: 'Identify risks early',
    description: 'AI video analysis flags risky postures, loads, and movements in line with REBA and RULA standards.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Act with precision',
    description: 'Ergonomists validate AI recommendations and provide site-specific fixes for maximum impact.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Prove your results',
    description: 'Dashboards show risk score trends, productivity impacts, and compliance status in real time.',
    color: 'from-purple-500 to-purple-600'
  }
]

const results = [
  {
    metric: '40%',
    label: 'reduction in injury risk at pilot sites',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600'
  },
  {
    metric: '70%',
    label: 'injury reporting time cut',
    icon: Clock,
    color: 'from-blue-500 to-blue-600'
  },
  {
    metric: 'Measurable',
    label: 'improvement in worker resilience scores',
    icon: Users,
    color: 'from-purple-500 to-purple-600'
  }
]

const modules = [
  {
    title: 'Manual task AI assessments',
    description: 'AI-powered video analysis identifies ergonomic risks in real-world production tasks.',
    icon: Shield
  },
  {
    title: 'Anti-fatigue devices',
    description: 'Smart monitoring and interventions to maintain alertness during long shifts.',
    icon: Zap
  },
  {
    title: 'Injury and discomfort tracking',
    description: 'Early warning system for musculoskeletal issues before they become injuries.',
    icon: AlertTriangle
  },
  {
    title: 'Dashboards and analytics',
    description: 'Real-time visibility into safety performance and compliance status.',
    icon: BarChart3
  }
]

const caseStudies = [
  {
    company: 'Global Automotive Manufacturer',
    challenge: 'High injury rates on assembly lines due to repetitive motion and poor ergonomics',
    solution: 'Implemented AI-powered video assessments across 12 production facilities',
    results: [
      '45% reduction in musculoskeletal injuries',
      '30% improvement in ergonomic compliance scores',
      'ROI of 340% within 18 months'
    ]
  },
  {
    company: 'Electronics Manufacturing Plant',
    challenge: 'Fatigue-related accidents during night shifts affecting 2,500 workers',
    solution: 'Deployed anti-fatigue monitoring and intervention system',
    results: [
      '60% reduction in fatigue-related incidents',
      '25% improvement in night shift productivity',
      'Zero lost-time injuries in 12 months'
    ]
  }
]

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-600 font-semibold">Manufacturing & Industrial</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Protect your production workforce. Keep output strong.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Manufacturing is high-risk for musculoskeletal injuries and fatigue-related slowdowns. 
                Repetitive movements, awkward postures, and manual handling all take their toll — and compliance demands never ease.
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
                  <span className="text-2xl font-bold text-red-600">$42,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Lost productivity</span>
                  <span className="text-2xl font-bold text-orange-600">15-20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Compliance time</span>
                  <span className="text-2xl font-bold text-blue-600">8-12 hrs/week</span>
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
              Manufacturing environments present unique safety challenges that require intelligent, 
              proactive solutions to protect workers and maintain productivity.
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
              We combine cutting-edge AI technology with human expertise to create 
              a comprehensive safety solution that works for your specific environment.
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
              Our manufacturing clients consistently achieve measurable improvements in safety, 
              productivity, and compliance.
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
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center border border-blue-100 animate-fade-in">
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
              challenges of manufacturing environments.
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
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
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
              Real results from real manufacturing companies. See how Habitus has 
              transformed workplace safety across different industries.
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Protect your production teams and performance.
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join leading manufacturers who are already protecting their workforce 
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

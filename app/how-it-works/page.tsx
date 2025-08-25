'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { 
  Play, 
  Shield, 
  Video, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  TrendingUp,
  AlertTriangle,
  Zap,
  Brain
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'AI-Powered Assessment',
    description: 'Our AI analyzes video footage of workers performing real tasks, identifying ergonomic risks and potential hazards.',
    icon: Video,
    color: 'from-blue-500 to-blue-600',
    details: [
      'Captures real-world work scenarios',
      'Analyzes posture, movement, and load',
      'Identifies risks using REBA/RULA standards',
      'Provides instant risk scoring'
    ]
  },
  {
    number: '02',
    title: 'Expert Validation',
    description: 'Certified ergonomists review AI findings and provide personalized recommendations for your specific environment.',
    icon: Shield,
    color: 'from-green-500 to-green-600',
    details: [
      'Human expertise validates AI insights',
      'Site-specific recommendations',
      'Cost-effective implementation plans',
      'Ongoing support and guidance'
    ]
  },
  {
    number: '03',
    title: 'Implementation & Monitoring',
    description: 'Track progress with real-time dashboards and continuous monitoring to ensure sustained improvements.',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
    details: [
      'Real-time performance tracking',
      'Compliance monitoring',
      'ROI measurement',
      'Continuous improvement insights'
    ]
  }
]

const features = [
  {
    icon: Video,
    title: 'Video Analysis',
    description: 'AI-powered assessment of real work tasks',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Risk Prevention',
    description: 'Identify and address hazards before they cause harm',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Worker Engagement',
    description: 'Involve your team in safety improvements',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: BarChart3,
    title: 'Data Insights',
    description: 'Comprehensive reporting and analytics',
    color: 'from-orange-500 to-orange-600'
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Reduce Injury Risk',
    value: '40%',
    description: 'Average reduction in injury risk across pilot sites'
  },
  {
    icon: Clock,
    title: 'Save Time',
    value: '70%',
    description: 'Reduction in time spent on safety assessments'
  },
  {
    icon: Users,
    title: 'Improve Compliance',
    value: '100%',
    description: 'Audit-ready reporting and documentation'
  },
  {
    icon: Zap,
    title: 'Boost Productivity',
    value: '15%',
    description: 'Average improvement in worker productivity'
  }
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              How Habitus Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See how our intelligent platform transforms workplace safety from reactive to proactive. 
              From AI-powered assessments to expert guidance, discover the Habitus difference.
            </p>
            <div className="flex justify-center animate-slide-up">
              <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Platform Demo</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Watch a 3-minute demonstration of how Habitus identifies risks, 
                  provides recommendations, and tracks improvements in real-time.
                </p>
                <button className="btn-primary w-full">
                  Watch Demo Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Habitus Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our three-step approach combines cutting-edge technology with human expertise 
              to deliver measurable safety improvements.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold`}>
                        {step.number}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <span className="text-gray-500">Interactive Demo</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful tools and capabilities that make Habitus the 
              leading choice for workplace safety management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Results */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations using Habitus consistently achieve measurable improvements 
              in safety, compliance, and productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.value}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Try It Yourself</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Experience the power of Habitus with our interactive demo. 
              See how AI identifies risks and provides actionable recommendations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2">Risk Assessment</h3>
                <p className="text-primary-100 text-sm">Upload a video and see AI analysis in action</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
                <p className="text-primary-100 text-sm">Get personalized improvement suggestions</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2">Reporting</h3>
                <p className="text-primary-100 text-sm">View compliance and performance dashboards</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Start Free Trial
              </Link>
              <Link href="/demo" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20">
                Interactive Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Workplace Safety?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join leading organizations that are already protecting their workforce 
              and proving their impact with Habitus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book a Demo
              </Link>
              <Link href="/sectors" className="btn-outline text-lg px-8 py-4">
                Explore Sectors
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

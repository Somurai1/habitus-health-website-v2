import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Shield, Users, Target, Award, Globe, Heart, TrendingUp, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Habitus Health
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to protect workforces and prove the impact of 
              workplace safety through intelligent, worker-centric technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Mission
              </h2>
              <div className="text-center mb-12">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Every year, millions of workers suffer preventable injuries that impact their health, 
                  their families, and their employers. We believe this is unacceptable. Habitus exists 
                  to change the game by putting workers at the center of safety technology.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Worker-Centric
                  </h3>
                  <p className="text-gray-600">
                    We design our solutions around the people who use them, 
                    ensuring safety technology actually improves their work experience.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Prevention-First
                  </h3>
                  <p className="text-gray-600">
                    Our AI identifies risks before they become injuries, 
                    helping organizations protect their people proactively.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Impact-Driven
                  </h3>
                  <p className="text-gray-600">
                    We measure and prove the value of safety investments, 
                    helping leaders make data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-6">
                  Habitus Health was founded by a team of occupational health professionals, 
                  ergonomists, and technology experts who were frustrated by the gap between 
                  what safety technology promised and what it actually delivered.
                </p>
                <p className="mb-6">
                  We saw that existing solutions were either too complex for frontline workers 
                  to use effectively, or too basic to provide real insights. Meanwhile, 
                  preventable injuries continued to cost organizations billions and impact 
                  millions of lives.
                </p>
                <p className="mb-6">
                  So we built something different. A platform that combines the precision of 
                  AI with the expertise of human ergonomists. Technology that works for workers, 
                  not against them. And insights that prove the value of safety investments.
                </p>
                <p>
                  Today, Habitus is protecting workforces across industries, from factory floors 
                  to council offices, helping organizations build resilience while meeting every 
                  compliance requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Shield className="w-6 h-6 text-primary-600 inline mr-2" />
                    Safety First, Always
                  </h3>
                  <p className="text-gray-600">
                    Every decision we make, every feature we build, every customer we serve 
                    is guided by our commitment to protecting workers and preventing harm.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Users className="w-6 h-6 text-secondary-600 inline mr-2" />
                    People Over Technology
                  </h3>
                  <p className="text-gray-600">
                    We believe technology should serve people, not the other way around. 
                    Our solutions are designed to enhance human capability, not replace it.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Target className="w-6 h-6 text-accent-600 inline mr-2" />
                    Evidence-Based
                  </h3>
                  <p className="text-gray-600">
                    We base our approach on proven science and real-world data. 
                    Every claim we make, every result we promise, is backed by evidence.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Globe className="w-6 h-6 text-primary-600 inline mr-2" />
                    Global Impact
                  </h3>
                  <p className="text-gray-600">
                    We're building solutions that can scale to protect workforces 
                    around the world, regardless of industry, location, or size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Team
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Occupational Health Experts
                  </h3>
                  <p className="text-gray-600">
                    Certified ergonomists and safety professionals with decades 
                    of experience across industries.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                  <div className="w-20 h-20 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI & Technology Specialists
                  </h3>
                  <p className="text-gray-600">
                    Engineers and data scientists building intelligent solutions 
                    that make safety technology accessible and effective.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Customer Success Team
                  </h3>
                  <p className="text-gray-600">
                    Dedicated professionals ensuring every customer gets the 
                    support they need to protect their workforce effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Recognition & Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ISO 27001 Certified
                  </h3>
                  <p className="text-gray-600">
                    Our information security management system meets international 
                    standards for protecting customer data and privacy.
                  </p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    GDPR & EU AI Act Compliant
                  </h3>
                  <p className="text-gray-600">
                    We meet the highest standards for data protection and 
                    responsible AI development in the European Union.
                  </p>
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
              Join Us in Protecting Workforces
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking to protect your workforce, prove your impact, 
              or learn more about our approach, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2">
                <span>Book a Demo</span>
                <CheckCircle className="w-5 h-5" />
              </Link>
              <Link href="/how-it-works" className="btn-outline text-lg px-8 py-4 inline-flex items-center space-x-2">
                <span>See How It Works</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

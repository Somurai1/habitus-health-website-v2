'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Calculator, TrendingUp, DollarSign, Clock, Users, Shield } from 'lucide-react'

export default function ROICalculatorPage() {
  const [formData, setFormData] = useState({
    companySize: '',
    annualInjuries: '',
    averageInjuryCost: '',
    weeklyComplianceHours: ''
  })

  const [results, setResults] = useState<{
    annualSavings: number
    habitusCost: number
    netSavings: number
    roi: number
  } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateROI = () => {
    const {
      companySize,
      annualInjuries,
      averageInjuryCost,
      weeklyComplianceHours
    } = formData

    if (!companySize || !annualInjuries || !averageInjuryCost || !weeklyComplianceHours) {
      alert('Please fill in all fields')
      return
    }

    const size = parseInt(companySize)
    const injuries = parseInt(annualInjuries)
    const injuryCost = parseInt(averageInjuryCost)
    const complianceHours = parseInt(weeklyComplianceHours)

    // Calculate annual savings
    const injurySavings = injuries * injuryCost * 0.4 // 40% reduction
    const timeSavings = complianceHours * 52 * 25 * 0.7 // 70% time reduction, $25/hour
    const annualSavings = injurySavings + timeSavings

    // Calculate Habitus cost (based on company size)
    let habitusCost = 0
    if (size <= 100) habitusCost = 15000
    else if (size <= 500) habitusCost = 25000
    else if (size <= 1000) habitusCost = 40000
    else habitusCost = 60000

    const netSavings = annualSavings - habitusCost
    const roi = (netSavings / habitusCost) * 100

    setResults({
      annualSavings,
      habitusCost,
      netSavings,
      roi
    })
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ROI Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the real financial impact of workplace injuries and how Habitus can help you 
              save money while protecting your workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Calculate Your Savings</h2>
                <p className="text-gray-600 mb-8">
                  Fill in your current workplace safety metrics to see potential savings 
                  and ROI with Habitus.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Company Size (Employees) *
                    </label>
                    <input
                      type="number"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., 250"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <TrendingUp className="w-4 h-4 inline mr-2" />
                      Annual Workplace Injuries *
                    </label>
                    <input
                      type="number"
                      name="annualInjuries"
                      value={formData.annualInjuries}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., 12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="w-4 h-4 inline mr-2" />
                      Average Injury Cost ($) *
                    </label>
                    <input
                      type="number"
                      name="averageInjuryCost"
                      value={formData.averageInjuryCost}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., 42000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Weekly Compliance Hours *
                    </label>
                    <input
                      type="number"
                      name="weeklyComplianceHours"
                      value={formData.weeklyComplianceHours}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., 8"
                    />
                  </div>

                  <button
                    onClick={calculateROI}
                    className="w-full btn-primary text-lg py-4"
                  >
                    Calculate ROI
                  </button>
                </div>
              </div>

              {/* Results Display */}
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h3>
                
                {results ? (
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        ${results.annualSavings.toLocaleString()}
                      </div>
                      <div className="text-green-700 font-medium">Potential Annual Savings</div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        ${results.habitusCost.toLocaleString()}
                      </div>
                      <div className="text-blue-700 font-medium">Annual Habitus Cost</div>
                    </div>

                    <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        ${results.netSavings.toLocaleString()}
                      </div>
                      <div className="text-primary-700 font-medium">Net Annual Savings</div>
                    </div>

                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold mb-2">
                        {results.roi.toFixed(0)}%
                      </div>
                      <div className="text-primary-100 font-medium">Return on Investment</div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                    <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Fill in your metrics and click "Calculate ROI" to see your potential savings.
                    </p>
                  </div>
                )}

                {/* Key Benefits */}
                <div className="mt-8 bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Benefits</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 40% reduction in workplace injuries</li>
                    <li>• 70% reduction in compliance time</li>
                    <li>• Improved worker productivity</li>
                    <li>• Enhanced compliance reporting</li>
                    <li>• Reduced insurance costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              The numbers don't lie. See how Habitus can transform your workplace safety 
              and deliver measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Book a Demo
              </Link>
              <Link href="/how-it-works" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

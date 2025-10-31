'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  Users, 
  MessageSquare, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'

// Base schema for all forms
const baseSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Demo-specific schema
const demoSchema = baseSchema.extend({
  companySize: z.string().min(1, 'Please select company size'),
  sector: z.string().min(1, 'Please select sector'),
  preferredTime: z.string().min(1, 'Please select preferred time'),
  urgency: z.string().min(1, 'Please select urgency level')
})

type BaseFormData = z.infer<typeof baseSchema>
type DemoFormData = z.infer<typeof demoSchema>

const companySizes = [
  '1-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
]

const sectors = [
  'Manufacturing & Industrial',
  'Pharma & MedTech',
  'Government & Public Sector',
  'Construction & Infrastructure',
  'Hybrid & Office-based',
  'Other'
]

const timeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '1:00 PM - 3:00 PM',
  '3:00 PM - 5:00 PM'
]

const urgencyLevels = [
  'Immediate - Need to start within 2 weeks',
  'High - Need to start within 1 month',
  'Medium - Planning for next quarter',
  'Low - Researching options'
]

export default function SmartContactForm() {
  const [formType, setFormType] = useState<'demo' | 'contact'>('demo')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<DemoFormData>({
    resolver: zodResolver(formType === 'demo' ? demoSchema : baseSchema) as any
  })

  const onSubmit = async (data: BaseFormData | DemoFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form data:', data)
    setIsSubmitted(true)
  }

  const handleFormTypeChange = (type: 'demo' | 'contact') => {
    setFormType(type)
    reset()
  }

  if (isSubmitted) {
    return (
      <div className="glass-card p-8 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {formType === 'demo' ? 'Demo Request Received!' : 'Message Sent!'}
        </h3>
        <p className="text-gray-600 mb-6">
          {formType === 'demo' 
            ? "We've received your demo request. Our team will contact you within 24 hours to schedule your personalized demonstration."
            : "Thank you for your message. We'll get back to you within 24 hours."
          }
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            reset()
          }}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="glass-card p-8 animate-fade-in">
      {/* Form Type Selector */}
      <div className="mb-8">
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          <button
            type="button"
            onClick={() => handleFormTypeChange('demo')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              formType === 'demo'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Book a Demo
          </button>
          <button
            type="button"
            onClick={() => handleFormTypeChange('contact')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              formType === 'contact'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <MessageSquare className="w-4 h-4 inline mr-2" />
            General Contact
          </button>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {formType === 'demo' ? 'Book Your Demo' : 'Get in Touch'}
          </h2>
          <p className="text-gray-600">
            {formType === 'demo' 
              ? "See how Habitus can transform your workplace safety. Fill out the form below and we'll schedule a personalized demonstration."
              : "Have questions or need support? Send us a message and we'll get back to you quickly."
            }
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              First Name *
            </label>
            <input
              {...register('firstName')}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Last Name *
            </label>
            <input
              {...register('lastName')}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number *
            </label>
            <input
              {...register('phone')}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Company Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building className="w-4 h-4 inline mr-2" />
            Company Name *
          </label>
          <input
            {...register('company')}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
              errors.company ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="Enter your company name"
          />
          {errors.company && (
            <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
          )}
        </div>

        {/* Demo-specific fields */}
        {formType === 'demo' && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Company Size *
                </label>
                <select
                  {...register('companySize')}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.companySize ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <option value="">Select company size</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                {errors.companySize && (
                  <p className="text-red-600 text-sm mt-1">{errors.companySize.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Sector *
                </label>
                <select
                  {...register('sector')}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.sector ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <option value="">Select your sector</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
                {errors.sector && (
                  <p className="text-red-600 text-sm mt-1">{errors.sector.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Preferred Time *
                </label>
                <select
                  {...register('preferredTime')}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.preferredTime ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <option value="">Select preferred time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                {errors.preferredTime && (
                  <p className="text-red-600 text-sm mt-1">{errors.preferredTime.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Urgency Level *
                </label>
                <select
                  {...register('urgency')}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.urgency ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <option value="">Select urgency level</option>
                  {urgencyLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                {errors.urgency && (
                  <p className="text-red-600 text-sm mt-1">{errors.urgency.message}</p>
                )}
              </div>
            </div>
          </>
        )}

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            {formType === 'demo' ? 'Tell us about your safety challenges' : 'Message'} *
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder={
              formType === 'demo' 
                ? "Tell us about your safety challenges and what you'd like to see in the demo..."
                : "How can we help you?"
            }
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                {formType === 'demo' ? 'Book Your Demo' : 'Send Message'}
                <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and consent to being contacted 
          about Habitus Health solutions.
        </p>
      </form>
    </div>
  )
}



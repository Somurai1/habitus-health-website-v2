'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { User, Mail, Phone, Building, Users, MessageSquare, Clock, AlertTriangle } from 'lucide-react'

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  companySize: z.string().min(1, 'Please select company size'),
  sector: z.string().min(1, 'Please select sector'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredTime: z.string().min(1, 'Please select preferred time'),
  urgency: z.string().min(1, 'Please select urgency level')
})

type ContactFormData = z.infer<typeof contactSchema>

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

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form data:', data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
        <p className="text-gray-600 mb-6">
          We've received your demo request. Our team will contact you within 24 hours 
          to schedule your personalized demonstration.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Demo</h2>
        <p className="text-gray-600">
          See how Habitus can transform your workplace safety. Fill out the form below 
          and we'll schedule a personalized demonstration.
        </p>
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                errors.firstName ? 'border-red-300' : 'border-gray-300'
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                errors.lastName ? 'border-red-300' : 'border-gray-300'
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                errors.email ? 'border-red-300' : 'border-gray-300'
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                errors.phone ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Company Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Company Name *
            </label>
            <input
              {...register('company')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                errors.company ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your company name"
            />
            {errors.company && (
              <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Company Size *
            </label>
            <select
              {...register('companySize')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                errors.companySize ? 'border-red-300' : 'border-gray-300'
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
        </div>

        {/* Sector and Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building className="w-4 h-4 inline mr-2" />
            Sector *
          </label>
          <select
            {...register('sector')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
              errors.sector ? 'border-red-300' : 'border-gray-300'
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Message *
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
              errors.message ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Tell us about your safety challenges and what you'd like to see in the demo..."
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Scheduling Preferences */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Preferred Time *
            </label>
            <select
              {...register('preferredTime')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                errors.preferredTime ? 'border-red-300' : 'border-gray-300'
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
              <AlertTriangle className="w-4 h-4 inline mr-2" />
              Urgency Level *
            </label>
            <select
              {...register('urgency')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                errors.urgency ? 'border-red-300' : 'border-gray-300'
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

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Book Your Demo'}
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

import Navigation from '../../components/Navigation'
import ContactForm from '../../components/ContactForm'
import Footer from '../../components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your workplace safety? Let's discuss how Habitus can help 
              you protect your workforce and prove your impact.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Habitus?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Proven Results</h3>
                    <p className="text-gray-600 text-sm">40% reduction in injury risk, 70% time savings on compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry Expertise</h3>
                    <p className="text-gray-600 text-sm">Specialized solutions for manufacturing, pharma, government, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Compliance Ready</h3>
                    <p className="text-gray-600 text-sm">ISO 27001, GDPR, and EU AI Act compliant</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Happens Next?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Initial Consultation</h3>
                    <p className="text-gray-600 text-sm">We'll discuss your specific safety challenges and goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Demo</h3>
                    <p className="text-gray-600 text-sm">See Habitus in action with your industry-specific use cases</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Implementation Plan</h3>
                    <p className="text-gray-600 text-sm">Get a roadmap for transforming your workplace safety</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

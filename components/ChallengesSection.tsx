import { AlertTriangle, Clock, TrendingUp, Info } from 'lucide-react'

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Too many systems, too little time',
    description: 'Data is scattered, reporting takes days, and it\'s hard to see the true state of your workforce.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Clock,
    title: 'Constant compliance pressure',
    description: 'Every audit, every regulation, every standard — all need evidence you can stand over, while still looking after your people.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: TrendingUp,
    title: 'Rising injury and fatigue risks',
    description: 'Hybrid work, manual handling, and an ageing workforce all demand faster prevention — to protect both workers and productivity.',
    color: 'from-yellow-500 to-yellow-600'
  }
]

export default function ChallengesSection() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The challenges H&S leaders face
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern workplaces present complex safety challenges that traditional approaches 
            struggle to address effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        {/* Additional Context */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 animate-fade-in">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <Info className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Additional Context</h3>
              <p className="text-gray-600 leading-relaxed">
                These challenges are interconnected. Poor data visibility leads to reactive rather than proactive safety management. 
                Compliance pressure often results in box-ticking rather than genuine risk reduction. And rising risks demand 
                faster, more intelligent solutions than traditional manual processes can provide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

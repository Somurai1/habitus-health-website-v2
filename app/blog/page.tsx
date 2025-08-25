import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react'

// Sample blog posts - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: 'ergonomics-hybrid-work',
    title: 'The Hidden Dangers of Hybrid Work: Why DSE Compliance Matters More Than Ever',
    excerpt: 'As hybrid work becomes the new normal, organizations are discovering that DSE compliance isn\'t just about office setups—it\'s about protecting workers wherever they are.',
    category: 'DSE Compliance',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    featured: true
  },
  {
    slug: 'ai-safety-assessment',
    title: 'How AI is Revolutionizing Workplace Safety Assessments',
    excerpt: 'Discover how artificial intelligence is transforming traditional safety evaluations, making them faster, more accurate, and more comprehensive than ever before.',
    category: 'AI & Technology',
    author: 'Mark Thompson',
    date: '2024-01-10',
    readTime: '4 min read',
    featured: false
  },
  {
    slug: 'mental-health-workplace',
    title: 'Building Mental Resilience: The Next Frontier in Workplace Safety',
    excerpt: 'Mental health is becoming a critical component of workplace safety programs. Learn how organizations are integrating psychological wellbeing into their safety strategies.',
    category: 'Mental Health',
    author: 'Dr. Emily Rodriguez',
    date: '2024-01-08',
    readTime: '6 min read',
    featured: false
  },
  {
    slug: 'compliance-2024',
    title: '2024 Compliance Checklist: What Every Safety Manager Needs to Know',
    excerpt: 'Stay ahead of the curve with our comprehensive guide to the latest workplace safety regulations and compliance requirements for 2024.',
    category: 'Compliance',
    author: 'James Wilson',
    date: '2024-01-05',
    readTime: '7 min read',
    featured: false
  },
  {
    slug: 'ergonomics-manufacturing',
    title: 'Ergonomics in Manufacturing: Preventing MSDs Before They Start',
    excerpt: 'Manufacturing environments present unique ergonomic challenges. Learn how proactive design and AI-powered assessments can prevent musculoskeletal disorders.',
    category: 'Manufacturing',
    author: 'Lisa Chen',
    date: '2024-01-03',
    readTime: '5 min read',
    featured: false
  },
  {
    slug: 'safety-culture-transformation',
    title: 'Transforming Safety Culture: From Compliance to Commitment',
    excerpt: 'True workplace safety goes beyond meeting regulations. Discover how leading organizations are building cultures where safety is everyone\'s responsibility.',
    category: 'Safety Culture',
    author: 'Robert Martinez',
    date: '2024-01-01',
    readTime: '6 min read',
    featured: false
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Workplace Safety Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest trends, research, and best practices in workplace safety, 
              ergonomics, and compliance from industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100 animate-fade-in">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">
              Explore our collection of workplace safety insights and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-2 group"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest workplace safety insights and industry updates delivered to your inbox.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="w-full btn-primary">
                  Subscribe to Newsletter
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

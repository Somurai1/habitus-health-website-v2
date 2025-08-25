import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowLeft, Share2, Tag, TrendingUp } from 'lucide-react'

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  'ergonomics-hybrid-work': {
    title: 'The Hidden Dangers of Hybrid Work: Why DSE Compliance Matters More Than Ever',
    excerpt: 'As hybrid work becomes the new normal, organizations are discovering that DSE compliance isn\'t just about office setups—it\'s about protecting workers wherever they are.',
    content: `
      <p>The shift to hybrid work has fundamentally changed how we think about workplace safety. No longer confined to traditional office environments, workers are now operating from kitchen tables, spare bedrooms, and makeshift home offices. This new reality has exposed significant gaps in how organizations approach Display Screen Equipment (DSE) compliance and ergonomic safety.</p>

      <h2>The Hybrid Work Challenge</h2>
      <p>When the pandemic forced millions of workers to work from home, most organizations focused on the immediate challenges: technology access, communication tools, and basic productivity. What many missed was the critical importance of proper ergonomic setup in these new work environments.</p>

      <p>Traditional DSE assessments were designed for controlled office environments with standardized furniture and equipment. But hybrid work has created a scenario where workers might use:</p>
      <ul>
        <li>Kitchen chairs that don't provide proper lumbar support</li>
        <li>Dining tables that are too high or too low for comfortable typing</li>
        <li>Laptop screens positioned at eye level without external monitors</li>
        <li>Inadequate lighting that causes eye strain and fatigue</li>
      </ul>

      <h2>Why This Matters for Health and Safety</h2>
      <p>The consequences of poor ergonomic setup in hybrid environments are more serious than many realize. Research shows that workers using improper setups at home are at increased risk of:</p>
      <ul>
        <li>Musculoskeletal disorders (MSDs) including back pain, neck strain, and carpal tunnel syndrome</li>
        <li>Eye strain and vision problems from poor screen positioning</li>
        <li>Increased fatigue and decreased productivity</li>
        <li>Long-term health issues that can affect both work and personal life</li>
      </ul>

      <h2>The Compliance Imperative</h2>
      <p>From a legal and compliance perspective, the situation is equally concerning. Health and safety regulations don't stop at the office door. Employers have a duty of care that extends to wherever their employees are working, including home environments.</p>

      <p>This means organizations must:</p>
      <ul>
        <li>Conduct DSE assessments for home workstations</li>
        <li>Provide appropriate equipment and furniture where necessary</li>
        <li>Train workers on proper ergonomic practices</li>
        <li>Monitor and address any health concerns that arise</li>
      </ul>

      <h2>How Habitus Solves the Hybrid DSE Challenge</h2>
      <p>Traditional DSE assessments required physical site visits, which became impossible during lockdowns and remain impractical for distributed workforces. Habitus has developed an innovative solution that combines AI-powered video analysis with expert ergonomic review.</p>

      <p>Our approach includes:</p>
      <ul>
        <li><strong>Remote Assessment Capability:</strong> Workers can submit video assessments of their home workstations</li>
        <li><strong>AI-Powered Analysis:</strong> Our technology identifies ergonomic risks and compliance issues</li>
        <li><strong>Expert Validation:</strong> Certified ergonomists review findings and provide personalized recommendations</li>
        <li><strong>Ongoing Monitoring:</strong> Continuous assessment to ensure improvements are maintained</li>
      </ul>

      <h2>Real Results from Hybrid Work Implementation</h2>
      <p>Organizations using Habitus for hybrid DSE compliance have seen remarkable improvements:</p>
      <ul>
        <li>47% reduction in musculoskeletal complaints among hybrid workers</li>
        <li>100% compliance rates in audited departments</li>
        <li>Measurable improvements in worker satisfaction and productivity</li>
        <li>Significant reduction in workers' compensation claims</li>
      </ul>

      <h2>Looking Ahead: The Future of Hybrid Safety</h2>
      <p>As hybrid work becomes a permanent feature of the modern workplace, organizations need to rethink their approach to health and safety. The traditional model of annual office-based assessments is no longer sufficient.</p>

      <p>Instead, we need:</p>
      <ul>
        <li>Continuous monitoring and assessment capabilities</li>
        <li>Technology that can work across multiple environments</li>
        <li>Flexible compliance solutions that adapt to changing work patterns</li>
        <li>Data-driven insights that help prevent issues before they become problems</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Hybrid work is here to stay, and with it comes new challenges for workplace safety and compliance. Organizations that fail to adapt their DSE and ergonomic safety programs risk not only the health of their workers but also significant compliance and legal exposure.</p>

      <p>The good news is that solutions like Habitus are making it easier than ever to maintain high safety standards across distributed workforces. By combining cutting-edge technology with human expertise, we can ensure that workers are protected regardless of where they're working.</p>

      <p>As we move forward into this new era of work, the organizations that prioritize comprehensive safety solutions will be the ones that thrive. The question isn't whether to adapt—it's how quickly you can implement the right solutions.</p>
    `,
    author: 'Dr. Sarah Chen',
    authorTitle: 'Senior Ergonomist & Safety Consultant',
    authorBio: 'Dr. Chen has over 15 years of experience in workplace ergonomics and safety. She specializes in hybrid work environments and has helped hundreds of organizations implement effective DSE compliance programs.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'DSE Compliance',
    tags: ['Hybrid Work', 'DSE Compliance', 'Ergonomics', 'Remote Work', 'Workplace Safety'],
    featured: true
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <Link 
                href="/blog"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{post.author}</div>
                    <div className="text-sm text-gray-600">{post.authorTitle}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <button className="flex items-center space-x-2 hover:text-primary-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none animate-fade-in"
                  style={{ animationDelay: '200ms' }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Author Bio */}
                <div
                  className="bg-gray-50 rounded-2xl p-8 mt-12 animate-fade-in"
                  style={{ animationDelay: '400ms' }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">{post.author}</div>
                      <div className="text-gray-600 mb-3">{post.authorBio}</div>
                      <div className="text-sm text-gray-500">{post.authorTitle}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div
                  className="space-y-6 animate-fade-in"
                  style={{ animationDelay: '300ms' }}
                >
                  {/* Tags */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      <Link href="/blog/ai-safety-assessment" className="block text-primary-600 hover:text-primary-700 font-medium">
                        How AI is Revolutionizing Workplace Safety Assessments
                      </Link>
                      <Link href="/blog/mental-health-workplace" className="block text-primary-600 hover:text-primary-700 font-medium">
                        Building Mental Resilience: The Next Frontier in Workplace Safety
                      </Link>
                      <Link href="/blog/compliance-2024" className="block text-primary-600 hover:text-primary-700 font-medium">
                        2024 Compliance Checklist: What Every Safety Manager Needs to Know
                      </Link>
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Stay Updated</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get the latest workplace safety insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <button className="w-full btn-primary text-sm py-2">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Workplace Safety?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how Habitus can help you implement effective DSE compliance and 
              protect your hybrid workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book a Demo
              </Link>
              <Link href="/how-it-works" className="btn-outline">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

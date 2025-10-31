'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  Shield,
  ChevronDown,
  Home,
  Users,
  BookOpen,
  MessageSquare,
  FileText,
  Building2,
  Factory,
  Pill,
  HardHat,
  Monitor,
  HelpCircle,
  Calendar,
  ArrowRight
} from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { 
    name: 'Solutions', 
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'How It Works', href: '/how-it-works', icon: HelpCircle }
    ]
  },
  { 
    name: 'Sectors', 
    href: '/sectors',
    icon: Users,
    children: [
      { name: 'Manufacturing', href: '/sectors/manufacturing', icon: Factory },
      { name: 'Pharma & MedTech', href: '/sectors/pharma', icon: Pill },
      { name: 'Government', href: '/sectors/government', icon: Building2 },
      { name: 'Construction', href: '/sectors/construction', icon: HardHat },
      { name: 'Hybrid & Office', href: '/sectors/hybrid', icon: Monitor }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: BookOpen,
    children: [
      { name: 'Blog', href: '/blog', icon: FileText },
      { name: 'Case Studies', href: '/case-studies', icon: Users },
      { name: 'Help Centre', href: '/help-centre', icon: HelpCircle }
    ]
  },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageSquare }
]

export default function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <nav className={`nav-modern transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="nav-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Habitus Health</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div 
                      className="relative group"
                      onMouseEnter={() => setHoveredDropdown(item.name)}
                      onMouseLeave={() => setHoveredDropdown(null)}
                    >
                      <button className="nav-item-modern flex items-center space-x-1 group-hover:bg-slate-100/50 transition-all duration-200">
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${hoveredDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <div className={`absolute top-full left-0 mt-2 w-72 glass-card p-3 z-50 transition-all duration-300 ${
                        hoveredDropdown === item.name 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-100/50 transition-all duration-200 group/link"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover/link:scale-110 transition-transform duration-200">
                                <child.icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-slate-700 font-medium">{child.name}</div>
                                <div className="text-xs text-slate-500">Learn more</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`nav-item-modern flex items-center space-x-1 transition-all duration-200 ${
                        isActive(item.href) ? 'nav-item-active' : 'hover:bg-slate-100/50'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact" className="btn-modern-primary">
                Book a Demo
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100/50 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-xl animate-slide-up">
            <div className="nav-container py-6">
              <div className="space-y-3">
                {navigation.map((item, index) => (
                  <div key={item.name} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )}
                          className="w-full flex items-center justify-between px-4 py-4 text-slate-700 font-medium rounded-xl hover:bg-slate-100/50 transition-all duration-200 group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                              <item.icon className="w-4 h-4 text-white" />
                            </div>
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-3 space-y-2 animate-slide-up">
                            {item.children.map((child, childIndex) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="flex items-center space-x-3 px-4 py-3 text-slate-600 rounded-lg hover:bg-slate-100/50 transition-all duration-200 group/link"
                                onClick={() => setIsOpen(false)}
                                style={{ animationDelay: `${childIndex * 50}ms` }}
                              >
                                <div className="w-6 h-6 bg-slate-100 rounded-md flex items-center justify-center group-hover/link:bg-blue-100 group-hover/link:scale-110 transition-all duration-200">
                                  <child.icon className="w-3 h-3 text-slate-600 group-hover/link:text-blue-600" />
                                </div>
                                <span>{child.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-200 group ${
                          isActive(item.href) 
                            ? 'text-blue-600 bg-blue-50/50' 
                            : 'text-slate-700 hover:bg-slate-100/50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${
                          isActive(item.href)
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                            : 'bg-gradient-to-r from-slate-400 to-slate-500'
                        }`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-6 border-t border-slate-200/50 animate-fade-in" style={{ animationDelay: `${navigation.length * 50}ms` }}>
                  <Link 
                    href="/contact" 
                    className="btn-modern-primary w-full justify-center group"
                    onClick={() => setIsOpen(false)}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

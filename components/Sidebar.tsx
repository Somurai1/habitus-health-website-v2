'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  ChevronDown, 
  Home, 
  BookOpen, 
  Users, 
  Shield, 
  Calculator, 
  FileText, 
  MessageSquare,
  Menu,
  X,
  Building2,
  Factory,
  Pill,
  HardHat,
  Monitor,
  Settings,
  HelpCircle
} from 'lucide-react'

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />
  },
  {
    title: 'Solutions',
    href: '/solutions',
    icon: <Shield className="w-4 h-4" />,
    children: [
      { title: 'How It Works', href: '/how-it-works', icon: <HelpCircle className="w-4 h-4" /> },
      { title: 'ROI Calculator', href: '/roi-calculator', icon: <Calculator className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Sectors',
    href: '/sectors',
    icon: <Users className="w-4 h-4" />,
    children: [
      { title: 'Manufacturing', href: '/sectors/manufacturing', icon: <Factory className="w-4 h-4" /> },
      { title: 'Pharma & MedTech', href: '/sectors/pharma', icon: <Pill className="w-4 h-4" /> },
      { title: 'Government', href: '/sectors/government', icon: <Building2 className="w-4 h-4" /> },
      { title: 'Construction', href: '/sectors/construction', icon: <HardHat className="w-4 h-4" /> },
      { title: 'Hybrid & Office', href: '/sectors/hybrid', icon: <Monitor className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-4 h-4" />,
    children: [
      { title: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
      { title: 'Case Studies', href: '/case-studies', icon: <Users className="w-4 h-4" /> }
    ]
  },
  {
    title: 'About',
    href: '/about',
    icon: <Users className="w-4 h-4" />
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <MessageSquare className="w-4 h-4" />
  }
]

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['solutions', 'sectors', 'resources'])
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const isActive = (href: string) => pathname === href

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedSections.includes(item.title.toLowerCase())
    const isCurrentActive = isActive(item.href)

    return (
      <div key={item.href} className={`${level > 0 ? 'ml-4' : ''}`}>
        <Link
          href={item.href}
          className={`nav-item ${isCurrentActive ? 'active' : ''}`}
        >
          {item.icon}
          <span className="ml-3">{item.title}</span>
          {hasChildren && (
            <ChevronDown 
              className={`w-4 h-4 ml-auto transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          )}
        </Link>
        
        {hasChildren && (
          <div className={`overflow-hidden transition-all duration-200 ${
            isExpanded ? 'max-h-96' : 'max-h-0'
          }`}>
            {item.children?.map(child => (
              <Link
                key={child.href}
                href={child.href}
                className={`nav-item ${isActive(child.href) ? 'active' : ''}`}
              >
                {child.icon}
                <span className="ml-3">{child.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Habitus Health</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {navigation.map(item => (
            <div key={item.href} className="nav-group">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.title.toLowerCase())}
                    className="nav-item w-full justify-between"
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedSections.includes(item.title.toLowerCase()) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${
                    expandedSections.includes(item.title.toLowerCase()) ? 'max-h-96' : 'max-h-0'
                  }`}>
                    {item.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`nav-item ${isActive(child.href) ? 'active' : ''}`}
                      >
                        {child.icon}
                        <span className="ml-3">{child.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                renderNavItem(item)
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-500 text-center">
            © 2024 Habitus Health
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}

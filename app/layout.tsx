import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '../components/Sidebar'

export const metadata: Metadata = {
  title: {
    default: 'AI-powered workplace health and safety platform for injury prevention, compliance, and wellbeing | Habitus Health',
    template: '%s | Habitus Health'
  },
  description: 'Protect your workforce with Habitus Health. AI-powered risk detection, ergonomic support, and wellbeing tools for modern organisations.',
  keywords: 'workplace ergonomics software, AI health and safety platform, injury risk assessment tool, manual handling risk reduction, workplace wellbeing solutions, digital DSE assessments, fatigue monitoring system, GDPR-compliant health platform',
  authors: [{ name: 'Habitus Health' }],
  metadataBase: new URL('https://habitus-health.vercel.app'),
  openGraph: {
    title: 'AI-powered workplace health and safety platform for injury prevention, compliance, and wellbeing | Habitus Health',
    description: 'Protect your workforce with Habitus Health. AI-powered risk detection, ergonomic support, and wellbeing tools for modern organisations.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'Habitus Health',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-powered workplace health and safety platform for injury prevention, compliance, and wellbeing | Habitus Health',
    description: 'Protect your workforce with Habitus Health. AI-powered risk detection, ergonomic support, and wellbeing tools for modern organisations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}

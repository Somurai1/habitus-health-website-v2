import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Habitus Health - Protect Your Workforce. Build Resilience. Prove Your Impact.',
  description: 'From preventing injuries to proving compliance, Habitus gives you the tools and insights to keep your people healthy, safe, and performing at their best.',
  keywords: 'workplace safety, health and safety, compliance, injury prevention, workforce protection, ergonomics, DSE compliance',
  authors: [{ name: 'Habitus Health' }],
  metadataBase: new URL('https://habitus-health.vercel.app'),
  openGraph: {
    title: 'Habitus Health - Protect Your Workforce. Build Resilience. Prove Your Impact.',
    description: 'From preventing injuries to proving compliance, Habitus gives you the tools and insights to keep your people healthy, safe, and performing at your best.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habitus Health - Protect Your Workforce. Build Resilience. Prove Your Impact.',
    description: 'From preventing injuries to proving compliance, Habitus gives you the tools and insights to keep your people healthy, safe, and performing at your best.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}

import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ProofSection from '../components/ProofSection'
import SectorsSection from '../components/SectorsSection'
import ChallengesSection from '../components/ChallengesSection'
import SolutionsSection from '../components/SolutionsSection'
import ModulesSection from '../components/ModulesSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-powered workplace health and safety platform for injury prevention, compliance, and wellbeing | Habitus Health',
  description: 'Protect your workforce with Habitus Health. AI-powered risk detection, ergonomic support, and wellbeing tools for modern organisations.',
  keywords: 'workplace ergonomics software, AI health and safety platform, injury risk assessment tool, manual handling risk reduction, workplace wellbeing solutions',
  openGraph: {
    title: 'AI-powered workplace health and safety platform for injury prevention, compliance, and wellbeing | Habitus Health',
    description: 'Protect your workforce with Habitus Health. AI-powered risk detection, ergonomic support, and wellbeing tools for modern organisations.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProofSection />
      <SectorsSection />
      <ChallengesSection />
      <SolutionsSection />
      <ModulesSection />
      <CaseStudiesSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}

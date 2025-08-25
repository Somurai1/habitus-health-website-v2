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

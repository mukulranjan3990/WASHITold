import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import AIFeatures from '@/components/AIFeatures';
import DashboardPreview from '@/components/DashboardPreview';
import TrustSafety from '@/components/TrustSafety';
import Subscriptions from '@/components/Subscriptions';
import AppShowcase from '@/components/AppShowcase';
import CTASection from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-navy text-white selection:bg-neon-cyan selection:text-deep-navy font-inter overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Services />
      <Pricing />
      <AIFeatures />
      <DashboardPreview />
      <TrustSafety />
      <AppShowcase />
      <Subscriptions />
      <CTASection />
      <Footer />
    </main>
  );
}

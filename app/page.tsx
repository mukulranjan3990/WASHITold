import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import AIFeatures from '@/components/AIFeatures';
import CTASection from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-navy text-white selection:bg-neon-cyan selection:text-deep-navy">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <AIFeatures />
      <CTASection />
      <Footer />
    </main>
  );
}

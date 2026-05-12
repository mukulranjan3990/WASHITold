"use client";
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  const problems = ["Delayed deliveries", "No tracking", "Lost clothes", "Price confusion", "Poor communication", "Manual management"];
  const solutions = ["On-time guarantee", "Uber-style Live Tracking", "Itemized barcode scanning", "Smart AI transparent pricing", "24/7 AI Chatbot Support", "Automated SaaS Dashboard"];

  return (
    <section className="py-24 bg-deep-navy/50 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="gradient-text">WASHIT</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">We're fixing the broken laundry industry with cutting-edge technology.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass p-8 md:p-10 rounded-3xl border border-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-red-400 flex items-center gap-3">
              <XCircle className="h-8 w-8" /> The Old Way
            </h3>
            <ul className="space-y-5">
              {problems.map((p, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300 text-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/50 shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 md:p-10 rounded-3xl border border-neon-cyan/30 relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-neon-cyan/10 blur-[60px]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-neon-cyan flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8" /> The WASHIT Way
            </h3>
            <ul className="space-y-5">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-medium text-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan shrink-0 shadow-[0_0_10px_#00F0FF]" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

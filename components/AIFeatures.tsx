"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Map, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AIFeatures() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-neon-cyan" />,
      title: "Fabric Recognition API",
      desc: "Our riders scan your garments at pickup. The AI instantly categorizes them into Daily Wear, Delicate, or Premium to assign the correct washing machine and chemicals."
    },
    {
      icon: <Target className="w-6 h-6 text-soft-purple" />,
      title: "Automated Stain Analysis",
      desc: "Before washing, computer vision detects exact stain locations and types (oil, wine, ink) and applies targeted pre-treatment."
    },
    {
      icon: <Map className="w-6 h-6 text-electric-blue" />,
      title: "Smart Logistics Routing",
      desc: "Rider routes are dynamically optimized by AI to ensure pickups and deliveries happen within a 15-minute accuracy window."
    }
  ];

  return (
    <section className="py-24 relative bg-deep-navy">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal>
            <div className="relative">
              {/* 3D Floating visual representation of AI */}
              <motion.div 
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full max-w-md aspect-square bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 absolute inset-0 -z-10 rounded-full"
              ></motion.div>
              
              <div className="grid grid-cols-2 gap-6 relative z-10 perspective-1000">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white/[0.03] backdrop-blur-md p-6 rounded-3xl border border-white/10 mt-12 shadow-2xl hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-neon-cyan animate-pulse" />
                  </div>
                  <h4 className="text-white font-bold mb-2">99.9% Accuracy</h4>
                  <p className="text-sm text-gray-400">In fabric classification</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gradient-to-br from-electric-blue/20 to-soft-purple/20 backdrop-blur-md p-6 rounded-3xl border border-electric-blue/30 shadow-[0_0_30px_rgba(37,99,235,0.2)] mb-12 hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Machine Learning</h4>
                  <p className="text-sm text-blue-200">Trained on 1M+ garments</p>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-soft-purple/20 border border-soft-purple/30 text-soft-purple text-xs font-bold mb-6">
                <Sparkles className="w-3 h-3" />
                <span>WAshIT INTELLIGENCE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Powered by Artificial Intelligence</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-gray-400 text-lg font-inter mb-12">
                We don&apos;t just wash clothes; we engineer garment care. Our proprietary AI ensures zero damage, 100% transparency, and flawless logistics.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#0a0f24] rounded-2xl border border-white/5 shadow-inner">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Camera, ShieldCheck, Zap, BarChart } from "lucide-react";

export default function AIFeatures() {
  const aiCapabilities = [
    {
      icon: <Camera className="w-6 h-6 text-neon-cyan" />,
      title: "AI Fabric Assessment",
      desc: "Our app uses smartphone cameras to instantly detect fabric types, stains, and existing damage to assign the perfect wash cycle."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-electric-blue" />,
      title: "Automated Dispute Resolution",
      desc: "Pre-wash digital logging ensures 100% transparency. Any damage disputes are handled automatically based on initial scans."
    },
    {
      icon: <Zap className="w-6 h-6 text-mint-green" />,
      title: "Smart Route Optimization",
      desc: "Our rider algorithms ensure pickups and deliveries are grouped efficiently, reducing carbon footprint and delivery times."
    },
    {
      icon: <BarChart className="w-6 h-6 text-soft-purple" />,
      title: "Dynamic Pricing Engine",
      desc: "Prices adjust dynamically based on fabric complexity, turnaround urgency, and partner availability."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-deep-navy">
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 mb-6">
            <Zap className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-bold text-electric-blue tracking-wider uppercase">WASHIT Intelligence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Powered by Artificial Intelligence</h2>
          <p className="text-gray-400 text-lg font-inter">
            We don't just wash clothes; we engineer garment care. Our proprietary AI ensures zero damage, 100% transparency, and flawless logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiCapabilities.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl glass border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

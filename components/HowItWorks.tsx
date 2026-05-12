"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, ScanLine, Waves, MapPin, PackageCheck, Store, LineChart, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'customer' | 'partner'>('customer');

  const customerSteps = [
    { icon: <Smartphone className="w-6 h-6" />, title: "Book Service", desc: "Schedule a pickup via our app in under 30 seconds." },
    { icon: <ScanLine className="w-6 h-6" />, title: "AI Scan & Pickup", desc: "Our rider arrives and scans garments for condition logging." },
    { icon: <Waves className="w-6 h-6" />, title: "Smart Care", desc: "Individual washing in eco-safe machines based on fabric type." },
    { icon: <MapPin className="w-6 h-6" />, title: "Live Tracking", desc: "Follow your clothes through 9 stages of cleaning and delivery." },
    { icon: <PackageCheck className="w-6 h-6" />, title: "Fresh Delivery", desc: "Delivered crisp, folded, and smelling fresh at your scheduled time." }
  ];

  const partnerSteps = [
    { icon: <Store className="w-6 h-6" />, title: "Join Platform", desc: "List your laundry business on our high-traffic marketplace." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Receive Orders", desc: "Get steady customer orders routed directly to your dashboard." },
    { icon: <Users className="w-6 h-6" />, title: "Manage Logistics", desc: "Use our smart CRM to track staff, riders, and machine allocation." },
    { icon: <LineChart className="w-6 h-6" />, title: "Grow Revenue", desc: "Analyze metrics, offer subscriptions, and scale your business." }
  ];

  const activeSteps = activeTab === 'customer' ? customerSteps : partnerSteps;

  return (
    <section id="how-it-works" className="py-24 relative bg-[#0a0f24] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">How The Ecosystem Works</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-lg">A seamless digital experience connecting customers with premium laundry care.</p>
          </ScrollReveal>
        </div>

        {/* Tabs */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center mb-16">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex relative">
              <button 
                onClick={() => setActiveTab('customer')}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === 'customer' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                For Customers
              </button>
              <button 
                onClick={() => setActiveTab('partner')}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === 'partner' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                For Partners
              </button>
              <motion.div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full shadow-lg ${activeTab === 'customer' ? 'bg-electric-blue' : 'bg-soft-purple'}`}
                animate={{ x: activeTab === 'customer' ? 4 : '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-[40px] left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10 justify-center">
            <AnimatePresence mode="wait">
              {activeSteps.map((step, index) => (
                <motion.div 
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center relative group"
                >
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-2xl border transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${activeTab === 'customer' ? 'bg-[#0D132D] border-electric-blue/30 text-neon-cyan group-hover:border-electric-blue' : 'bg-[#0D132D] border-soft-purple/30 text-soft-purple group-hover:border-soft-purple'} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                  
                  {/* Step Number Badge */}
                  <div className={`absolute top-[-10px] right-1/2 translate-x-12 w-8 h-8 rounded-full border-[3px] border-[#0a0f24] flex items-center justify-center text-xs font-bold text-white shadow-lg ${activeTab === 'customer' ? 'bg-electric-blue' : 'bg-soft-purple'}`}>
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

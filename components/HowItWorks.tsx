"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ScanLine, Waves, MapPin, PackageCheck, Store, LineChart, Users } from 'lucide-react';

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
    <section id="how-it-works" className="py-24 relative bg-[#060a17]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">How The Ecosystem Works</h2>
          <p className="text-gray-400 text-lg">A seamless digital experience connecting customers with premium laundry care.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 p-1 rounded-full border border-white/10 flex">
            <button 
              onClick={() => setActiveTab('customer')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === 'customer' ? 'bg-electric-blue text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              For Customers
            </button>
            <button 
              onClick={() => setActiveTab('partner')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === 'partner' ? 'bg-soft-purple text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              For Partners
            </button>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {activeSteps.map((step, index) => (
              <motion.div 
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl border ${activeTab === 'customer' ? 'bg-electric-blue/20 border-electric-blue/30 text-neon-cyan' : 'bg-soft-purple/20 border-soft-purple/30 text-soft-purple'} backdrop-blur-md`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                
                {/* Step Number Badge */}
                <div className="absolute top-[-10px] right-1/2 translate-x-10 md:translate-x-6 w-6 h-6 rounded-full bg-deep-navy border border-white/20 flex items-center justify-center text-xs font-bold text-white">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

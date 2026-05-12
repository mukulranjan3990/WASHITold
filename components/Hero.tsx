"use client";
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Truck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1.5 px-4 rounded-full glass border border-neon-cyan/30 text-neon-cyan text-sm font-semibold mb-6 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              🚀 The Future of Laundry is Here
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Smart Laundry. <br/>
              <span className="gradient-text">Zero Hassle.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a pickup in seconds. Track your clothes in real-time. Experience premium laundry care powered by AI.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-electric-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105">
                Schedule Pickup <ArrowRight className="h-5 w-5" />
              </button>
              <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center transition-all">
                Partner with us
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: MapPin, title: 'Find Nearby', desc: 'Locate trusted laundries around you instantly' },
              { icon: Truck, title: 'Doorstep Service', desc: 'Free pickup and delivery at your convenience' },
              { icon: Clock, title: 'Real-time Tracking', desc: 'Know exactly where your clothes are at all times' },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-electric-blue/20 flex items-center justify-center mb-4 border border-electric-blue/50">
                  <feature.icon className="h-7 w-7 text-neon-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

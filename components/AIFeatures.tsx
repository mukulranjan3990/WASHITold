"use client";
import { motion } from 'framer-motion';
import { Brain, LineChart, ShieldCheck, Map } from 'lucide-react';

export default function AIFeatures() {
  return (
    <section className="py-24 bg-electric-blue/5 border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-96 h-96 bg-soft-purple/20 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-soft-purple font-semibold tracking-wider uppercase text-sm mb-4 block">Next-Gen Tech</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Powered by <br/><span className="gradient-text">Futuristic AI</span></h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We leverage artificial intelligence to optimize routing, detect stains automatically, and recommend the best fabric care, saving time and money for everyone.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Brain, title: "AI Stain Detection", desc: "Smart cameras identify spots and suggest targeted treatments instantly." },
                { icon: LineChart, title: "Smart Pricing Engine", desc: "Dynamic, fair pricing based on exact weight, urgency, and fabric type." },
                { icon: ShieldCheck, title: "Fabric Care AI", desc: "Automatically sorts clothes and applies the perfect wash cycle." },
                { icon: Map, title: "Smart Route Optimization", desc: "Reduces delivery times by computing the fastest paths for riders." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-5 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-soft-purple/50 group-hover:bg-soft-purple/10 transition-all">
                    <feature.icon className="h-7 w-7 text-soft-purple" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-soft-purple blur-[60px] opacity-20" />
            <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-electric-blue to-soft-purple" />
              
              <div className="flex justify-between items-center mb-8 p-2 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-neon-cyan" /> AI Dashboard
                </div>
              </div>

              <div className="space-y-6">
                <div className="h-40 bg-black/20 rounded-2xl border border-white/5 p-5 flex items-end gap-3">
                  {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 w-full bg-gradient-to-t from-electric-blue/20 to-electric-blue/80 rounded-t-lg relative group cursor-pointer" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-deep-navy text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/20 rounded-2xl border border-white/5 p-5 hover:border-neon-cyan/30 transition-colors cursor-pointer">
                    <div className="text-sm text-gray-400 mb-2">Revenue Optimization</div>
                    <div className="text-3xl font-bold text-neon-cyan">+24.5%</div>
                    <div className="text-xs text-green-400 mt-2">↑ Up from last month</div>
                  </div>
                  <div className="bg-black/20 rounded-2xl border border-white/5 p-5 hover:border-soft-purple/30 transition-colors cursor-pointer">
                    <div className="text-sm text-gray-400 mb-2">Active Orders</div>
                    <div className="text-3xl font-bold text-soft-purple">1,204</div>
                    <div className="text-xs text-gray-400 mt-2">Processing seamlessly</div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-2xl border border-white/5 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">System Status</div>
                      <div className="text-xs text-gray-400">All AI models running</div>
                    </div>
                  </div>
                  <div className="text-green-400 text-sm font-bold">100% Online</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Sparkles, Scale, Info } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

export default function Pricing() {
  const [weight, setWeight] = useState(5);
  const [type, setType] = useState('daily');
  const [speed, setSpeed] = useState('standard');

  const calculatePrice = () => {
    let base = type === 'daily' ? 99 : type === 'premium' ? 199 : 299;
    let total = base * weight;
    if (speed === 'express') total *= 1.5;
    return Math.round(total);
  };

  return (
    <section id="pricing" className="py-24 relative bg-deep-navy overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Transparent & <br/><span className="text-electric-blue">Smart Pricing</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-gray-400 text-lg mb-8">No hidden fees. Pay strictly by weight for daily wear or by piece for premium items. Get an instant AI-powered estimate.</p>
            </ScrollReveal>
            
            <div className="space-y-8 mt-12">
              <ScrollReveal delay={0.2}>
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center shrink-0 group-hover:bg-electric-blue group-hover:scale-110 transition-all duration-300">
                    <Scale className="w-6 h-6 text-electric-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-1 group-hover:text-electric-blue transition-colors">Flat-Rate Weight Pricing</h4>
                    <p className="text-gray-400 leading-relaxed">Perfect for daily wear. Just weigh and pay. No hidden service charges or delivery fees.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-soft-purple/10 border border-soft-purple/20 flex items-center justify-center shrink-0 group-hover:bg-soft-purple group-hover:scale-110 transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-soft-purple group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-1 group-hover:text-soft-purple transition-colors">Dynamic AI Estimation</h4>
                    <p className="text-gray-400 leading-relaxed">Our AI scans fabrics and calculates precise costs instantly during pickup.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Calculator UI */}
          <ScrollReveal delay={0.4}>
            <motion.div 
              className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/20 via-white/5 to-white/0 overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-soft-purple/10 z-0"></div>
              
              <div className="relative z-10 bg-[#0a0f24]/90 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="p-2 bg-neon-cyan/10 rounded-lg">
                      <Calculator className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-outfit">Price Estimator</h3>
                  </div>

                  <div className="space-y-8">
                    {/* Type Selector */}
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-3 block">Garment Type</label>
                      <div className="grid grid-cols-3 gap-3 relative p-1 bg-white/5 rounded-xl border border-white/10">
                        {[
                          { id: 'daily', label: 'Daily Wear' },
                          { id: 'premium', label: 'Premium' },
                          { id: 'delicate', label: 'Delicate' }
                        ].map((t) => (
                          <button 
                            key={t.id}
                            onClick={() => setType(t.id)}
                            className="relative py-2.5 text-sm rounded-lg transition-all text-center z-10 font-medium"
                          >
                            <span className={`relative z-10 ${type === t.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}>{t.label}</span>
                            {type === t.id && (
                              <motion.div 
                                layoutId="pricing-tab"
                                className="absolute inset-0 bg-electric-blue rounded-lg -z-0"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Weight Slider */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="text-sm font-medium text-gray-300 block">Weight Estimate</label>
                        <div className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg text-neon-cyan font-bold">{weight} kg</div>
                      </div>
                      <div className="relative pt-2 pb-2">
                        <input 
                          type="range" 
                          min="1" max="20" 
                          value={weight} 
                          onChange={(e) => setWeight(parseInt(e.target.value))}
                          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer relative z-10 accent-neon-cyan"
                        />
                        <div 
                          className="absolute top-2 left-0 h-2 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-l-lg pointer-events-none"
                          style={{ width: `${(weight / 20) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Speed Selector */}
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-3 block">Turnaround Speed</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button 
                          onClick={() => setSpeed('standard')}
                          className={`py-3 text-sm rounded-xl border transition-all ${speed === 'standard' ? 'bg-mint-green/20 border-mint-green text-mint-green shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                        >
                          Standard (48h)
                        </button>
                        <button 
                          onClick={() => setSpeed('express')}
                          className={`py-3 text-sm rounded-xl border transition-all flex items-center justify-center space-x-2 ${speed === 'express' ? 'bg-electric-blue/20 border-electric-blue text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                        >
                          <span>Express (24h)</span>
                          <Sparkles className={`w-3 h-3 ${speed === 'express' ? 'text-neon-cyan' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400">Estimated Total</span>
                    <div className="flex items-start">
                      <span className="text-2xl font-bold text-white mt-1 mr-1">₹</span>
                      <AnimatePresence mode="popLayout">
                        <motion.span 
                          key={calculatePrice()}
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          className="text-5xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white"
                        >
                          {calculatePrice()}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center justify-end space-x-1 mb-6">
                    <Info className="w-3 h-3" /> 
                    <span>Final price confirmed after AI scan</span>
                  </p>

                  <MagneticButton className="w-full py-4 bg-white text-deep-navy font-bold rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Schedule Pickup Now
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

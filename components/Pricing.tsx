"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, Scale, Info } from 'lucide-react';

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
    <section id="pricing" className="py-24 relative bg-[#060a17]">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Transparent & <br/><span className="text-electric-blue">Smart Pricing</span></h2>
            <p className="text-gray-400 text-lg mb-8">No hidden fees. Pay strictly by weight for daily wear or by piece for premium items. Get an instant AI-powered estimate.</p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Flat-Rate Weight Pricing</h4>
                  <p className="text-sm text-gray-400">Perfect for daily wear. Just weigh and pay.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-soft-purple/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-soft-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Dynamic AI Estimation</h4>
                  <p className="text-sm text-gray-400">Scans fabrics and calculates precise costs instantly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator UI */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[2rem] border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-8">
              <Calculator className="w-6 h-6 text-neon-cyan" />
              <h3 className="text-xl font-bold text-white">Price Estimator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Garment Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'daily', label: 'Daily Wear' },
                    { id: 'premium', label: 'Premium' },
                    { id: 'delicate', label: 'Delicate' }
                  ].map((t) => (
                    <button 
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`py-2 text-sm rounded-lg border transition-all ${type === t.id ? 'bg-electric-blue border-electric-blue text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-300 block">Weight (kg)</label>
                  <span className="text-neon-cyan font-bold">{weight} kg</span>
                </div>
                <input 
                  type="range" 
                  min="1" max="20" 
                  value={weight} 
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                  className="w-full accent-electric-blue h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Turnaround Speed</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setSpeed('standard')}
                    className={`py-2 text-sm rounded-lg border transition-all ${speed === 'standard' ? 'bg-mint-green/20 border-mint-green text-mint-green' : 'bg-white/5 border-white/10 text-gray-400'}`}
                  >
                    Standard (48h)
                  </button>
                  <button 
                    onClick={() => setSpeed('express')}
                    className={`py-2 text-sm rounded-lg border transition-all flex items-center justify-center space-x-2 ${speed === 'express' ? 'bg-electric-blue border-electric-blue text-white' : 'bg-white/5 border-white/10 text-gray-400'}`}
                  >
                    <span>Express (24h)</span>
                    <Sparkles className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-gray-400">Estimated Total</span>
                  <span className="text-4xl font-outfit font-bold text-white">₹{calculatePrice()}</span>
                </div>
                <p className="text-xs text-gray-500 flex items-center space-x-1">
                  <Info className="w-3 h-3" /> 
                  <span>Final price confirmed after AI scan</span>
                </p>
              </div>

              <button className="w-full py-4 bg-white text-deep-navy font-bold rounded-xl hover:bg-gray-200 transition-colors mt-4">
                Schedule Pickup
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

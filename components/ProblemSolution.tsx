"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ShieldAlert, BadgeCheck, Clock, Zap, Droplets, Leaf } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ProblemSolution() {
  const comparisons = [
    {
      problem: "Garment Mixing & Loss",
      problemDesc: "Clothes mixed with hundreds of others, leading to missing or swapped items.",
      problemIcon: <XCircle className="w-6 h-6 text-red-400" />,
      solution: "One-Household-One-Machine",
      solutionDesc: "Zero mixing. Individual machines per family with AI-barcoded garment tracking.",
      solutionIcon: <CheckCircle2 className="w-6 h-6 text-mint-green" />,
    },
    {
      problem: "Fabric Damage",
      problemDesc: "Harsh chemicals and generic washing cycles destroying premium fabrics.",
      problemIcon: <ShieldAlert className="w-6 h-6 text-red-400" />,
      solution: "AI Fabric Assessment",
      solutionDesc: "Smart scanners identify fabric type and select the perfect eco-safe wash cycle.",
      solutionIcon: <BadgeCheck className="w-6 h-6 text-mint-green" />,
    },
    {
      problem: "Unreliable Delivery",
      problemDesc: "Missed schedules, late riders, and zero transparency on order status.",
      problemIcon: <Clock className="w-6 h-6 text-red-400" />,
      solution: "Live Uber-Style Tracking",
      solutionDesc: "Track your rider on a live map with 100% accurate ETAs and milestone updates.",
      solutionIcon: <Zap className="w-6 h-6 text-mint-green" />,
    },
    {
      problem: "Poor Hygiene",
      problemDesc: "Damp smells and uncertified cleaning processes causing allergies.",
      problemIcon: <Droplets className="w-6 h-6 text-red-400" />,
      solution: "Anti-Bacterial Processing",
      solutionDesc: "Certified hygienic wash with eco-friendly, biodegradable detergents.",
      solutionIcon: <Leaf className="w-6 h-6 text-mint-green" />,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#060a17]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">
              The Laundry Industry is Broken. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">We Fixed It.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-lg font-inter">
              Say goodbye to missing socks, chemical odors, and late deliveries. WASHIT brings transparency, luxury, and trust to garment care.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {comparisons.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-mint-green/5 opacity-50"></div>
                
                <div className="relative flex flex-col sm:flex-row h-full">
                  {/* Problem Side */}
                  <div className="flex-1 p-8 bg-[#0a0f24] border border-red-500/10 backdrop-blur-sm sm:rounded-l-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors"></div>
                    <div className="flex items-center space-x-3 mb-4 relative z-10">
                      {item.problemIcon}
                      <h3 className="text-xl font-semibold text-red-200">{item.problem}</h3>
                    </div>
                    <p className="text-red-200/60 text-sm leading-relaxed relative z-10">{item.problemDesc}</p>
                  </div>
                  
                  {/* Divider (VS) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[#1a2242] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:rotate-180 transition-transform duration-700">
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">VS</span>
                  </div>

                  {/* Solution Side */}
                  <div className="flex-1 p-8 bg-[#0a0f24] border border-mint-green/20 backdrop-blur-sm sm:rounded-r-3xl transition-all duration-300 group-hover:bg-mint-green/5 group-hover:border-mint-green/40 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-mint-green/5 rounded-full blur-2xl group-hover:bg-mint-green/20 transition-colors"></div>
                    <div className="flex items-center space-x-3 mb-4 relative z-10">
                      {item.solutionIcon}
                      <h3 className="text-xl font-semibold text-mint-green">{item.solution}</h3>
                    </div>
                    <p className="text-mint-green/70 text-sm leading-relaxed relative z-10">{item.solutionDesc}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

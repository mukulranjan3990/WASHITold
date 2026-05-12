"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ShieldAlert, BadgeCheck, Clock, Zap, Droplets, Leaf } from "lucide-react";

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
    <section className="py-24 relative overflow-hidden bg-deep-navy">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">
            The Laundry Industry is Broken. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">We Fixed It.</span>
          </h2>
          <p className="text-gray-400 text-lg font-inter">
            Say goodbye to missing socks, chemical odors, and late deliveries. WASHIT brings transparency, luxury, and trust to garment care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {comparisons.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-mint-green/5 opacity-50"></div>
              
              <div className="relative flex flex-col sm:flex-row h-full">
                {/* Problem Side */}
                <div className="flex-1 p-8 bg-red-950/20 border-t border-l border-b border-red-500/10 backdrop-blur-sm sm:rounded-l-3xl">
                  <div className="flex items-center space-x-3 mb-4">
                    {item.problemIcon}
                    <h3 className="text-xl font-semibold text-red-200">{item.problem}</h3>
                  </div>
                  <p className="text-red-200/60 text-sm leading-relaxed">{item.problemDesc}</p>
                </div>
                
                {/* Divider (VS) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-deep-navy border border-white/10 shadow-xl">
                  <span className="text-xs font-bold text-gray-400">VS</span>
                </div>

                {/* Solution Side */}
                <div className="flex-1 p-8 bg-mint-green/10 border border-mint-green/20 backdrop-blur-sm sm:rounded-r-3xl transition-all duration-300 group-hover:bg-mint-green/15 group-hover:border-mint-green/30">
                  <div className="flex items-center space-x-3 mb-4">
                    {item.solutionIcon}
                    <h3 className="text-xl font-semibold text-mint-green">{item.solution}</h3>
                  </div>
                  <p className="text-mint-green/70 text-sm leading-relaxed">{item.solutionDesc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

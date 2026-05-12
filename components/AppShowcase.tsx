"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

export default function AppShowcase() {
  return (
    <section className="py-24 relative bg-[#060a17] overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">One Ecosystem. <br/><span className="text-neon-cyan">Three Native Apps.</span></h2>
            <p className="text-gray-400 text-lg mb-8">
              Whether you&apos;re a customer tracking an order, a rider optimizing your route, or a partner managing your business—there&apos;s an app built specifically for you.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { title: "Customer App", desc: "Live tracking, smart pricing, and seamless booking." },
                { title: "Partner App", desc: "Manage orders, assign staff, and track revenue on the go." },
                { title: "Rider App", desc: "AI-optimized routes and integrated fabric scanning tools." }
              ].map((app, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-mint-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">{app.title}</h4>
                    <p className="text-sm text-gray-400">{app.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <MagneticButton className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <Download className="w-5 h-5 text-white" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400">Download on the</p>
                  <p className="text-sm font-bold text-white leading-tight">App Store</p>
                </div>
              </MagneticButton>
              <MagneticButton className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <Download className="w-5 h-5 text-white" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400">GET IT ON</p>
                  <p className="text-sm font-bold text-white leading-tight">Google Play</p>
                </div>
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* 3 Phones mockup */}
            <div className="relative w-full max-w-md aspect-square">
               <div className="absolute top-0 right-0 w-48 h-96 bg-deep-navy border-[6px] border-gray-800 rounded-[2.5rem] shadow-2xl transform rotate-12 translate-x-4 translate-y-10 opacity-60 z-10"></div>
               <div className="absolute top-10 left-0 w-48 h-96 bg-deep-navy border-[6px] border-gray-800 rounded-[2.5rem] shadow-2xl transform -rotate-12 -translate-x-4 translate-y-10 opacity-60 z-10"></div>
               <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-56 h-[420px] bg-electric-blue border-[6px] border-gray-900 rounded-[2.5rem] shadow-[0_0_50px_rgba(37,99,235,0.3)] z-20 overflow-hidden flex flex-col">
                  {/* Phone Screen */}
                  <div className="flex-1 bg-[#0A0F24] p-4 pt-8">
                     <div className="flex justify-between items-center mb-6">
                        <div className="w-8 h-8 rounded-full bg-white/10"></div>
                        <div className="w-16 h-2 rounded-full bg-white/10"></div>
                     </div>
                     <div className="w-full h-32 rounded-xl bg-gradient-to-br from-electric-blue to-soft-purple mb-4 p-4 flex flex-col justify-end">
                       <p className="text-white text-xs opacity-80">WASHIT Cash</p>
                       <p className="text-white font-bold text-xl">₹1,250</p>
                     </div>
                     <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="h-20 bg-white/5 rounded-xl border border-white/10"></div>
                        <div className="h-20 bg-white/5 rounded-xl border border-white/10"></div>
                     </div>
                     <div className="h-24 w-full bg-white/5 rounded-xl border border-white/10"></div>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

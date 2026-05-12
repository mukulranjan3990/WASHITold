"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Clock, ShieldCheck, Cpu } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-[#060a17]">
      {/* Background Gradients & Orbs with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electric-blue/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-soft-purple/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-neon-cyan/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
        
        {/* Dynamic Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div style={{ y: yText, opacity: opacityText }} className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer group">
                <Star className="w-4 h-4 text-neon-cyan group-hover:rotate-180 transition-transform duration-700" />
                <span className="text-sm font-medium text-gray-300">India&apos;s First AI-Powered Laundry Ecosystem</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl lg:text-7xl font-outfit font-bold leading-[1.1] mb-6 tracking-tight">
                The Future of <br/>
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-electric-blue to-soft-purple animate-gradient-x">Smart Laundry</span>
                  <motion.span 
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    transition={{ duration: 1, delay: 0.5, ease: "anticipate" }}
                    className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-neon-cyan to-transparent origin-left rounded-full"
                  />
                </span> <br/>
                is Here.
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl font-inter">
                Experience premium, contactless, and AI-assessed fabric care. We bring transparency, hygiene, and luxury to your doorstep with real-time tracking and zero garment mixing.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <MagneticButton className="px-8 py-4 bg-electric-blue rounded-full text-white font-semibold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <span className="relative z-10">Book a Pickup</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                
                <MagneticButton className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 backdrop-blur-md transition-all">
                  <Cpu className="w-5 h-5 text-soft-purple" />
                  <span className="relative z-10">See How AI Works</span>
                </MagneticButton>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="mt-12 flex items-center space-x-8 text-sm text-gray-400 font-medium">
                <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-default">
                  <Clock className="w-5 h-5 text-mint-green" />
                  <span>24h Turnaround</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-default">
                  <ShieldCheck className="w-5 h-5 text-electric-blue" />
                  <span>Damage Insurance</span>
                </div>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Right Visuals - Floating UI Cards */}
          <motion.div 
            style={{ scale: scaleImage }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
          >
            {/* Main App Mockup */}
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: -5 }}
              className="relative w-full max-w-sm aspect-[9/19] bg-deep-navy border-[8px] border-[#1a2242] rounded-[3rem] shadow-2xl overflow-hidden z-20 transition-transform duration-300 ease-out preserve-3d"
            >
              {/* Screen Content */}
              <div className="absolute inset-0 bg-[#060a17]">
                <div className="absolute top-0 inset-x-0 h-7 bg-[#1a2242] z-30 flex justify-center pt-2 rounded-b-xl w-40 mx-auto">
                  <div className="w-16 h-1.5 bg-white/20 rounded-full"></div>
                </div>
                
                <div className="p-6 pt-12 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-xs text-gray-400">Current Order</p>
                      <p className="font-semibold text-white">#WS-9842</p>
                    </div>
                    <div className="px-3 py-1 bg-mint-green/20 text-mint-green rounded-full text-xs font-bold border border-mint-green/30 animate-pulse-glow">
                      Live Tracking
                    </div>
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="w-full h-48 bg-white/5 rounded-2xl mb-6 relative overflow-hidden border border-white/5 group cursor-pointer">
                    <motion.div 
                      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                      transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
                      className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=28.6139,77.2090&zoom=13&size=400x400&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative.country|element:geometry.stroke|color:0x4b6878&style=feature:administrative.land_parcel|element:labels.text.fill|color:0x64779e&style=feature:administrative.province|element:geometry.stroke|color:0x4b6878&style=feature:landscape.man_made|element:geometry.stroke|color:0x334e87&style=feature:landscape.natural|element:geometry|color:0x021019&style=feature:poi|element:geometry|color:0x283d6a&style=feature:poi|element:labels.text.fill|color:0x6f9ba5&style=feature:poi|element:labels.text.stroke|color:0x1d2c4d&style=feature:poi.park|element:geometry.fill|color:0x023e58&style=feature:poi.park|element:labels.text.fill|color:0x3C7680&style=feature:road|element:geometry|color:0x304a7d&style=feature:road|element:labels.text.fill|color:0x98a5be&style=feature:road|element:labels.text.stroke|color:0x1d2c4d&style=feature:road.highway|element:geometry|color:0x2c6675&style=feature:road.highway|element:geometry.stroke|color:0x255763&style=feature:road.highway|element:labels.text.fill|color:0xb0d5ce&style=feature:road.highway|element:labels.text.stroke|color:0x023e58&style=feature:transit|element:labels.text.fill|color:0x98a5be&style=feature:transit|element:labels.text.stroke|color:0x1d2c4d&style=feature:transit.line|element:geometry.fill|color:0x283d6a&style=feature:transit.station|element:geometry|color:0x3a4762&style=feature:water|element:geometry|color:0x0e1626&style=feature:water|element:labels.text.fill|color:0x4e6d70')] bg-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-neon-cyan rounded-full shadow-[0_0_15px_#00F0FF]"></div>
                      <div className="w-12 h-12 bg-neon-cyan/20 rounded-full absolute -top-4 -left-4 animate-ping"></div>
                    </div>
                    
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="absolute bottom-3 left-3 right-3 bg-deep-navy/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center space-x-3"
                    >
                        <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden">
                          <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" width={40} height={40} alt="Rider" />
                        </div>
                        <div>
                          <p className="text-xs text-white font-medium">Rahul K. (Rider)</p>
                          <p className="text-[10px] text-mint-green">Arriving in 5 mins</p>
                        </div>
                    </motion.div>
                  </div>

                  <div className="space-y-4 flex-1">
                    {[
                      { title: "Pickup assigned", done: true },
                      { title: "AI Fabric Scan", done: false },
                      { title: "Washing & Care", done: false }
                    ].map((step, i) => (
                      <div key={i} className="relative">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${step.done ? 'bg-mint-green shadow-[0_0_8px_#10B981]' : 'bg-white/20 border border-white/30'}`}></div>
                          <p className={`text-sm ${step.done ? 'text-white font-medium' : 'text-gray-500'}`}>{step.title}</p>
                        </div>
                        {i !== 2 && <div className="absolute left-1.5 top-4 w-0.5 h-6 bg-white/10"></div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1: AI Scan */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotateZ: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 lg:-right-16 top-1/4 glass-card p-4 rounded-2xl z-30 w-64 shadow-2xl backdrop-blur-xl border border-white/10 bg-white/5"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-soft-purple/20 rounded-xl">
                  <Cpu className="w-6 h-6 text-soft-purple" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AI Fabric Assessed</p>
                  <p className="text-xs text-gray-400 mt-1">100% Cotton detected. Gentle cycle selected.</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Partner Dashboard */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotateZ: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 lg:-left-20 bottom-1/4 glass-card p-4 rounded-2xl z-30 w-72 shadow-2xl backdrop-blur-xl border border-white/10 bg-white/5"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-white">Partner Revenue</p>
                <span className="text-xs text-mint-green bg-mint-green/10 px-2 py-1 rounded border border-mint-green/20">+24% Today</span>
              </div>
              <div className="flex items-end space-x-2 h-12">
                {[40, 60, 45, 80, 50, 90, 70].map((h, i) => (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    key={i} 
                    className="w-full bg-electric-blue/20 rounded-t-sm relative group cursor-pointer"
                  >
                    <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">₹{h}0</div>
                    <div className="w-full bg-gradient-to-t from-electric-blue to-neon-cyan rounded-t-sm" style={{ height: `${h * 0.8}%` }}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

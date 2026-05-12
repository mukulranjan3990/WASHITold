"use client";

import { motion } from "framer-motion";
import { Shirt, Footprints, Sofa, Diamond, Scissors, Droplets } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

export default function Services() {
  const services = [
    { icon: <Shirt className="w-8 h-8" />, name: "Daily Wash & Fold", desc: "Per-kilogram smart pricing for everyday wear.", price: "From ₹99/kg" },
    { icon: <Diamond className="w-8 h-8" />, name: "Couture & Wedding", desc: "Premium dry cleaning for designer and bridal wear.", price: "From ₹499" },
    { icon: <Footprints className="w-8 h-8" />, name: "Sneaker Restoration", desc: "Deep cleaning and conditioning for luxury sneakers.", price: "From ₹299" },
    { icon: <Sofa className="w-8 h-8" />, name: "Home & Upholstery", desc: "Curtains, carpets, and sofa spa services.", price: "From ₹199" },
    { icon: <Scissors className="w-8 h-8" />, name: "Leather Care", desc: "Polishing and restoration for jackets and bags.", price: "From ₹399" },
    { icon: <Droplets className="w-8 h-8" />, name: "Steam Ironing", desc: "Crisp, wrinkle-free finish using industrial steam.", price: "From ₹20/pc" },
  ];

  return (
    <section id="services" className="py-24 relative bg-deep-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">Premium Care</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-gray-400 text-lg">Beyond standard washing. We offer expert treatment for every fabric type using German eco-friendly technology.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <MagneticButton className="mt-6 md:mt-0 px-8 py-4 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-all text-sm font-semibold backdrop-blur-md text-white">
              View All Services
            </MagneticButton>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-[#0a0f24] border border-white/5 hover:border-neon-cyan/50 transition-all cursor-pointer relative overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,240,255,0.1)]"
              >
                {/* Hover gradient background reveal */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-soft-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl group-hover:bg-neon-cyan/20 transition-all duration-500"></div>
                
                <div className="relative z-10 text-neon-cyan mb-6 bg-neon-cyan/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="relative z-10 text-2xl font-bold text-white mb-3 font-outfit group-hover:text-neon-cyan transition-colors">{service.name}</h3>
                <p className="relative z-10 text-gray-400 mb-6 line-clamp-2">{service.desc}</p>
                
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="font-semibold text-mint-green">{service.price}</span>
                  <span className="text-sm text-white group-hover:text-electric-blue flex items-center overflow-hidden">
                    <span className="transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">Book Now</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

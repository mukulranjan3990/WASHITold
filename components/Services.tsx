"use client";

import { motion } from "framer-motion";
import { Shirt, Footprints, Sofa, Diamond, Scissors, Droplets } from "lucide-react";

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
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Specialized Premium Care</h2>
            <p className="text-gray-400 text-lg">Beyond standard washing. We offer expert treatment for every fabric type using German eco-friendly technology.</p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all text-sm font-semibold">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-electric-blue/50 hover:bg-white/[0.04] transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl group-hover:bg-electric-blue/20 transition-all"></div>
              
              <div className="text-neon-cyan mb-6 bg-neon-cyan/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-outfit">{service.name}</h3>
              <p className="text-gray-400 mb-6 line-clamp-2">{service.desc}</p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                <span className="font-semibold text-mint-green">{service.price}</span>
                <span className="text-sm text-electric-blue group-hover:translate-x-1 transition-transform flex items-center">
                  Book Now &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

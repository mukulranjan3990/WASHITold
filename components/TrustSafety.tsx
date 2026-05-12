"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, LockKeyhole, HeartHandshake } from "lucide-react";

export default function TrustSafety() {
  const trustFeatures = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-rose-400" />,
      title: "One-Household Guarantee",
      desc: "Your clothes are washed in an exclusive machine. Zero mixing with other orders ensures maximum hygiene and no missing items."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-electric-blue" />,
      title: "Couture Care Insurance",
      desc: "Comprehensive digital insurance for your luxury items—sarees, designer suits, and handbags are 100% protected."
    },
    {
      icon: <Leaf className="w-8 h-8 text-mint-green" />,
      title: "Zero-Plastic Eco Packaging",
      desc: "Delivered in reusable cloth bags with biodegradable garment covers. A step towards a sustainable future."
    },
    {
      icon: <LockKeyhole className="w-8 h-8 text-yellow-400" />,
      title: "Contactless Smart Lockers",
      desc: "24/7 drop-off and pickup via QR-code accessed smart lockers located in major tech parks and premium societies."
    }
  ];

  return (
    <section className="py-24 relative bg-[#060a17]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Built on Trust & Transparency</h2>
          <p className="text-gray-400 text-lg">
            We&apos;ve engineered safety into every step of the laundry process. From pick-up to delivery, your garments are fully protected.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
            >
              <div className="p-4 rounded-2xl bg-deep-navy shadow-inner shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from 'framer-motion';
import { Shirt, Wind, Sparkles, Box, CheckCircle } from 'lucide-react';

export default function Features() {
  const services = [
    { name: "Wash & Fold", icon: Shirt, price: "from $1.5/lb", desc: "Everyday laundry cleaned and perfectly folded." },
    { name: "Dry Cleaning", icon: Wind, price: "from $5/item", desc: "Professional care for delicate and structured garments." },
    { name: "Premium Care", icon: Sparkles, price: "from $8/item", desc: "Special attention for designer and luxury fabrics." },
    { name: "Bulky Items", icon: Box, price: "from $15/item", desc: "Duvets, curtains, and carpets expertly cleaned." },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Premium <span className="gradient-text">Services</span></h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-16">Expert care for all your fabric needs, powered by AI recommendations and professional partners.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-2xl bg-electric-blue/10 flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 group-hover:scale-110 transition-all">
                  <service.icon className="h-8 w-8 text-neon-cyan" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-electric-blue font-bold text-lg">{service.price}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan group-hover:text-deep-navy transition-colors">
                    <CheckCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-electric-blue/10 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">How It <span className="gradient-text">Works</span></h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {['Book Service', 'We Pickup', 'Expert Cleaning', 'Fast Delivery'].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-deep-navy glass border-4 border-electric-blue flex items-center justify-center text-3xl font-bold mb-6 shadow-[0_0_30px_rgba(37,99,235,0.4)] text-neon-cyan">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step}</h4>
                  <p className="text-gray-400 text-sm">Seamless experience from start to finish with live updates.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

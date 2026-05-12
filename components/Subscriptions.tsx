"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

export default function Subscriptions() {
  const plans = [
    {
      name: "Bachelor Plan",
      price: "₹1,499",
      period: "/month",
      desc: "Perfect for single professionals.",
      features: ["20kg monthly limit", "Weekly 1 pickup", "Standard 48h delivery", "Basic garment care"],
      color: "bg-white/[0.02] border-white/10",
      btnText: "Choose Plan",
      btnStyle: "bg-white/10 hover:bg-white/20 text-white"
    },
    {
      name: "Family Plan",
      price: "₹3,999",
      period: "/month",
      desc: "Ideal for a family of four.",
      features: ["60kg monthly limit", "Weekly 2 pickups", "Express 24h delivery", "Premium stain removal", "Dedicated household machine"],
      color: "bg-gradient-to-b from-electric-blue/20 to-transparent border-electric-blue/50 transform md:-translate-y-4 shadow-[0_0_30px_rgba(37,99,235,0.2)]",
      btnText: "Most Popular",
      btnStyle: "bg-electric-blue hover:bg-blue-600 text-white shadow-lg",
      popular: true
    },
    {
      name: "Couture Elite",
      price: "₹7,999",
      period: "/month",
      desc: "For luxury wardrobe management.",
      features: ["Unlimited daily wear", "10 Luxury pieces/month", "Same-day priority delivery", "Couture Care Insurance included", "Smart wardrobe app access"],
      color: "bg-white/[0.02] border-white/10",
      btnText: "Choose Elite",
      btnStyle: "bg-white/10 hover:bg-white/20 text-white"
    }
  ];

  return (
    <section className="py-24 relative bg-deep-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Smart Subscription Plans</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-lg">
              Put your laundry on autopilot. Subscribe once, and let us handle your wardrobe effortlessly every month.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border relative flex flex-col h-full ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-electric-blue text-white text-xs font-bold rounded-full">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2 font-outfit">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-mint-green shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton className={`w-full py-4 rounded-xl font-bold transition-all ${plan.btnStyle}`}>
                {plan.btnText}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

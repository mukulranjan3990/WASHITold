"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Star } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-electric-blue">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2"></path>
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="white" strokeWidth="2"></path>
          <path d="M0,80 Q25,55 50,80 T100,80" fill="none" stroke="white" strokeWidth="1"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6 leading-tight">
              Ready to Upgrade Your <br/> Laundry Experience?
            </h2>
            <p className="text-blue-100 text-xl font-inter mb-10 max-w-2xl mx-auto">
              Join thousands of users who have switched to India's smartest, most hygienic, and transparent laundry ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-electric-blue font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center space-x-2 group">
                <span>Book First Pickup</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center space-x-2 text-sm text-blue-200 font-medium">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 from 10,000+ Happy Customers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { Download, PlayCircle, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5 bg-electric-blue/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
          Ready to Experience the <br /> <span className="gradient-text">Future of Laundry?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Join thousands of users who have upgraded their laundry experience.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-electric-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105">
            <ArrowRight className="h-6 w-6" /> Schedule Pickup Now
          </button>
          <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-3 transition-all hover:scale-105">
            <Download className="h-6 w-6" /> Download App
          </button>
        </div>
        
        <div className="mt-16 pt-16 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-4">Are you a Laundry Business?</h3>
          <p className="text-gray-400 mb-6">Grow your business, automate operations, and get more customers with our Partner SaaS.</p>
          <button className="text-neon-cyan font-bold hover:underline flex items-center justify-center gap-2 mx-auto">
            Become a Partner <PlayCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

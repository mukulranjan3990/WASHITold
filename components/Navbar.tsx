"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Droplets } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <Droplets className="h-8 w-8 text-neon-cyan" />
            <span className="text-2xl font-bold tracking-tighter gradient-text">WASHIT</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#" className="hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
              <a href="#" className="hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Tracking</a>
              <a href="#" className="hover:text-soft-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">For Partners</a>
              <button className="bg-electric-blue hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                Book Now
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden glass border-b border-white/5 absolute w-full">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            <a href="#" className="hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#" className="hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium">Tracking</a>
            <a href="#" className="hover:text-soft-purple block px-3 py-2 rounded-md text-base font-medium">For Partners</a>
            <button className="w-full mt-4 bg-electric-blue text-white px-6 py-3 rounded-full text-sm font-medium shadow-[0_0_15px_rgba(37,99,235,0.5)]">Book Now</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

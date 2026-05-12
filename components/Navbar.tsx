"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'For Partners', href: '#partners' },
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-deep-navy/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-electric-blue to-soft-purple overflow-hidden">
              <Sparkles className="w-5 h-5 text-white z-10" />
              <motion.div 
                className="absolute inset-0 bg-neon-cyan/50 z-0"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-2xl font-outfit font-bold tracking-tight text-white">
              WASH<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">IT</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:bg-white/5 px-4 py-2 rounded-lg">
              Log In
            </Link>
            <Link href="#book" className="relative overflow-hidden group inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-electric-blue rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
              <span className="relative z-10">Book Pickup</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-soft-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 right-0 bg-deep-navy/95 backdrop-blur-xl border-b border-white/10 md:hidden z-40 overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={link.href} className="text-lg font-medium text-gray-300 hover:text-white block" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
                <Link href="#login" className="text-center py-3 text-white font-medium rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-transform">Log In</Link>
                <Link href="#book" className="text-center py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-electric-blue to-soft-purple active:scale-95 transition-transform">Book Pickup</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

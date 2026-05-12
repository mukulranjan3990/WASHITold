"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'For Partners', href: '#partners' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-navy/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-electric-blue to-soft-purple">
            <Sparkles className="w-5 h-5 text-white" />
            <div className="absolute inset-0 rounded-xl bg-neon-cyan blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-outfit font-bold tracking-tight text-white">
            WASH<span className="text-neon-cyan">IT</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Log In
          </Link>
          <Link href="#book" className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-electric-blue rounded-full hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Book Pickup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-deep-navy/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <Link href="#login" className="text-center py-3 text-white font-medium rounded-xl bg-white/5 border border-white/10">Log In</Link>
            <Link href="#book" className="text-center py-3 text-white font-semibold rounded-xl bg-electric-blue">Book Pickup</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

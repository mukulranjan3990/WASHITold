"use client";

import { Sparkles, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040714] pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-6 inline-flex">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-tr from-electric-blue to-soft-purple">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-outfit font-bold tracking-tight text-white">
                WASH<span className="text-neon-cyan">IT</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              The world's smartest laundry ecosystem. We combine AI, premium logistics, and certified hygienic care to deliver an unparalleled garment care experience.
            </p>
            <div className="flex items-center space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold mb-6 font-outfit">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press', 'Sustainability', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-outfit">Services</h4>
            <ul className="space-y-4">
              {['Daily Wash', 'Dry Cleaning', 'Sneaker Care', 'Leather Spa', 'Corporate Plans'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-outfit">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
                <span className="text-sm text-gray-400">123 Tech Park, Indiranagar, Bangalore, 560038</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500 shrink-0" />
                <span className="text-sm text-gray-400">1800-WASH-IT</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                <span className="text-sm text-gray-400">support@washit.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WASHIT Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

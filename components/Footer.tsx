import { Droplets, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-navy pt-20 pb-10 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="h-8 w-8 text-neon-cyan" />
              <span className="text-2xl font-bold tracking-tighter gradient-text">WASHIT</span>
            </div>
            <p className="text-gray-400 mb-6">The smart laundry ecosystem powering modern clothing care and laundry business management.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Wash & Fold</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Dry Cleaning</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Premium Care</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Commercial Laundry</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 WASHIT. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Made with ❤️ for Laundry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

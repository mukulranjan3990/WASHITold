"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { motion } from 'framer-motion';
import { LogOut, Package, MapPin, Wallet, Home, History, User, Settings, Sparkles, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'tracking'|'history'|'wallet'>('tracking');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated, router]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#060a17] font-inter text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0a0f24] border-r border-white/5 flex flex-col fixed md:relative z-50 h-16 md:h-screen">
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-electric-blue to-soft-purple flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="font-outfit font-bold text-lg">WAshIT</span>
          </Link>
          <button className="md:hidden">
            <div className="w-8 h-8 rounded-full bg-electric-blue/20"></div>
          </button>
        </div>

        <nav className="hidden md:flex flex-col flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('tracking')} className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'tracking' ? 'bg-electric-blue/10 text-electric-blue font-semibold border border-electric-blue/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <MapPin className="w-5 h-5" />
            <span>Live Tracking</span>
          </button>
          <button onClick={() => setActiveTab('history')} className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'history' ? 'bg-electric-blue/10 text-electric-blue font-semibold border border-electric-blue/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <History className="w-5 h-5" />
            <span>Order History</span>
          </button>
          <button onClick={() => setActiveTab('wallet')} className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'wallet' ? 'bg-electric-blue/10 text-electric-blue font-semibold border border-electric-blue/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
            <Wallet className="w-5 h-5" />
            <span>WAshIT Cash</span>
          </button>
        </nav>

        <div className="hidden md:block p-4 border-t border-white/5">
          <button onClick={handleLogout} className="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 pt-24 md:pt-10 h-screen overflow-y-auto">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-outfit font-bold mb-2">Hello, {user.name.split(' ')[0]} 👋</h1>
            <p className="text-gray-400 text-sm">Track your orders and manage your wardrobe.</p>
          </div>
          <Link href="/book" className="hidden md:flex px-6 py-3 bg-electric-blue text-white rounded-xl font-semibold shadow-lg hover:bg-blue-600 transition-colors">
            + New Order
          </Link>
        </header>

        {activeTab === 'tracking' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0D132D] to-[#0A0F24] border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold font-outfit">Active Order #WS-9842</h3>
                  <p className="text-mint-green text-sm font-medium">Estimated Delivery: Today, 6:00 PM</p>
                </div>
                <div className="px-4 py-2 bg-mint-green/10 text-mint-green rounded-full font-bold text-sm border border-mint-green/20 animate-pulse">
                  Washing
                </div>
              </div>

              {/* Uber-style Map Placeholder */}
              <div className="w-full h-64 bg-white/5 rounded-2xl mb-8 relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=28.6139,77.2090&zoom=14&size=800x400&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative.country|element:geometry.stroke|color:0x4b6878&style=feature:administrative.land_parcel|element:labels.text.fill|color:0x64779e&style=feature:administrative.province|element:geometry.stroke|color:0x4b6878&style=feature:landscape.man_made|element:geometry.stroke|color:0x334e87&style=feature:landscape.natural|element:geometry|color:0x021019&style=feature:poi|element:geometry|color:0x283d6a&style=feature:poi|element:labels.text.fill|color:0x6f9ba5&style=feature:poi|element:labels.text.stroke|color:0x1d2c4d&style=feature:road|element:geometry|color:0x304a7d&style=feature:road|element:labels.text.fill|color:0x98a5be&style=feature:road|element:labels.text.stroke|color:0x1d2c4d&style=feature:water|element:geometry|color:0x0e1626&style=feature:water|element:labels.text.fill|color:0x4e6d70')] bg-cover opacity-60"></div>
                
                {/* Simulated route line */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 100,200 C 300,100 500,300 700,150" fill="transparent" stroke="#00F0FF" strokeWidth="4" strokeDasharray="10,10" className="animate-pulse" />
                </svg>
                
                {/* Store Pin */}
                <div className="absolute top-[130px] left-[680px] w-6 h-6 bg-neon-cyan rounded-full border-4 border-[#0a0f24] shadow-[0_0_20px_#00F0FF]"></div>
                
                {/* Facility Pin */}
                <div className="absolute top-[180px] left-[80px] w-6 h-6 bg-soft-purple rounded-full border-4 border-[#0a0f24] shadow-[0_0_20px_#8B5CF6]"></div>

                {/* Rider Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a0f24]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden relative">
                      <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&w=100&q=80" alt="Rider" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Rahul K.</p>
                      <p className="text-xs text-gray-400">Your washing expert</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Phone className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-6">
                {[
                  { title: "Pickup Complete", desc: "Clothes picked up from home", time: "10:30 AM", done: true },
                  { title: "AI Fabric Scan", desc: "12 items verified. 2 Delicate detected.", time: "11:15 AM", done: true },
                  { title: "Washing", desc: "Eco-wash cycle in progress", time: "In Progress", done: false, active: true },
                  { title: "Ironing & Packing", desc: "Pending", time: "-", done: false },
                  { title: "Out for Delivery", desc: "Pending", time: "-", done: false },
                ].map((step, i) => (
                  <div key={i} className="flex relative">
                    <div className="flex flex-col items-center mr-6 relative z-10">
                      <div className={`w-4 h-4 rounded-full ${step.done ? 'bg-mint-green' : step.active ? 'bg-electric-blue shadow-[0_0_15px_#2563EB] animate-pulse' : 'bg-white/20 border border-white/30'}`}></div>
                      {i !== 4 && <div className={`w-0.5 h-full my-2 ${step.done ? 'bg-mint-green' : 'bg-white/10'}`}></div>}
                    </div>
                    <div className="pb-8">
                      <p className={`font-bold ${step.done || step.active ? 'text-white' : 'text-gray-500'}`}>{step.title}</p>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                      <p className={`text-xs mt-1 ${step.active ? 'text-electric-blue font-semibold' : 'text-gray-500'}`}>{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'wallet' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-2xl">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-electric-blue to-soft-purple relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <p className="text-blue-100 font-medium mb-2 relative z-10">WAshIT Cash Balance</p>
              <h2 className="text-5xl font-outfit font-bold text-white mb-8 relative z-10">₹{user.walletBalance}</h2>
              
              <div className="flex space-x-4 relative z-10">
                <button className="px-6 py-3 bg-white text-electric-blue font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
                  Add Money
                </button>
                <button className="px-6 py-3 bg-white/20 border border-white/30 text-white font-bold rounded-xl hover:bg-white/30 transition-colors">
                  View History
                </button>
              </div>
            </div>
            
            <h3 className="text-xl font-bold font-outfit mt-12 mb-4">Available Offers</h3>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">Add ₹2000, Get ₹2500</p>
                  <p className="text-sm text-gray-400">Valid until Sunday</p>
                </div>
                <button className="px-4 py-2 bg-electric-blue/20 text-electric-blue font-semibold rounded-lg">Apply</button>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0a0f24]/95 backdrop-blur-xl border-t border-white/10 flex justify-around p-4 pb-safe z-50">
        <button onClick={() => setActiveTab('tracking')} className={`flex flex-col items-center space-y-1 ${activeTab === 'tracking' ? 'text-electric-blue' : 'text-gray-500'}`}>
          <MapPin className="w-6 h-6" />
          <span className="text-[10px] font-medium">Track</span>
        </button>
        <button onClick={() => setActiveTab('history')} className={`flex flex-col items-center space-y-1 ${activeTab === 'history' ? 'text-electric-blue' : 'text-gray-500'}`}>
          <History className="w-6 h-6" />
          <span className="text-[10px] font-medium">History</span>
        </button>
        <Link href="/book" className="flex flex-col items-center space-y-1 text-white -mt-6">
          <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <span className="text-2xl leading-none mb-1">+</span>
          </div>
          <span className="text-[10px] font-medium">Book</span>
        </Link>
        <button onClick={() => setActiveTab('wallet')} className={`flex flex-col items-center space-y-1 ${activeTab === 'wallet' ? 'text-electric-blue' : 'text-gray-500'}`}>
          <Wallet className="w-6 h-6" />
          <span className="text-[10px] font-medium">Wallet</span>
        </button>
        <button onClick={handleLogout} className="flex flex-col items-center space-y-1 text-gray-500">
          <LogOut className="w-6 h-6" />
          <span className="text-[10px] font-medium">Logout</span>
        </button>
      </nav>
    </div>
  );
}

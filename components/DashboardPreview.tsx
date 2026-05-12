"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, ShoppingBag, Settings, TrendingUp, Bell } from "lucide-react";
import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section id="partners" className="py-24 relative bg-deep-navy overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">The Smart Laundry Operating System</h2>
          <p className="text-gray-400 text-lg">
            Built for scale. A powerful SaaS dashboard for laundry partners to manage orders, track revenue, and grow their business automatically.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-[#0A0F24]"
        >
          {/* Dashboard Header Mockup */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0D132D]">
            <div className="flex items-center space-x-8">
              <div className="font-outfit font-bold text-white flex items-center space-x-2">
                <span className="w-6 h-6 rounded bg-gradient-to-tr from-electric-blue to-soft-purple"></span>
                <span>WASHIT Partner</span>
              </div>
              <div className="hidden md:flex space-x-6 text-sm text-gray-400">
                <span className="text-white">Dashboard</span>
                <span>Orders</span>
                <span>Customers</span>
                <span>Analytics</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="w-8 h-8 rounded-full bg-electric-blue/20 border border-electric-blue/30"></div>
            </div>
          </div>

          {/* Dashboard Content Mockup */}
          <div className="grid md:grid-cols-4 gap-6 p-6">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col space-y-2 border-r border-white/5 pr-6">
              {[
                { icon: <LayoutDashboard className="w-4 h-4"/>, label: 'Overview', active: true },
                { icon: <ShoppingBag className="w-4 h-4"/>, label: 'Active Orders', active: false },
                { icon: <Users className="w-4 h-4"/>, label: 'Customer CRM', active: false },
                { icon: <TrendingUp className="w-4 h-4"/>, label: 'Revenue', active: false },
                { icon: <Settings className="w-4 h-4"/>, label: 'Settings', active: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${item.active ? 'bg-electric-blue/10 text-electric-blue font-semibold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Main Area */}
            <div className="col-span-3 space-y-6">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Today's Revenue", value: "₹24,500", trend: "+12%" },
                  { label: "Active Orders", value: "142", trend: "+5%" },
                  { label: "New Customers", value: "28", trend: "+18%" }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <span className="text-xs font-semibold text-mint-green bg-mint-green/10 px-2 py-0.5 rounded">{stat.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart & Live Orders */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 h-48 flex flex-col justify-end relative overflow-hidden">
                  <p className="absolute top-4 left-4 text-sm font-semibold text-white">Revenue Analytics</p>
                  <div className="flex items-end space-x-2 h-24 w-full">
                    {[30, 45, 25, 60, 40, 75, 55, 90, 65, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-electric-blue/20 to-electric-blue rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-sm font-semibold text-white mb-4">Live Orders</p>
                  <div className="space-y-3">
                    {[
                      { id: "#WS-902", status: "Washing", color: "text-blue-400", bg: "bg-blue-400/10" },
                      { id: "#WS-903", status: "Out for Delivery", color: "text-mint-green", bg: "bg-mint-green/10" },
                      { id: "#WS-904", status: "Ready for Pickup", color: "text-yellow-400", bg: "bg-yellow-400/10" },
                    ].map((order, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                        <span className="text-sm text-gray-300">{order.id}</span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${order.color} ${order.bg}`}>{order.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-white text-deep-navy font-bold rounded-full hover:bg-gray-200 transition-colors shadow-lg">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}

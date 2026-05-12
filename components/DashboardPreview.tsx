"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, ShoppingBag, Settings, TrendingUp, Bell } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

export default function DashboardPreview() {
  return (
    <section id="partners" className="py-24 relative bg-[#060a17] overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-soft-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">The Smart Laundry Operating System</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-lg">
              Built for scale. A powerful SaaS dashboard for laundry partners to manage orders, track revenue, and grow their business automatically.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="relative max-w-5xl mx-auto perspective-1000">
          <motion.div 
            whileHover={{ rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden bg-[#0A0F24]/90 backdrop-blur-xl preserve-3d"
          >
            {/* Dashboard Header Mockup */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0D132D]/80">
              <div className="flex items-center space-x-8">
                <div className="font-outfit font-bold text-white flex items-center space-x-2">
                  <span className="w-6 h-6 rounded flex items-center justify-center bg-gradient-to-tr from-electric-blue to-soft-purple shadow-lg shadow-electric-blue/20">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>WAshIT Partner</span>
                </div>
                <div className="hidden md:flex space-x-6 text-sm text-gray-400">
                  <span className="text-white relative font-medium">
                    Dashboard
                    <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-electric-blue rounded-t-md"></span>
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">Orders</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Customers</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Analytics</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative cursor-pointer group">
                  <Bell className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#0D132D]"></span>
                </div>
                <div className="w-8 h-8 rounded-full bg-electric-blue/20 border border-electric-blue/30 cursor-pointer hover:border-electric-blue transition-colors"></div>
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
                  <div key={i} className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm transition-all cursor-pointer ${item.active ? 'bg-electric-blue/10 text-electric-blue font-semibold border border-electric-blue/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}>
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
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors shadow-lg cursor-pointer"
                    >
                      <p className="text-xs text-gray-400 mb-2">{stat.label}</p>
                      <div className="flex items-end justify-between">
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <span className="text-xs font-semibold text-mint-green bg-mint-green/10 px-2 py-1 rounded-md border border-mint-green/20">{stat.trend}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart & Live Orders */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 h-56 flex flex-col justify-end relative overflow-hidden group cursor-pointer hover:border-white/10 transition-colors">
                    <p className="absolute top-5 left-5 text-sm font-semibold text-white">Revenue Analytics</p>
                    <div className="flex items-end space-x-2 h-32 w-full mt-8">
                      {[30, 45, 25, 60, 40, 75, 55, 90, 65, 100].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="flex-1 bg-gradient-to-t from-electric-blue/20 to-electric-blue rounded-t-sm group-hover:from-electric-blue/40 group-hover:to-neon-cyan transition-colors" 
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 cursor-pointer hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center mb-5">
                      <p className="text-sm font-semibold text-white">Live Orders</p>
                      <span className="text-xs text-electric-blue hover:text-neon-cyan transition-colors">View All</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { id: "#WS-902", status: "Washing", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
                        { id: "#WS-903", status: "Out for Delivery", color: "text-mint-green", bg: "bg-mint-green/10", border: "border-mint-green/20" },
                        { id: "#WS-904", status: "Ready for Pickup", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
                      ].map((order, i) => (
                        <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                          <span className="text-sm font-medium text-gray-300">{order.id}</span>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${order.color} ${order.bg} ${order.border}`}>{order.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <MagneticButton className="px-8 py-4 bg-white text-deep-navy font-bold rounded-full hover:bg-gray-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Become a Partner Today
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

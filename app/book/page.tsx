"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MapPin, Calendar, CreditCard, ChevronRight, Sparkles, Shirt, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import MagneticButton from '@/components/MagneticButton';
import CustomCursor from '@/components/CustomCursor';

export default function BookPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');

  const services = [
    { id: 'daily', name: 'Daily Wash & Fold', price: '₹99/kg', desc: 'Everyday clothes, fast turnaround.' },
    { id: 'premium', name: 'Premium Dry Cleaning', price: '₹499/pc', desc: 'Designer wear, suits, and dresses.' },
    { id: 'sneaker', name: 'Sneaker Spa', price: '₹299/pair', desc: 'Deep cleaning for luxury sneakers.' }
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => step > 1 ? setStep(step - 1) : router.push('/dashboard');

  const handleCheckout = () => {
    // Simulate payment gateway loading
    setStep(4);
    setTimeout(() => {
      router.push('/dashboard');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#060a17] font-inter text-white flex flex-col items-center">
      <CustomCursor />
      
      {/* Header */}
      <header className="w-full h-20 flex items-center px-6 lg:px-12 border-b border-white/5 bg-[#0a0f24] sticky top-0 z-50">
        <button onClick={handleBack} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
        <div className="mx-auto flex items-center space-x-2">
          <div className="w-6 h-6 rounded bg-gradient-to-tr from-electric-blue to-soft-purple flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="font-outfit font-bold text-lg hidden sm:block">Book Service</span>
        </div>
        <div className="w-16"></div> {/* Spacer */}
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-3xl px-6 mt-8">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -z-10 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-neon-cyan -z-10 -translate-y-1/2 transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
          
          {[1, 2, 3].map((num) => (
            <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${step >= num ? 'bg-neon-cyan text-deep-navy shadow-[0_0_15px_#00F0FF]' : 'bg-[#1a2242] text-gray-500'}`}>
              {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl px-6 py-12">
        <AnimatePresence mode="wait">
          
          {/* Step 1: Service */}
          {step === 1 && (
            <motion.div key="step-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-3xl font-outfit font-bold mb-2">What do you need washed?</h2>
              <p className="text-gray-400 mb-8">Select a service to proceed with booking.</p>

              <div className="space-y-4">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between group ${selectedService === service.id ? 'border-electric-blue bg-electric-blue/10 shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10'}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedService === service.id ? 'bg-electric-blue text-white' : 'bg-white/10 text-gray-400 group-hover:text-white'}`}>
                        <Shirt className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{service.name}</h4>
                        <p className="text-sm text-gray-400">{service.desc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-mint-green">{service.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <MagneticButton 
                disabled={!selectedService}
                onClick={handleNext}
                className="w-full mt-8 py-4 bg-white text-deep-navy font-bold rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50 transition-all hover:bg-gray-100"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </MagneticButton>
            </motion.div>
          )}

          {/* Step 2: Address & Time */}
          {step === 2 && (
            <motion.div key="step-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-3xl font-outfit font-bold mb-2">Pickup Details</h2>
              <p className="text-gray-400 mb-8">Where and when should our rider arrive?</p>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Pickup Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <textarea 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter full address..."
                      className="w-full h-32 bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Select Pickup Date</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Today', 'Tomorrow', 'Day After'].map((d) => (
                      <button 
                        key={d}
                        onClick={() => setDate(d)}
                        className={`py-3 px-2 rounded-xl text-sm font-medium transition-colors border ${date === d ? 'bg-electric-blue text-white border-electric-blue' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <MagneticButton 
                disabled={!address || !date}
                onClick={handleNext}
                className="w-full mt-8 py-4 bg-white text-deep-navy font-bold rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50 transition-all hover:bg-gray-100"
              >
                <span>Proceed to Payment</span>
                <ChevronRight className="w-5 h-5" />
              </MagneticButton>
            </motion.div>
          )}

          {/* Step 3: Checkout */}
          {step === 3 && (
            <motion.div key="step-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-3xl font-outfit font-bold mb-2">Order Summary</h2>
              <p className="text-gray-400 mb-8">Review your details and pay securely.</p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
                  <div>
                    <h4 className="font-bold text-white text-lg">{services.find(s => s.id === selectedService)?.name}</h4>
                    <p className="text-sm text-gray-400">Pickup: {date}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Shirt className="w-6 h-6 text-neon-cyan" />
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Service Fee (Est.)</span>
                    <span className="text-white">₹399.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">AI Assessment Fee</span>
                    <span className="text-mint-green font-medium">FREE</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-white/10">
                  <span className="font-bold text-white">Total Estimation</span>
                  <span className="text-3xl font-outfit font-bold text-electric-blue">₹399</span>
                </div>
              </div>

              <MagneticButton 
                onClick={handleCheckout}
                className="w-full py-4 bg-gradient-to-r from-electric-blue to-soft-purple text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <CreditCard className="w-5 h-5" />
                <span>Pay Securely</span>
              </MagneticButton>
              <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 mr-1" />
                Secured by Razorpay. Final amount will be adjusted after AI scan.
              </p>
            </motion.div>
          )}

          {/* Success Screen */}
          {step === 4 && (
            <motion.div key="step-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-24 h-24 bg-mint-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-mint-green" />
              </div>
              <h2 className="text-3xl font-outfit font-bold mb-4">Payment Successful!</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">Your order #WS-9842 has been placed. A rider will be assigned shortly.</p>
              
              <div className="w-16 h-16 border-4 border-white/10 border-t-neon-cyan rounded-full animate-spin mx-auto"></div>
              <p className="text-sm text-gray-500 mt-6">Redirecting to Dashboard...</p>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Phone, ArrowRight, Sparkles, User, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import Link from 'next/link';
import MagneticButton from '@/components/MagneticButton';
import CustomCursor from '@/components/CustomCursor';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [authStep, setAuthStep] = useState<'initial' | 'otp' | 'details'>('initial');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setLoading(true);
    // Simulate sending OTP
    setTimeout(() => {
      setLoading(false);
      setAuthStep('otp');
    }, 1500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) return;
    setLoading(true);
    // Simulate verifying OTP and logging in
    setTimeout(() => {
      setLoading(false);
      if (isLogin) {
        login({
          id: 'usr_123',
          name: 'Rahul Kumar',
          email: 'rahul@example.com',
          role: 'customer',
          walletBalance: 1250,
        });
        router.push('/dashboard');
      } else {
        setAuthStep('details');
      }
    }, 1500);
  };

  const handleCompleteSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate completing signup
    setTimeout(() => {
      setLoading(false);
      login({
        id: 'usr_123',
        name: 'Rahul Kumar',
        email: 'rahul@example.com',
        role: 'customer',
        walletBalance: 0,
      });
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#060a17] flex relative overflow-hidden font-inter text-white">
      <CustomCursor />
      
      {/* Abstract Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electric-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-soft-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 relative z-10">
        
        <Link href="/" className="absolute top-8 left-6 lg:left-20 flex items-center space-x-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-tr from-electric-blue to-soft-purple">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-outfit font-bold tracking-tight text-white">
            WAsh<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">IT</span>
          </span>
        </Link>

        <div className="max-w-md w-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-outfit font-bold mb-2">
              {authStep === 'initial' ? (isLogin ? 'Welcome back' : 'Create an account') : ''}
              {authStep === 'otp' ? 'Verify your number' : ''}
              {authStep === 'details' ? 'Complete profile' : ''}
            </h1>
            <p className="text-gray-400 text-sm">
              {authStep === 'initial' ? 'Enter your mobile number to continue.' : ''}
              {authStep === 'otp' ? `We sent a code to +91 ${phone}` : ''}
              {authStep === 'details' ? 'Just a few more details to get started.' : ''}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            
            {/* Step 1: Phone Input */}
            {authStep === 'initial' && (
              <motion.form 
                key="step-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSendOtp}
                className="space-y-6"
              >
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Mobile Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-400 font-medium">+91</span>
                    </div>
                    <input 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="9876543210"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-14 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all font-medium"
                      required
                    />
                  </div>
                </div>
                
                <MagneticButton 
                  type="submit" 
                  disabled={phone.length < 10 || loading}
                  className="w-full py-4 bg-white text-deep-navy font-bold rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50 hover:bg-gray-100 transition-all"
                >
                  <span>{loading ? 'Sending OTP...' : 'Continue'}</span>
                  {!loading && <ArrowRight className="w-5 h-5" />}
                </MagneticButton>

                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-wider">Or continue with</span>
                  <div className="flex-grow border-t border-white/10"></div>
                </div>

                <button type="button" className="w-full py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl flex items-center justify-center space-x-3 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="font-medium">Google</span>
                </button>
              </motion.form>
            )}

            {/* Step 2: OTP Verification */}
            {authStep === 'otp' && (
              <motion.form 
                key="step-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleVerifyOtp}
                className="space-y-6"
              >
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">4-Digit OTP</label>
                  <input 
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all font-medium tracking-[1em] text-center text-xl"
                    required
                  />
                </div>
                
                <MagneticButton 
                  type="submit" 
                  disabled={otp.length < 4 || loading}
                  className="w-full py-4 bg-white text-deep-navy font-bold rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50 hover:bg-gray-100 transition-all"
                >
                  <span>{loading ? 'Verifying...' : 'Verify OTP'}</span>
                  {!loading && <ShieldCheck className="w-5 h-5" />}
                </MagneticButton>
                
                <p className="text-center text-sm text-gray-400 mt-4">
                  Didn&apos;t receive the code? <button type="button" className="text-neon-cyan hover:underline" onClick={() => { setAuthStep('initial'); setOtp(''); }}>Resend</button>
                </p>
              </motion.form>
            )}

            {/* Step 3: Registration Details (If Signup) */}
            {authStep === 'details' && (
              <motion.form 
                key="step-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleCompleteSignup}
                className="space-y-4"
              >
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all font-medium"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Email Address (Optional)</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all font-medium"
                    />
                  </div>
                </div>
                
                <MagneticButton 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 mt-6 bg-white text-deep-navy font-bold rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50 hover:bg-gray-100 transition-all"
                >
                  <span>{loading ? 'Creating Account...' : 'Complete Signup'}</span>
                  {!loading && <ArrowRight className="w-5 h-5" />}
                </MagneticButton>
              </motion.form>
            )}

          </AnimatePresence>

          {authStep === 'initial' && (
            <div className="mt-8 text-center text-sm text-gray-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-white font-semibold hover:text-neon-cyan transition-colors"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Visual Side - Hidden on Mobile */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-[#0D132D] to-[#0A0F24] border-l border-white/5 items-center justify-center p-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="relative z-10 max-w-lg text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 mx-auto bg-gradient-to-tr from-electric-blue to-soft-purple rounded-full blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          ></motion.div>
          
          <h2 className="text-4xl font-outfit font-bold mb-6 leading-tight">
            Join the smart <br/><span className="text-neon-cyan">laundry revolution</span>.
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Book pickups in seconds, track your garments live, and experience premium AI-assessed fabric care like never before.
          </p>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center space-x-4 max-w-xs mx-auto shadow-2xl"
          >
            <div className="w-12 h-12 bg-mint-green/20 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-mint-green" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Secure & Verified</p>
              <p className="text-gray-400 text-xs">Bank-level OTP security</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

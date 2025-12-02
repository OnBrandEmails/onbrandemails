import React from 'react';
import { ArrowRight, TrendingUp, Cpu, Mail, BarChart2, DollarSign, PieChart, Menu, Search, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pb-0">
      {/* Background Effects */}
      <div className="absolute top-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-accent/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-300/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy */}
        <div className="text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-dark/10 bg-white/50 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-brand-dark text-xs font-bold tracking-widest uppercase">Official Klaviyo Partners</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-brand-dark"
          >
            We Generate <span className="text-brand-accent">40-50%</span> Of Your Store's Revenue Through Email.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
          >
            We don't "do tasks." We print money. If you're a Shopify brand doing $100k/mo, we are the brain that scales your retention.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#audit" className="group relative px-8 py-4 bg-brand-accent text-white font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(145,185,67,0.3)] flex justify-center items-center">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get A Free Strategy Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#results" className="px-8 py-4 bg-transparent border border-brand-dark/20 text-brand-dark font-medium text-lg rounded-lg hover:bg-brand-dark/5 transition-all flex justify-center items-center">
              See The Results
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12"
          >
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-3xl font-display font-bold text-brand-dark">$45M+</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">Revenue Generated</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-3xl font-display font-bold text-brand-dark">42%</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">Avg. Revenue Lift</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Blueprint Animation */}
        <div className="h-[400px] lg:h-[500px] flex items-center justify-center perspective-1000 relative mt-8 lg:mt-0">
          <motion.div 
             animate={{ 
               rotateY: [0, -15, 0],
               rotateX: [5, 0, 5],
               y: [0, -20, 0]
             }}
             transition={{ 
               duration: 8, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
             className="relative preserve-3d w-[300px] h-[450px] scale-[0.70] md:scale-[0.85] lg:scale-100"
          >
            {/* Backplane (Dashboard System) - Upgraded Design */}
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-3xl shadow-2xl transform translate-z-[-60px] flex overflow-hidden opacity-100 scale-105">
                {/* Fake Sidebar */}
                <div className="w-16 h-full bg-gray-50 border-r border-gray-100 flex flex-col items-center py-4 gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <Mail size={16} />
                  </div>
                  <div className="w-6 h-6 rounded bg-gray-200"></div>
                  <div className="w-6 h-6 rounded bg-gray-200"></div>
                  <div className="w-6 h-6 rounded bg-gray-200"></div>
                  <div className="mt-auto w-6 h-6 rounded-full bg-gray-300"></div>
                </div>
                {/* Dashboard Main Area */}
                <div className="flex-1 flex flex-col">
                  {/* Fake Header */}
                  <div className="h-12 border-b border-gray-100 flex items-center justify-between px-4">
                    <div className="w-24 h-3 bg-gray-100 rounded"></div>
                    <div className="flex gap-2">
                      <Search size={14} className="text-gray-300" />
                      <Bell size={14} className="text-gray-300" />
                    </div>
                  </div>
                  {/* Grid Content */}
                  <div className="p-4 flex-1 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50">
                    <div className="w-full h-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                  </div>
                </div>
            </div>

            {/* Layer 0: Data Chart Background */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl shadow-lg transform translate-z-[-30px] p-6 flex items-end justify-between gap-2 opacity-95"
            >
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <motion.div 
                        key={i}
                        animate={{ height: [`${h}%`, `${h - 10}%`, `${h}%`] }}
                        transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
                        className="w-full bg-brand-accent/20 rounded-t-sm"
                    ></motion.div>
                ))}
            </motion.div>

            {/* Layer 1: Structure Wireframe (Main Email) */}
            <motion.div 
              className="absolute inset-0 bg-white/95 backdrop-blur-md border border-brand-accent/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform translate-z-[0px] p-6 flex flex-col gap-4"
              style={{ transform: "translateZ(0px)" }}
            >
               {/* Skeleton Elements */}
               <div className="flex justify-between items-center mb-2">
                   <div className="w-1/3 h-3 bg-gray-200 rounded-md"></div>
                   <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark/50">
                       <Mail size={14} />
                   </div>
               </div>
               <div className="w-full h-28 bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                  <Cpu className="text-gray-300 relative z-10" />
               </div>
               <div className="space-y-2 my-2">
                 <div className="w-full h-2 bg-gray-100 rounded animate-pulse"></div>
                 <div className="w-full h-2 bg-gray-100 rounded animate-pulse delay-75"></div>
                 <div className="w-4/5 h-2 bg-gray-100 rounded animate-pulse delay-150"></div>
               </div>
               <div className="mt-auto w-full">
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-1 uppercase">
                      <span>CTR</span>
                      <span className="text-brand-accent">4.2%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mb-3">
                      <motion.div 
                        animate={{ width: ["0%", "70%"] }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-brand-accent"
                      ></motion.div>
                  </div>
                  <div className="w-full h-10 bg-brand-dark rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-sm tracking-wide">
                      SHOP COLLECTION
                  </div>
               </div>
            </motion.div>

            {/* Layer 2: Floating Analysis Blocks (Exploded View) */}
            <motion.div 
               animate={{ transform: "translateZ(30px) translateY(-20px) translateX(10px)" }}
               className="absolute top-10 -right-2 md:top-12 md:-right-16 bg-white text-brand-dark p-3 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.1)] text-xs font-mono border-l-4 border-brand-accent w-40 md:w-44 z-20"
            >
              <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] text-gray-400 uppercase">Live Revenue</span>
              </div>
              <div className="text-xl font-bold font-display">+$12,450</div>
              <div className="text-[10px] text-gray-400">Last 30 days from this flow</div>
            </motion.div>

            <motion.div 
               animate={{ transform: "translateZ(50px) translateY(30px) translateX(-10px)" }}
               className="absolute bottom-20 -left-2 md:bottom-24 md:-left-16 bg-brand-dark text-white p-3 rounded-lg shadow-xl text-xs font-mono border-l-4 border-blue-500 w-36 md:w-40 z-20"
            >
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] text-gray-400 uppercase flex items-center gap-1"><PieChart size={10}/> Segment</span>
               </div>
               <div className="font-bold text-sm md:text-base">VIP Purchasers</div>
               <div className="text-[10px] text-gray-400 mt-1">Matched 4,203 profiles</div>
            </motion.div>

            <motion.div 
               animate={{ transform: "translateZ(70px)" }}
               className="absolute -bottom-4 right-0 md:-right-4 bg-brand-accent text-white px-5 py-3 rounded-xl shadow-lg font-bold text-lg flex items-center gap-2 z-30"
            >
               <div className="bg-white/20 p-1 rounded">
                <DollarSign size={20} />
               </div>
               <div>
                   <span className="block text-[10px] uppercase opacity-80 leading-none mb-1">Total LTV</span>
                   $210.60
               </div>
            </motion.div>

            {/* Floating Particles */}
            <motion.div animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-10 left-10 w-4 h-4 bg-blue-400 rounded-full blur-sm"></motion.div>
            <motion.div animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-10 -right-10 w-6 h-6 bg-brand-accent rounded-full blur-md"></motion.div>
            <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/2 -left-20 w-2 h-2 bg-brand-dark rounded-full"></motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
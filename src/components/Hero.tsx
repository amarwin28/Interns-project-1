import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Animated Tech Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

        {/* Ambient Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>COLLEGE DEVELOPMENT TEAM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
          >
            BUILDING IDEAS.{' '}
            <span className="gradient-text block sm:inline">CREATING IMPACT.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We are a team of passionate engineering students building modern web applications and technology-driven solutions.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => handleScroll('team')}
              className="btn-primary w-full sm:w-auto"
            >
              <Users className="w-5 h-5" />
              <span>Meet Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScroll('contact')}
              className="btn-secondary w-full sm:w-auto"
            >
              <span>Contact Us</span>
            </button>
          </motion.div>

          {/* Visual Stat Counters Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-card border border-white/10"
          >
            <div className="flex flex-col items-center p-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-indigo-400">5</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Core Developers</span>
            </div>
            <div className="flex flex-col items-center p-3 border-l border-white/10">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400">7+</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Tech Specialties</span>
            </div>
            <div className="flex flex-col items-center p-3 border-l border-white/10">
              <span className="text-3xl sm:text-4xl font-extrabold text-purple-400">100%</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Student Collaborative</span>
            </div>
            <div className="flex flex-col items-center p-3 border-l border-white/10">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400">Full Stack</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">End-to-End Ready</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-400 cursor-pointer transition-colors" onClick={() => handleScroll('about')}>
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

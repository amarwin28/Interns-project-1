import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, Sparkles } from 'lucide-react';
import { teamObjectivePoints } from '../data/teamData';

export const Objective: React.FC = () => {
  return (
    <section id="objective" className="section relative bg-white/[0.01]">
      <div className="container">
        <div className="glass-card p-8 md:p-12 border border-indigo-500/20 relative overflow-hidden">
          {/* Subtle Accent Radial Backlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Main Statement Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="section-tag mb-4">
                <Target className="w-4 h-4" />
                <span>Our Core Objective</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
                Transforming Ideas into <span className="gradient-text">Reliable Digital Reality</span>
              </h2>

              <blockquote className="p-4 rounded-2xl bg-indigo-950/50 border border-indigo-500/30 text-indigo-200 text-lg font-medium leading-relaxed mb-6">
                "Our objective is to transform ideas into reliable, scalable, and user-focused digital solutions."
              </blockquote>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We believe in writing code, maintaining modern architecture standards, and delivering software that solves real-world engineering challenges.
              </p>

              <div className="flex items-center gap-3 text-cyan-400 font-semibold text-sm">
                <Sparkles className="w-5 h-5" />
                <span>Built for Performance & Scale</span>
              </div>
            </motion.div>

            {/* Right Pillars List Grid Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teamObjectivePoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all flex items-start gap-3 group"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

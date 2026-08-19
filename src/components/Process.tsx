import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Lightbulb, Palette, Code2, ShieldCheck, Rocket } from 'lucide-react';
import { processSteps } from '../data/teamData';

const stepIcons = [Lightbulb, Palette, Code2, ShieldCheck, Rocket];

export const Process: React.FC = () => {
  return (
    <section id="process" className="section relative">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mx-auto"
          >
            <GitCommit className="w-4 h-4" />
            <span>Development Workflow</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            How We Build Software
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            A disciplined 5-step lifecycle ensuring clear requirements, modern architecture, and reliable execution.
          </motion.p>
        </div>

        {/* Desktop Connected Steps & Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-cyan-500/40 to-emerald-500/20 -translate-y-8 z-0" />

          {processSteps.map((item, index) => {
            const IconComponent = stepIcons[index] || Code2;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-5 border border-white/10 hover:border-indigo-500/40 group flex flex-col justify-between relative z-10"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Details Badges */}
                <div className="pt-3 border-t border-white/10 flex flex-col gap-1">
                  {item.details.map((detail, dIdx) => (
                    <span key={dIdx} className="text-[11px] text-slate-400 flex items-center gap-1.5 font-medium">
                      <span className="w-1 h-1 rounded-full bg-indigo-400" />
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

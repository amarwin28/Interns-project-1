import React from 'react';
import { motion } from 'framer-motion';
import { Users2, Code, ShieldCheck, Cpu, Rocket, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Code,
    title: 'Working on frontend',
    desc: 'Crafting pixel-perfect, responsive client applications with React and TypeScript.'
  },
  {
    icon: Cpu,
    title: 'Backend & Systems Architecture',
    desc: 'Designing scalable Node.js and FastAPI REST services for high availability.'
  },
  {
    icon: ShieldCheck,
    title: 'Testing & Quality Assurance',
    desc: 'Validating code reliability, edge cases, and automated system compliance.'
  },
  {
    icon: Rocket,
    title: 'Collaborative Execution',
    desc: 'Working seamlessly with my Team.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="section-tag">
              <Users2 className="w-4 h-4" />
              <span>About Our Team</span>
            </div>

            <h2 className="section-title">
              Driven by Passion, Built for Innovation
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We are a collaborative team of engineering students with diverse technical skills across frontend development, backend engineering, databases, testing, project management, and AI-powered applications.
            </p>

            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Working together as a unified development unit, we design, develop, test, and deliver modern software solutions. Each member brings specialized expertise to transform complex ideas into polished digital realities.
            </p>

            {/* Quick Stat Pill */}
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Engineered with Precision</h4>
                <p className="text-slate-400 text-xs mt-0.5">Combining academic excellence with industry-standard development workflows.</p>
              </div>
            </div>
          </motion.div>

          {/* Graphic / Grid Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 glass-card border border-white/10 hover:border-indigo-500/40 group transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

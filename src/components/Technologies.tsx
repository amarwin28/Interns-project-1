import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  FileCode2, 
  Zap, 
  Code, 
  Server, 
  Layers, 
  Rocket, 
  Terminal, 
  Database as DbIcon, 
  GitBranch, 
  Cpu
} from 'lucide-react';
import { technologiesData } from '../data/teamData';
import { GithubIcon } from './SocialIcons';

const techIconMap: Record<string, React.ElementType> = {
  Atom,
  FileCode2,
  Zap,
  Code,
  Server,
  Layers,
  Rocket,
  Terminal,
  Database: DbIcon,
  GitBranch,
  Github: GithubIcon,
};

const categories = ['All', 'Frontend', 'Backend & API', 'Database', 'Tools & Version Control'] as const;

export const Technologies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredTech = activeCategory === 'All'
    ? technologiesData
    : technologiesData.filter(item => item.category === activeCategory);

  return (
    <section id="technologies" className="section relative bg-white/[0.01]">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mx-auto"
          >
            <Cpu className="w-4 h-4" />
            <span>Technologies We Use</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Modern Engineering Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Carefully selected tools and production frameworks powering our frontend, API layers, databases, and DevOps pipelines.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => {
            const IconComponent = techIconMap[tech.iconName] || Code;
            return (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card p-5 border border-white/10 hover:border-indigo-500/40 group flex items-start gap-4 transition-all"
              >
                {/* Tech Icon */}
                <div 
                  className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{ color: tech.badgeColor }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Tech Details */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    {tech.category}
                  </span>
                  <p className="text-slate-400 text-xs leading-snug line-clamp-2">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

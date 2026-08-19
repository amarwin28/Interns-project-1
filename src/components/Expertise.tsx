import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Server, 
  Database, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Kanban,
  Wrench
} from 'lucide-react';
import { expertiseData } from '../data/teamData';

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Cpu,
  Sparkles,
  CheckCircle2,
  Kanban,
};

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="section relative">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mx-auto"
          >
            <Wrench className="w-4 h-4" />
            <span>Our Roles & Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            End-to-End Technical Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            From conceptual wireframes to high-throughput backends and AI microservices, our team handles every aspect of software engineering.
          </motion.p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Monitor;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card p-6 border border-white/10 hover:border-cyan-500/40 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 via-cyan-500/20 to-purple-500/10 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                    >
                      {tag}
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

import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import { TeamCard } from './TeamCard';

export const Team: React.FC = () => {
  return (
    <section id="team" className="section relative bg-white/[0.01]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mx-auto"
          >
            <Users className="w-4 h-4" />
            <span>Meet Our Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            The Engineers Behind the Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            A balanced 5-member engineering team combining frontend mastery, backend architecture, quality assurance discipline, and intelligent database design.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

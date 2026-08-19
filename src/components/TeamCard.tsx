import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Layout, Code, ShieldCheck, Server, Database, GraduationCap, Building2 } from 'lucide-react';
import type { TeamMember } from '../types/team';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const getRoleIcon = (role: string) => {
  if (role.includes('Frontend')) return Layout;
  if (role.includes('Backend')) return Server;
  if (role.includes('Database') || role.includes('FastAPI')) return Database;
  if (role.includes('Project Manager') || role.includes('Tester')) return ShieldCheck;
  return Code;
};

export const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const RoleIcon = getRoleIcon(member.role);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-indigo-500/50 group relative overflow-hidden"
    >
      {/* Top Accent Gradient Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity" 
        style={{ background: member.avatarGrad }}
      />

      <div>
        {/* Header Avatar Badge & Role */}
        <div className="flex items-start justify-between gap-4 mb-5">
          {/* Avatar Graphic Badge */}
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg border border-white/20 group-hover:scale-105 transition-transform"
              style={{ background: member.avatarGrad }}
            >
              {member.initials}
            </div>
            {/* Small Floating Role Icon */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-lg bg-[#0b0f19] border border-white/20 flex items-center justify-center text-indigo-400 shadow">
              <RoleIcon className="w-4 h-4" />
            </div>
          </div>

          {/* Academic Year Tag */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>{member.year}</span>
          </div>
        </div>

        {/* Member Name */}
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
          {member.name}
        </h3>

        {/* Role Pill */}
        <div className="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold text-xs mb-3">
          {member.role}
        </div>

        {/* Department */}
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
          <Building2 className="w-3.5 h-3.5 text-slate-500" />
          <span>{member.department}</span>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {member.description}
        </p>
      </div>

      <div>
        {/* Skills List */}
        <div className="mb-6">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
            Technical Stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {member.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono group-hover:border-indigo-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Connect:</span>
          <div className="flex items-center gap-2">
            <a
              href={member.socials.github}
              onClick={(e) => member.socials.github === '#' && e.preventDefault()}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
              title="GitHub Profile (Placeholder)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={member.socials.linkedin}
              onClick={(e) => member.socials.linkedin === '#' && e.preventDefault()}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 border border-white/10 transition-colors"
              title="LinkedIn Profile (Placeholder)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${member.socials.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-indigo-400 border border-white/10 transition-colors"
              title={`Email ${member.name}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

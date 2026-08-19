import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Objective', href: '#objective' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#05070e] py-12 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#070a12] rounded-[7px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="font-extrabold text-base tracking-tight text-white">
              SYNAPSE<span className="text-indigo-400">LABS</span>
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium text-slate-400 hover:text-white transition-colors text-decoration-none"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-3">
          <p>© 2026 SYNAPSE LABS. All Rights Reserved.</p>
          <p className="font-mono">Engineered with React + TypeScript + Vite</p>
        </div>
      </div>
    </footer>
  );
};

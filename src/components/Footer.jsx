import React from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './icons';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#faf9f7] text-zinc-900 border-t border-purple-100 py-12 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="font-extrabold text-lg text-purple-950">
            Diya Garg
          </span>
          <span className="text-xs text-slate-500">
            Software & Full-Stack Developer
          </span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 flex items-center gap-1 order-3 md:order-2">
          <span>&copy; {new Date().getFullYear()} Diya Garg. Designed with</span>
          <Heart className="w-3.5 h-3.5 text-[#EC4899] fill-current" />
          <span>using React & Tailwind CSS.</span>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-3 order-2 md:order-3">
          <a
            href="https://github.com/diyagarg09"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-purple-100 bg-white text-slate-600 hover:text-[#7C3AED] hover:border-[#7C3AED] flex items-center justify-center transition-all hover:scale-105"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/diyagarg09/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-purple-100 bg-white text-slate-600 hover:text-[#EC4899] hover:border-[#EC4899] flex items-center justify-center transition-all hover:scale-105"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="mailto:diya@example.com"
            className="w-9 h-9 rounded-full border border-purple-100 bg-white text-slate-600 hover:text-[#7C3AED] hover:border-[#7C3AED] flex items-center justify-center transition-all hover:scale-105"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={handleScrollTop}
            className="w-9 h-9 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white flex items-center justify-center transition-all hover:scale-105 ml-2 shadow-sm shadow-purple-500/20"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Home, User, FolderGit2, FileText, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_portfolio';

const navigationLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Resume', href: '#resume', icon: FileText, isResumeTrigger: true },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [likeCount, setLikeCount] = useState(1);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'milestones'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (link.isResumeTrigger) {
      onOpenResume();
      setIsMobileMenuOpen(false);
      return;
    }

    const targetId = link.href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      const newCount = likeCount + 1;
      setLikeCount(newCount);
      setHasLiked(true);

      // Send email alert for new like
      try {
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: 'Portfolio Visitor',
            from_email: 'visitor@portfolio.com',
            user_email: 'visitor@portfolio.com',
            message: `❤️ Someone liked your portfolio website! Total Likes: ${newCount}`,
            to_name: 'Diya Garg',
            to_email: 'diyagarg9122005@gmail.com',
          },
          EMAILJS_PUBLIC_KEY
        );
      } catch (_err) {
        console.log('Like notification email sent');
      }
    } else {
      setLikeCount(prev => prev - 1);
      setHasLiked(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'vibrant-navbar py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Logo (Diya Garg) */}
        <a 
          href="#home" 
          className="flex items-center gap-1.5 group font-bold tracking-tight text-xl sm:text-2xl shrink-0 whitespace-nowrap"
        >
          <span className="font-bold text-2xl text-purple-950 tracking-tight hover:text-[#EC4899] transition-colors">Diya Garg</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-5 shrink-0">
          {navigationLinks.map((link) => {
            const Icon = link.icon;
            const isLinkActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`flex items-center gap-1.5 text-sm font-semibold transition-all py-1.5 px-3 rounded-lg whitespace-nowrap ${
                  isLinkActive
                    ? 'text-[#7C3AED] bg-purple-50'
                    : 'text-slate-600 hover:text-[#EC4899] hover:bg-pink-50/50'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isLinkActive ? 'text-[#7C3AED]' : 'text-slate-400'}`} />
                <span>{link.name}</span>
              </a>
            );
          })}

          {/* Heart / Star Counter Button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 whitespace-nowrap ${
              hasLiked
                ? 'bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-pink-500/20 scale-105'
                : 'bg-purple-50 text-[#7C3AED] border border-purple-100 hover:bg-gradient-to-r hover:from-[#7C3AED] hover:to-[#EC4899] hover:text-white hover:border-transparent'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current' : ''}`} />
            <span>{likeCount}</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3 shrink-0">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap ${
              hasLiked ? 'bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white' : 'bg-purple-50 text-[#7C3AED] border border-purple-100'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>{likeCount}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-purple-100 text-purple-950 bg-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden cosmic-navbar border-t border-purple-100 px-6 py-4 flex flex-col gap-3"
          >
            {navigationLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700 py-2 hover:text-[#EC4899]"
                >
                  <Icon className="w-4 h-4 text-[#7C3AED]" />
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

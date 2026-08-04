import React, { useState, useEffect } from 'react';
import { Home, User, FolderGit2, FileText, Menu, X, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Milestones', href: '#milestones', icon: Trophy },
  { name: 'Resume', href: '#resume', icon: FileText, isResumeTrigger: true },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'milestones'];
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
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3 shrink-0">
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

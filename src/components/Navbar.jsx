import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Achievements', id: 'milestones' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      let current = '';
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openResume = () => {
    setIsOpen(false);
    onOpenResume();
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-ink/80 backdrop-blur-xl border-b border-line py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-4">
        <a href="#home" className="font-display font-bold text-lg tracking-tight text-fg flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center text-sm font-bold">DG</span>
          <span className="hidden sm:inline">Diya Garg</span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === l.id ? 'text-fg bg-surface-2' : 'text-muted hover:text-fg'
              }`}
            >
              {l.name}
            </a>
          ))}
          <button onClick={openResume} className="btn-primary ml-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition">
            <FileText className="w-4 h-4" /> Resume
          </button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="md:hidden btn-ghost p-2 rounded-lg"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-b border-line"
            aria-label="Mobile"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.id} href={`#${l.id}`} onClick={() => setIsOpen(false)} className="py-2.5 text-sm font-medium text-muted hover:text-fg">
                  {l.name}
                </a>
              ))}
              <button onClick={openResume} className="btn-primary mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold">
                <FileText className="w-4 h-4" /> Resume
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

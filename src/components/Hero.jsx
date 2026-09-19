import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Code, ArrowRight, Cpu, Layers } from 'lucide-react';

const roles = [
  'Software Developer',
  'Full-Stack Developer',
];

export default function Hero({ _onOpenResume }) {
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Mouse position interactive 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const handleType = () => {
      const fullRole = roles[roleIndex];

      if (isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        setTypingSpeed(110);
      }

      if (!isDeleting && currentText === fullRole) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(250);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:flex lg:items-center lg:justify-center overflow-hidden pt-32 pb-24 px-6 vibrant-mesh-bg perspective-1000"
    >
      {/* Dynamic Glowing Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[8%] left-[8%] w-[460px] h-[460px] bg-purple-500/20 rounded-full filter blur-[120px] animate-orb-1" />
        <div className="absolute bottom-[5%] right-[5%] w-[520px] h-[520px] bg-pink-500/20 rounded-full filter blur-[140px] animate-orb-2" />
        <div className="absolute top-[35%] right-[25%] w-[380px] h-[380px] bg-indigo-500/15 rounded-full filter blur-[110px] animate-orb-1" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Floating Content & Text */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left animate-float-slow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ rotateX, rotateY }}
        >
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold bg-pink-50 text-pink-800 border border-pink-200 shadow-sm transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-pink-200">
              <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              Banasthali Vidyapith · CS & AI
            </span>
            <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold bg-purple-50 text-purple-800 border border-purple-200 shadow-sm transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-purple-200">
              <Code className="w-3.5 h-3.5 text-purple-500" />
              CGPA: 8.45 / 10
            </span>
          </div>

          {/* Sub-greeting */}
          <h2 className="text-lg sm:text-xl font-extrabold tracking-wider text-purple-900/70 uppercase mb-3 flex items-center gap-2">
            <span>Welcome to my universe</span> <span className="animate-wave text-2xl">👋</span>
          </h2>

          {/* Display Name */}
          <div className="relative mb-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase font-sans">
              <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(236,72,153,0.3)]">
                DIYA
              </span>{' '}
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(139,92,246,0.35)] ml-1 sm:ml-3">
                GARG
              </span>
            </h1>
          </div>

          {/* Typewriter Sub-headline */}
          <div className="text-2xl sm:text-4xl font-bold min-h-[54px] flex items-center mb-6">
            <span className="gradient-text-vibrant font-black tracking-tight">
              {currentText}
            </span>
            <span className="typewriter-cursor" />
          </div>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans mb-8 font-medium">
            I'm a B.Tech student in Computer Science & Artificial Intelligence at Banasthali Vidyapith. I love building smart applications, machine learning models, and full-stack projects—like healthcare bots and fraud detection systems—to solve real problems.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-black tracking-wider uppercase text-white shimmer-button shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Levitating Developer Image & Floating 3D Skill Cards */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Levitating Image Container */}
          <div className="relative w-full max-w-[440px] aspect-square rounded-3xl p-3.5 border-2 border-purple-200/90 bg-white/80 backdrop-blur-2xl shadow-2xl shadow-purple-500/20 animate-float-medium tilt-card group">
            {/* Soft Glowing Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/15 via-pink-500/10 to-transparent pointer-events-none rounded-3xl" />
            
            <img
              src="/developer_hero.jpg"
              alt="Developer working at desk vector"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />

            {/* Orbiting Floating Badge 1: ML & Systems */}
            <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-xl border border-purple-200 p-3 rounded-2xl shadow-xl animate-float-fast flex items-center gap-2.5 hover:scale-110 transition-transform">
              <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                <Cpu className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Focus</p>
                <p className="text-xs font-black text-slate-800">ML & Systems</p>
              </div>
            </div>

            {/* Orbiting Floating Badge 2: Full-Stack */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-xl border border-pink-200 p-3 rounded-2xl shadow-xl animate-float-slow flex items-center gap-2.5 hover:scale-110 transition-transform">
              <div className="p-2 rounded-xl bg-pink-100 text-pink-600">
                <Layers className="w-5 h-5 text-pink-600" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Stack</p>
                <p className="text-xs font-black text-slate-800">React & Python</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

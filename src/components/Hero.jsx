import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Code, ArrowRight, Cpu, Layers, FileText } from 'lucide-react';

const roles = [
  'Software & AI Developer',
  'Full-Stack Developer',
  'Machine Learning Engineer',
];

export default function Hero({ onOpenResume }) {
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Mouse position interactive 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { stiffness: 150, damping: 15 });

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
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 bg-[#faf9f7] perspective-1000"
    >
      {/* Dynamic Glowing Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[520px] h-[520px] bg-purple-500/20 rounded-full filter blur-[140px] animate-orb-1" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[560px] h-[560px] bg-pink-500/20 rounded-full filter blur-[150px] animate-orb-2" />
        <div className="absolute top-[35%] right-[20%] w-[400px] h-[400px] bg-indigo-500/15 rounded-full filter blur-[120px] animate-orb-1" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold bg-pink-50 text-pink-800 border border-pink-200 shadow-sm transition-all hover:scale-105 hover:-translate-y-0.5">
            <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
            Banasthali Vidyapith · CS & AI
          </span>
          <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold bg-purple-50 text-purple-800 border border-purple-200 shadow-sm transition-all hover:scale-105 hover:-translate-y-0.5">
            <Code className="w-3.5 h-3.5 text-purple-500" />
            CGPA: 8.45 / 10
          </span>
        </motion.div>

        {/* ── REFERENCE DESIGN ARTWORK BANNER: DIYA GARG PORTFOLIO ── */}
        <motion.div
          className="relative w-full max-w-5xl my-4 py-6 flex items-center justify-center"
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Looping SVG Vector Ribbon passing around and through the text */}
          <svg
            viewBox="0 0 1000 320"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="45%" stopColor="#EC4899" />
                <stop offset="80%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Ambient Background Ghost Text */}
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[110px] sm:text-[145px] font-black tracking-tighter uppercase fill-none stroke-purple-900/10 stroke-[2]"
              style={{ fontFamily: 'sans-serif' }}
            >
              DIYA GARG
            </text>

            {/* Glowing Looping Path 1 (Behind Text loop) */}
            <path
              d="M -40,190 C 180,310 160,-20 360,90 C 520,180 570,300 680,240 C 780,180 650,0 600,130 C 550,260 760,290 850,190 C 940,90 860,-20 780,110 C 700,240 880,290 1040,180"
              stroke="url(#ribbonGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#ribbonGlow)"
              className="opacity-95"
            />

            {/* Curving Circular Text Path */}
            <path
              id="textCurvePath"
              d="M 60,180 C 220,290 190,-10 370,90 C 530,180 570,290 680,240 C 770,190 660,10 610,130"
              fill="none"
            />

            <text className="text-[12px] font-extrabold uppercase tracking-[0.25em] fill-[#7C3AED]">
              <textPath href="#textCurvePath" startOffset="5%">
                ✦ SOFTWARE & AI DEVELOPER ✦ BANASTHALI VIDYAPITH ✦
              </textPath>
            </text>
          </svg>

          {/* Bold Foreground Title Text: DIYA GARG */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h1 className="text-6xl sm:text-8xl md:text-[110px] font-black tracking-tighter uppercase leading-none font-sans select-none drop-shadow-xl">
              <span className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                DIYA
              </span>{' '}
              <span className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent ml-2 sm:ml-4">
                GARG
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Dynamic Typewriter Sub-headline */}
        <div className="text-xl sm:text-3xl font-bold min-h-[46px] flex items-center justify-center mb-4">
          <span className="gradient-text-vibrant font-black tracking-tight">
            {currentText}
          </span>
          <span className="typewriter-cursor" />
        </div>

        {/* Bio Paragraph */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-sans mb-8 font-medium">
          I'm a B.Tech student in Computer Science & Artificial Intelligence at Banasthali Vidyapith. I build intelligent machine learning systems, full-stack applications, healthcare bots, and AI summarizers.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-black tracking-wider uppercase text-white shimmer-button shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-7 py-4 rounded-full text-xs font-black tracking-wider uppercase text-purple-950 bg-white border border-purple-200 shadow-md hover:border-purple-400 hover:bg-purple-50 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <FileText className="w-4 h-4 text-[#7C3AED]" />
            View Resume
          </button>
        </div>

        {/* Levitating Developer Preview & Floating Skill Cards */}
        <motion.div
          className="w-full max-w-3xl flex justify-center items-center relative mt-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-3 border-2 border-purple-200/90 bg-white/90 backdrop-blur-2xl shadow-2xl shadow-purple-500/20 animate-float-medium tilt-card group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/15 via-pink-500/10 to-transparent pointer-events-none rounded-3xl" />
            
            <img
              src="/developer_hero.jpg"
              alt="Developer working at desk vector"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Badge 1: ML & Systems */}
            <div className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-xl border border-purple-200 p-3 rounded-2xl shadow-xl animate-float-fast flex items-center gap-2.5 hover:scale-110 transition-transform">
              <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                <Cpu className="w-4.5 h-4.5 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Focus</p>
                <p className="text-xs font-black text-slate-800">ML & Systems</p>
              </div>
            </div>

            {/* Floating Badge 2: Full-Stack */}
            <div className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-xl border border-pink-200 p-3 rounded-2xl shadow-xl animate-float-slow flex items-center gap-2.5 hover:scale-110 transition-transform">
              <div className="p-2 rounded-xl bg-pink-100 text-pink-600">
                <Layers className="w-4.5 h-4.5 text-pink-600" />
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


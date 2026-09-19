import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Database, Brain, Sparkles, Server } from 'lucide-react';

const stats = [
  {
    label: 'Banasthali CGPA',
    value: '8.45/10',
    icon: Code2,
    description: 'B.Tech CS & AI (through Sem 4)',
    color: 'from-[#7C3AED] to-pink-500',
  },
  {
    label: 'Class 12 Score',
    value: '89.33%',
    icon: Award,
    description: 'PCM Science (The Adhyyan School)',
    color: 'from-indigo-600 to-fuchsia-500',
  },
  {
    label: 'LeetCode Solved',
    value: '200+',
    icon: Server,
    description: 'Profile: DIYAGARG_08',
    url: 'https://leetcode.com/u/DIYAGARG_08/',
    color: 'from-emerald-500 to-teal-400',
  },
];

const pillars = [
  {
    title: 'Intelligent Systems & Vision',
    desc: 'Integrating Gemini LLM, custom knowledge graphs, and vector search with real-time OpenCV pipeline architectures.',
    icon: Brain,
  },
  {
    title: 'Robust Full-Stack Security',
    desc: 'Deploying JWT authentication, multi-layered rate-limiting, and dockerized microservices with SQLite or MongoDB data structures.',
    icon: Database,
  },
  {
    title: 'Clean Aesthetic Codebase',
    desc: 'Writing highly modular, maintainable, and type-safe systems with structured n8n automation pipelines.',
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-white text-zinc-900 border-t border-purple-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED] mb-3">About Me</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-purple-950">
            Engineered with Precision, Driven by Intelligence
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.3)]" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Stats */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold text-purple-950 mb-4">
              Software & ML Developer
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Currently pursuing B.Tech in Computer Science & Artificial Intelligence at Banasthali Vidyapith (CGPA 8.45/10). I specialize in developing intelligent applications, healthcare assistants, and robust full-stack platforms.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Active contributor in open-source events like Nexus Spring of Code (Ranked 125th/990) and qualifier in Google Big Code Challenge 2026.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {stats.map((stat, index) => {
                const CardWrapper = stat.url ? 'a' : 'div';
                const cardProps = stat.url
                  ? { href: stat.url, target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CardWrapper
                      {...cardProps}
                      className="p-5 rounded-2xl vibrant-card flex flex-col justify-between block h-full hover:scale-105 transition-transform"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white shadow-xs`}>
                          <stat.icon className="w-4.5 h-4.5" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-extrabold text-purple-950">{stat.value}</h4>
                        <p className="text-xs font-bold text-[#7C3AED] mt-1 mb-0.5">{stat.label}</p>
                        <p className="text-[10px] text-slate-500 leading-tight">{stat.description}</p>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Pillars of Expertise */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-purple-950 text-left mb-2 pl-2">
              Engineering Core Pillars
            </h3>
            
            <div className="flex flex-col gap-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="p-6 rounded-2xl vibrant-card flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <pillar.icon className="w-5.5 h-5.5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-purple-950 text-base mb-1.5 group-hover:text-[#7C3AED] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

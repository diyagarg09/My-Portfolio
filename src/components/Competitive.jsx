import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, ExternalLink } from 'lucide-react';

const resumeAchievements = [
  {
    title: 'Nexus Spring of Code',
    subtitle: 'Open-Source Contribution Event',
    detail: 'Ranked 125th out of 990 participants; merged 5 PRs on backend',
    badge: 'Rank 125/990',
  },
  {
    title: 'Google Big Code Challenge 2026',
    subtitle: 'Qualifier Round',
    detail: 'Qualified, placing among the Top 15,000 participants globally',
    badge: 'Top 15k Global',
  },
  {
    title: 'IBM & Coursera Gen AI',
    subtitle: 'Generative AI Specialization',
    detail: 'Vector Databases for RAG & Advanced RAG with Retrievers',
    badge: 'Certified',
  },
  {
    title: 'LeetCode Consistency',
    subtitle: '50-Day Consistency Badge',
    detail: 'Solved 200+ DSA problems across arrays, graphs, trees, DP (User: DIYAGARG_08)',
    badge: '200+ Solved',
    url: 'https://leetcode.com/u/DIYAGARG_08/',
  },
];

export default function Competitive() {
  return (
    <section id="milestones" className="py-24 px-6 relative bg-[#faf9f7] text-zinc-900 border-t border-purple-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED] mb-3">Milestones</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-purple-950">
            Achievements & Recognition
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.3)]" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {resumeAchievements.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.title}
                className="p-6 rounded-3xl purple-card flex flex-col justify-between text-left relative overflow-hidden bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isEven ? 'bg-purple-50 text-[#7C3AED]' : 'bg-pink-50 text-[#EC4899]'
                    }`}>
                      <Trophy className="w-4.5 h-4.5" />
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      isEven 
                        ? 'text-[#7C3AED] bg-purple-50 border-purple-100' 
                        : 'text-[#EC4899] bg-pink-50 border-pink-100'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-purple-950 mb-0.5">{item.title}</h3>
                  <p className={`text-xs font-semibold mb-3 ${isEven ? 'text-[#7C3AED]' : 'text-[#EC4899]'}`}>{item.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-purple-100 flex items-center justify-between text-[10px] font-bold text-slate-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7C3AED] hover:underline flex items-center gap-0.5 font-bold"
                    >
                      Profile <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

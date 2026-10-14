import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GitPullRequest, Award, Code2, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile } from '../data/profile';

const achievements = [
  {
    title: 'Google Big Code Challenge 2026',
    detail: 'Qualified in the qualifier round, placing among the top 15,000 participants globally.',
    badge: 'Top 15k global',
    icon: Trophy,
  },
  {
    title: 'Nexus Spring of Code',
    detail: 'Ranked 125th of 990 participants in this open-source event; merged 5 backend pull requests.',
    badge: 'Rank 125 / 990',
    icon: GitPullRequest,
  },
  {
    title: 'LeetCode — DIYAGARG_08',
    detail: 'Solved 300+ DSA problems across arrays, linked lists, trees, graphs, recursion and DP; 100-day consistency badge.',
    badge: '300+ solved',
    icon: Code2,
    url: profile.leetcode,
  },
  {
    title: 'IBM × Coursera — Generative AI',
    detail: 'Completed "Vector Databases for RAG" and "Advanced RAG with Vector Databases and Retrievers".',
    badge: 'Certified',
    icon: Award,
  },
];

export default function Competitive() {
  return (
    <section id="milestones" className="py-24 px-5 sm:px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Achievements & certifications." />

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((a, i) => {
            const Wrapper = a.url ? 'a' : 'div';
            const linkProps = a.url ? { href: a.url, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (i % 2) * 0.08 }}
              >
                <Wrapper {...linkProps} className="card p-6 flex gap-5 h-full group">
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-warm/10 border border-warm/25 text-warm flex items-center justify-center">
                    <a.icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-semibold text-fg">{a.title}</h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-warm/10 text-warm border border-warm/20">{a.badge}</span>
                      {a.url && <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-fg transition-colors" />}
                    </div>
                    <p className="text-sm text-muted leading-relaxed mt-2">{a.detail}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

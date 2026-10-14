import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Code2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    title: 'Applied ML & LLM systems',
    desc: 'Knowledge graphs, RAG with vector search, and LLM integration (Gemini, Groq) — with explainability via SHAP and confidence scoring.',
    icon: Brain,
  },
  {
    title: 'Backend & APIs',
    desc: 'FastAPI and Node/Express services with JWT auth, Redis caching, async pipelines, and pytest coverage.',
    icon: Server,
  },
  {
    title: 'Problem solving',
    desc: '300+ LeetCode problems across arrays, trees, graphs, recursion and DP; open-source contributor with merged backend PRs.',
    icon: Code2,
  },
];

const education = [
  {
    school: 'Banasthali Vidyapith',
    detail: 'B.Tech, Computer Science & Artificial Intelligence',
    score: 'CGPA 8.45 / 10 (through Sem 4)',
    when: '2024 – 2028',
  },
  {
    school: 'The Adhyyan School, Meerut',
    detail: 'Class 12, Science (PCM)',
    score: '89.33%',
    when: '2023 – 2024',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Engineer who ships, measures, and explains." />

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-muted leading-relaxed text-[15px]">
              I'm a Computer Science &amp; AI undergraduate who enjoys turning messy, real-world problems into
              reliable software. My projects span healthcare triage, fraud detection, personal finance and
              document automation — each built end-to-end, from data pipeline to API to UI.
            </p>
            <p className="text-muted leading-relaxed text-[15px] mt-4">
              I care about correctness and evidence: benchmarking models properly, handling class imbalance,
              writing tests, and making results explainable to the people who use them.
            </p>

            <h3 className="mt-10 mb-4 text-xs font-mono uppercase tracking-widest text-muted">Education</h3>
            <ol className="relative ml-1.5 space-y-6">
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-accent to-accent-2 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />
              {education.map((e, i) => (
                <motion.li
                  key={e.school}
                  className="pl-6 relative"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                >
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-ink" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="font-semibold text-fg">{e.school}</p>
                    <span className="text-xs font-mono text-muted">{e.when}</span>
                  </div>
                  <p className="text-sm text-muted">{e.detail}</p>
                  <p className="text-sm text-accent-2 font-medium mt-0.5">{e.score}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-7 grid gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="card p-6 flex gap-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center">
                  <p.icon className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-semibold text-fg">{p.title}</h4>
                  <p className="text-sm text-muted leading-relaxed mt-1.5">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

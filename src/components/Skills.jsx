import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Brain, Server, Monitor, Database, Wrench, LayoutGrid } from 'lucide-react';
import SectionHeader from './SectionHeader';

const groups = [
  { id: 'lang', title: 'Languages', icon: Code2, items: ['Python', 'C++', 'C', 'JavaScript', 'SQL'] },
  { id: 'ml', title: 'ML & AI', icon: Brain, items: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'Pandas', 'NumPy', 'SHAP', 'LangChain', 'RAG', 'Vector Search', 'Knowledge Graphs', 'Gemini / Groq LLMs'] },
  { id: 'backend', title: 'Backend', icon: Server, items: ['FastAPI', 'Flask', 'Node.js', 'Express', 'REST APIs', 'JWT Auth', 'pytest'] },
  { id: 'frontend', title: 'Frontend', icon: Monitor, items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Chart.js', 'D3.js'] },
  { id: 'data', title: 'Data & Automation', icon: Database, items: ['MongoDB', 'SQLite', 'Redis', 'n8n', 'PyPDF2'] },
  { id: 'tools', title: 'Tools & Fundamentals', icon: Wrench, items: ['Git & GitHub', 'VS Code', 'Jupyter', 'MongoDB Compass', 'Data Structures', 'Algorithms'] },
];

const tabs = [{ id: 'all', title: 'All', icon: LayoutGrid }, ...groups];

export default function Skills() {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? groups : groups.filter((g) => g.id === active);

  return (
    <section id="skills" className="py-24 px-5 sm:px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Technical skills." subtitle="Everything listed here is used in at least one project above." />

        {/* Filter tabs */}
        <div role="tablist" aria-label="Skill categories" className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-1 px-1">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.id)}
                className={`relative shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'text-ink' : 'text-muted hover:text-fg border border-line'
                }`}
              >
                {isActive && (
                  <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-lg btn-primary" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                <t.icon className="relative w-4 h-4" />
                <span className="relative">{t.title}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((g) => (
              <motion.div
                key={g.id}
                layout
                className="card p-6"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-lg bg-accent-2/10 border border-accent-2/25 text-accent-2 flex items-center justify-center">
                    <g.icon className="w-4 h-4" />
                  </span>
                  <h3 className="font-semibold text-fg">{g.title}</h3>
                  <span className="ml-auto text-xs font-mono text-muted">{g.items.length}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

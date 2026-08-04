import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Shield, Laptop, Layers } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Skills', icon: Layers },
  { id: 'ai', name: 'AI, ML & NLP', icon: Brain },
  { id: 'web', name: 'Web, DB & Automation', icon: Shield },
  { id: 'core', name: 'Languages & Tools', icon: Laptop },
];

const skillTags = [
  { name: 'Python', category: 'core' },
  { name: 'C', category: 'core' },
  { name: 'C++', category: 'core' },
  
  { name: 'Supervised/Unsupervised Learning', category: 'ai' },
  { name: 'Vector Databases', category: 'ai' },
  { name: 'Knowledge Graphs', category: 'ai' },
  { name: 'Google Gemini', category: 'ai' },
  { name: 'Groq LLM', category: 'ai' },
  { name: 'FastAPI', category: 'ai' },
  { name: 'Scikit-learn', category: 'ai' },
  { name: 'PyTorch', category: 'ai' },
  { name: 'TensorFlow', category: 'ai' },
  { name: 'Pandas & NumPy', category: 'ai' },
  { name: 'PyPDF2', category: 'ai' },
  { name: 'LangChain', category: 'ai' },
  
  { name: 'React', category: 'web' },
  { name: 'JavaScript', category: 'web' },
  { name: 'HTML & CSS', category: 'web' },
  { name: 'MongoDB', category: 'web' },
  { name: 'SQLite', category: 'web' },
  { name: 'Redis', category: 'web' },
  { name: 'n8n Workflow Engine', category: 'web' },
  
  { name: 'VS Code', category: 'core' },
  { name: 'Jupyter Notebook', category: 'core' },
  { name: 'MongoDB Compass', category: 'core' },
  { name: 'GitHub', category: 'core' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section id="skills" className="py-24 px-6 relative bg-[#faf9f7] text-zinc-900 border-t border-purple-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED] mb-3">Expertise</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-purple-950">
            Technical Skills Matrix
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.3)]" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => {
            const isCatActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isCatActive
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white shadow-md shadow-purple-500/20'
                    : 'bg-white text-slate-700 border border-purple-100 hover:border-[#EC4899]'
                }`}
              >
                <category.icon className="w-3.5 h-3.5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Tag Cloud */}
        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto min-h-[160px] p-6 rounded-3xl bg-white border border-purple-100 shadow-sm relative overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            {skillTags.map((skill) => {
              const isHighlighted = activeCategory === 'all' || activeCategory === skill.category;
              
              let colorClasses = 'border-purple-100 text-slate-500 bg-white';
              
              if (isHighlighted) {
                colorClasses = 'border-[#EC4899]/30 text-[#7C3AED] bg-purple-50 shadow-2xs';
              }

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isHighlighted ? 1 : 0.25, 
                    scale: isHighlighted ? 1 : 0.95,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className={`px-4 py-2 rounded-xl border text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-default select-none ${colorClasses}`}
                >
                  {skill.name}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

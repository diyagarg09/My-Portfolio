import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, ShieldCheck, Wallet, FileText, ArrowDown, ArrowUpRight, Layers } from 'lucide-react';
import { Github } from './icons';
import SectionHeader from './SectionHeader';

const projects = [
  {
    id: 1,
    title: 'CureBot',
    subtitle: 'Neuro-symbolic healthcare assistant',
    category: 'AI · Healthcare',
    icon: Brain,
    metric: { value: '5-stage', label: 'reasoning pipeline' },
    tags: ['Python', 'FastAPI', 'Scikit-learn', 'Redis', 'Groq LLM', 'RAG', 'D3.js', 'pytest'],
    repo: 'https://github.com/diyagarg09/CureBot',
    highlights: [
      'Combined a symptom–condition knowledge graph with RAG over curated medical docs and an LLM for grounded triage.',
      'Red-flag symptom detection escalates urgent cases; explainable panel shows confidence and contributing factors.',
      'FastAPI endpoints with Redis caching to cut repeated-query latency, covered by an automated pytest suite.',
    ],
    problem: 'Conversational medical LLMs risk advisory errors without verifiable symptom reasoning and grounded knowledge checks.',
    solution: 'A 5-stage pipeline (NLP symptom extraction → knowledge-graph scoring → RAG retrieval → LLM composition → diagnostics UI) with red-flag escalation, a D3.js knowledge-graph view, and clinician-ready visit summaries.',
    architecture: [
      { name: 'Symptom Extraction', tech: 'NLP Parser' },
      { name: 'Graph Scoring', tech: 'Knowledge Graph' },
      { name: 'Doc Retrieval', tech: 'Vector Search' },
      { name: 'LLM Composition', tech: 'Groq API' },
      { name: 'Cache & API', tech: 'FastAPI / Redis' },
    ],
  },
  {
    id: 2,
    title: 'Credit Card Fraud Detection',
    subtitle: 'Leak-free ML pipeline on 0.17% fraud data',
    category: 'Machine Learning',
    icon: ShieldCheck,
    metric: { value: '0.83', label: 'PR-AUC · 96% precision' },
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'imbalanced-learn', 'SHAP', 'Flask', 'Streamlit', 'pytest'],
    repo: 'https://github.com/diyagarg09/credit-fraud-detectionn',
    highlights: [
      'Benchmarked 6 models on 284k transactions (0.17% fraud) with SMOTE inside the pipeline so no synthetic data leaks into validation or test.',
      'Soft-voting ensemble: PR-AUC 0.83, 96% precision, catching 77% of fraud with just 3 false alarms in 56k test transactions.',
      'Validation-tuned thresholds, SHAP explanations, a secured Flask API and a Streamlit app with batch CSV scoring; 30 pytest tests.',
    ],
    problem: 'With only 0.17% fraud, accuracy is meaningless and naive oversampling leaks synthetic data into evaluation, inflating scores.',
    solution: 'Imputer → scaler → SMOTE → model pipelines evaluated on PR-AUC, with thresholds tuned on a validation split and costs of false alarms vs missed fraud estimated per model.',
    architecture: [
      { name: 'Validation & Dedup', tech: 'pandas' },
      { name: 'Leak-free Resampling', tech: 'imblearn Pipeline' },
      { name: 'Model Ensemble', tech: 'RF + XGBoost + LR' },
      { name: 'Threshold Tuning', tech: 'Validation PR curve' },
      { name: 'Serving & Explainability', tech: 'Flask / SHAP' },
    ],
  },
  {
    id: 3,
    title: 'FinTrack-Pro',
    subtitle: 'AI-assisted personal finance tracker',
    category: 'Full-Stack · MERN',
    icon: Wallet,
    metric: { value: 'MERN', label: '+ Gemini AI advisor' },
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Gemini', 'JWT', 'Tailwind'],
    repo: 'https://github.com/diyagarg09/FinTrack-Pro',
    highlights: [
      'End-to-end app with automated expense classification, recurring transactions and monthly budget trackers.',
      'Integrated Google Gemini to generate personalised budgeting insights from spending patterns.',
      'Interactive Chart.js dashboards for income vs. expense, monthly trends and category breakdowns.',
    ],
    problem: 'Manual expense tracking lacks actionable insights and predictive budgeting for students and young professionals.',
    solution: 'A MERN application with JWT auth, dashboard analytics, savings-goal tracking, and Gemini-generated financial guidance.',
    architecture: [
      { name: 'Frontend UI', tech: 'React / Chart.js' },
      { name: 'API Server', tech: 'Node.js / Express' },
      { name: 'Database', tech: 'MongoDB' },
      { name: 'AI Advisor', tech: 'Google Gemini' },
      { name: 'Auth & Security', tech: 'JWT / Bcrypt' },
    ],
  },
  {
    id: 4,
    title: 'Insurance Claim Summarizer',
    subtitle: 'Async document-AI pipeline',
    category: 'AI Pipeline · Automation',
    icon: FileText,
    metric: { value: '500+', label: 'page reports summarised' },
    tags: ['Python', 'FastAPI', 'n8n', 'MongoDB', 'Gemini', 'PyPDF2'],
    repo: 'https://github.com/diyagarg09/Insurance-Claim-Summarizer',
    highlights: [
      'Decoupled, asynchronous pipeline separating upload, PDF extraction and AI orchestration into scalable layers.',
      'FastAPI multi-file async uploads with PyPDF2 extraction tuned for long legal/medical documents.',
      'n8n workflow triggers Gemini summarisation; MongoDB persists claim IDs, logs and summaries.',
    ],
    problem: 'Manually parsing hundreds of pages per insurance claim creates major processing delays.',
    solution: 'FastAPI handles uploads, PyPDF2 extracts text, n8n orchestrates Gemini for abstractive summaries, and MongoDB stores results with real-time status in the UI.',
    architecture: [
      { name: 'Multi-File Upload', tech: 'FastAPI' },
      { name: 'Text Extraction', tech: 'PyPDF2' },
      { name: 'Workflow', tech: 'n8n Webhook' },
      { name: 'Summarization', tech: 'Google Gemini' },
      { name: 'Claim Logs', tech: 'MongoDB' },
    ],
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ scale: 0.96, y: 12 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 12 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-line bg-surface p-6 md:p-8"
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 p-2 rounded-lg btn-ghost">
          <X className="w-4 h-4" />
        </button>

        <p className="font-mono text-xs text-accent-2 mb-2">{project.category}</p>
        <h3 className="font-display text-2xl font-bold text-fg pr-10">{project.title}</h3>
        <p className="text-muted mt-1">{project.subtitle}</p>

        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tags.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-rose-300 mb-2">Problem</h4>
              <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-300 mb-2">Solution</h4>
              <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-ink/60 p-5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" /> Architecture
            </h4>
            <div className="flex flex-col items-stretch gap-1.5">
              {project.architecture.map((node, i) => (
                <React.Fragment key={node.name}>
                  <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-surface-2 border border-line">
                    <span className="text-xs font-medium text-fg">{node.name}</span>
                    <span className="text-[11px] font-mono text-accent">{node.tech}</span>
                  </div>
                  {i < project.architecture.length - 1 && <ArrowDown className="w-3.5 h-3.5 text-muted self-center" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-6 mt-8 border-t border-line">
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold">
            <Github className="w-4 h-4" /> View source
          </a>
          <button onClick={onClose} className="btn-ghost px-5 py-2.5 rounded-xl text-sm font-semibold">Close</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 px-5 sm:px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
         
          title="Projects with measurable results."
          subtitle="End-to-end systems spanning ML, LLM pipelines and full-stack engineering. Click any card for the architecture."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="card p-6 sm:p-7 flex flex-col cursor-pointer group"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 2) * 0.08 }}
              onClick={() => setSelected(p)}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center">
                  <p.icon className="w-5 h-5" />
                </span>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold text-gradient leading-none">{p.metric.value}</p>
                  <p className="text-[11px] text-muted mt-1">{p.metric.label}</p>
                </div>
              </div>

              <p className="font-mono text-[11px] uppercase tracking-widest text-accent-2 mt-6">{p.category}</p>
              <h3 className="font-display text-xl font-bold text-fg mt-1.5 group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-sm text-muted">{p.subtitle}</p>

              <ul className="mt-4 space-y-2 text-sm text-muted leading-relaxed">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-accent-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {p.tags.slice(0, 6).map((t) => <span key={t} className="chip">{t}</span>)}
              </div>

              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-accent inline-flex items-center gap-1">
                  Architecture <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

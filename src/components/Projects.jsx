import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Brain, Eye, FileText } from 'lucide-react';
import { Github } from './icons';

const projects = [
  {
    id: 1,
    title: 'CureBot — Neuro-Symbolic Healthcare Assistant',
    category: 'Healthcare',
    icon: Brain,
    tags: ['Python', 'FastAPI', 'Scikit-learn', 'Redis', 'Groq LLM', 'RAG', 'D3.js'],
    repo: 'https://github.com/diyagarg09/CureBot',
    description: 'A neuro-symbolic triage assistant combining a symptom-condition knowledge graph, Retrieval-Augmented Generation (RAG) over curated medical documents, and Groq LLM.',
    problem: 'Conversational medical LLMs risk advisory errors without verifiable symptom reasoning and grounded knowledge checks.',
    solution: 'Designed a 5-stage reasoning pipeline (NLP symptom extraction → knowledge-graph scoring → RAG retrieval → LLM composition → diagnostics UI) with red-flag symptom escalation, D3.js knowledge-graph visualization, and clinician visit summaries.',
    architecture: [
      { name: 'Symptom Extraction', tech: 'NLP Parser' },
      { name: 'Graph Scoring', tech: 'Knowledge Graph' },
      { name: 'Doc Retrieval', tech: 'Vector Search' },
      { name: 'LLM Composition', tech: 'Groq API' },
      { name: 'Cache & API', tech: 'FastAPI / Redis' }
    ]
  },
  {
    id: 2,
    title: 'Credit Card Fraud Detection System',
    category: 'Machine Learning',
    icon: ShieldIcon,
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Flask', 'SHAP', 'SQLite'],
    repo: 'https://github.com/diyagarg09/credit-fraud-detectionn',
    description: 'Trained and benchmarked 7 ML models on Kaggle credit-card fraud logs using SMOTE for class-imbalance correction, reaching ~96% accuracy, ~95% F1, and ~0.99 ROC-AUC.',
    problem: 'Extreme transactional class-imbalance makes standard classifiers miss fraudulent operations or generate excessive false positives.',
    solution: 'Trained 7 ML classifiers (Logistic Regression, Random Forest, XGBoost, Gradient Boosting, SVM, Neural Nets, Ensemble Voting) with SMOTE oversampling and GridSearchCV hyperparameter tuning.',
    architecture: [
      { name: 'Transaction Logs', tech: 'Kaggle Dataset' },
      { name: 'Oversampling', tech: 'SMOTE Engine' },
      { name: 'Model Ensemble', tech: '7 ML Classifiers' },
      { name: 'Tuning', tech: 'GridSearchCV' },
      { name: 'Explainability', tech: 'SHAP Analysis' }
    ]
  },
  {
    id: 3,
    title: 'FinTrack-Pro — Smart Personal Finance Tracker',
    category: 'Full-Stack & Fintech',
    icon: FileText,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Google Gemini AI', 'Tailwind CSS'],
    repo: 'https://github.com/diyagarg09/FinTrack-Pro',
    description: 'An end-to-end intelligent personal finance tracker featuring real-time expense categorization, visual budget analytics with Chart.js, and AI financial advice using Google Gemini.',
    problem: 'Manual expense tracking lacks actionable insights, predictive budgeting, and instant financial advice for students and young professionals.',
    solution: 'Built a full-stack MERN application with interactive dashboard charts, automated recurring expense categorization, monthly savings goal trackers, and Google Gemini AI insights for personalized budgeting guidance.',
    architecture: [
      { name: 'Frontend UI', tech: 'React / Chart.js' },
      { name: 'API Server', tech: 'Node.js / Express' },
      { name: 'Database', tech: 'MongoDB' },
      { name: 'AI Advisor', tech: 'Google Gemini' },
      { name: 'Auth & Security', tech: 'JWT / Bcrypt' }
    ]
  },
  {
    id: 4,
    title: 'Intelligent Insurance Claim Summarizer',
    category: 'AI Pipeline & Automation',
    icon: FileText,
    tags: ['Python', 'FastAPI', 'n8n', 'MongoDB', 'Google Gemini', 'PyPDF2'],
    repo: 'https://github.com/diyagarg09/Insurance-Claim-Summarizer',
    description: 'An asynchronous processing pipeline to summarize accident/insurance reports of 500+ pages using PyPDF2 text extraction and Google Gemini LLM via n8n automation.',
    problem: 'Manual parsing of hundreds of pages of insurance claims creates major operational delay in processing claims.',
    solution: 'Engineered a decoupled pipeline separating file handling, PDF extraction, and AI orchestration. FastAPI handles multi-file uploads, n8n triggers Google Gemini for abstractive summarization, and MongoDB persists claim logs.',
    architecture: [
      { name: 'Multi-File Upload', tech: 'FastAPI' },
      { name: 'Text Extraction', tech: 'PyPDF2 Engine' },
      { name: 'Workflow Ingestion', tech: 'n8n Webhook' },
      { name: 'Summarization', tech: 'Google Gemini' },
      { name: 'Claim Logs', tech: 'MongoDB' }
    ]
  }
];

function ShieldIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z" />
    </svg>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 relative bg-white text-zinc-900 border-t border-purple-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED] mb-3">Portfolio</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-purple-950">
            Featured Resume Projects
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.3)]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.id}
                className="group flex flex-col justify-between p-6 purple-card rounded-3xl relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#7C3AED] bg-[#EDE9FE] px-3 py-1 rounded-full border border-[#E2D9F7]">
                      {project.category}
                    </span>
                    <span className="w-9 h-9 rounded-xl bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center">
                      <ProjectIcon className="w-4.5 h-4.5" />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-purple-950 mb-2 group-hover:text-[#EC4899] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-purple-900 bg-[#FBF9FF] border border-[#E2D9F7] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E2D9F7]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1 text-xs font-bold text-[#7C3AED] hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </button>
                    
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-[#EC4899] hover:bg-pink-50 transition-all"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#E2D9F7] shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto flex flex-col justify-between text-zinc-900"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-[#E2D9F7] text-slate-500 hover:text-zinc-900 hover:bg-[#EDE9FE] transition-colors"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#7C3AED] bg-[#EDE9FE] px-3.5 py-1 rounded-full border border-[#E2D9F7]">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-purple-950 mb-3 pr-8">
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold text-[#7C3AED] bg-[#EDE9FE] border border-[#E2D9F7] px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h4 className="text-xs uppercase font-extrabold text-rose-600 tracking-wider mb-1.5">
                        The Problem
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-extrabold text-[#7C3AED] tracking-wider mb-1.5">
                        The Solution
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#faf9f7] border border-purple-100/50 flex flex-col justify-center">
                    <h4 className="text-xs uppercase font-extrabold text-purple-950 tracking-wider mb-4 text-center">
                      System Architecture Pipeline
                    </h4>

                    <div className="flex flex-col gap-2 items-center">
                      {selectedProject.architecture.map((node, i) => (
                        <React.Fragment key={node.name}>
                          <div className="w-full flex items-center justify-between p-2 rounded-xl bg-white border border-purple-100 shadow-2xs">
                            <span className="text-[10px] font-bold text-zinc-900">{node.name}</span>
                            <span className="text-[9px] font-mono text-[#7C3AED] bg-[#EDE9FE] px-2 py-0.5 rounded">
                              {node.tech}
                            </span>
                          </div>
                          {i < selectedProject.architecture.length - 1 && (
                            <ChevronRight className="w-3.5 h-3.5 text-[#7C3AED] rotate-90" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-purple-100 mt-4">
                <a
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold text-xs shadow-md hover:from-[#6D28D9] hover:to-[#DB2777] transition-all"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Source
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-purple-100 text-xs font-semibold text-slate-600 hover:bg-purple-50 transition-colors"
                >
                  Close Modal
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

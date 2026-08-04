import React from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Phone, ExternalLink, Printer } from 'lucide-react';
import { Github, Linkedin } from './icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/40 backdrop-blur-md print:p-0 print:bg-white print:relative print:z-0">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-4xl bg-white text-zinc-900 rounded-3xl border border-purple-100 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col justify-between print:border-none print:shadow-none print:max-h-full print:rounded-none"
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-purple-100 bg-[#faf9f7] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold text-purple-900">Diya Garg — Official Resume</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-xs font-bold text-white hover:from-[#6D28D9] hover:to-[#DB2777] transition-all shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-purple-100 text-zinc-500 hover:text-zinc-900 hover:bg-purple-50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Document Body */}
        <div className="p-8 overflow-y-auto flex-grow print:p-0 print:overflow-visible text-left bg-white font-serif leading-relaxed">
          <div id="resume-print-area" className="max-w-3xl mx-auto flex flex-col gap-5 text-zinc-900">
            
            {/* Header / Name */}
            <div className="text-center border-b border-zinc-300 pb-4">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-1 font-serif">Diya Garg</h1>
              <p className="text-sm font-semibold italic text-purple-700 mb-2">Software & Full-Stack Developer</p>
              <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-zinc-700 font-sans">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-purple-700" />
                  +91 9412782129
                </span>
                <span>|</span>
                <a href="mailto:diya@example.com" className="flex items-center gap-1 hover:underline text-purple-700">
                  <Mail className="w-3 h-3" />
                  Email
                </a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/diyagarg09/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-purple-700">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </a>
                <span>|</span>
                <a href="https://github.com/diyagarg09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-purple-700">
                  <Github className="w-3 h-3" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="font-sans">
              <h2 className="text-sm uppercase font-bold tracking-wider text-purple-900 border-b border-zinc-300 pb-1 mb-3">Education</h2>
              
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm text-zinc-900">Banasthali Vidyapith</h3>
                    <p className="text-xs italic text-zinc-700">B.Tech in Computer Science & Artificial Intelligence</p>
                    <p className="text-xs font-semibold text-purple-900">CGPA: 8.45/10 (through Semester 4)</p>
                  </div>
                  <div className="text-right text-xs text-zinc-600">
                    <p className="font-semibold">Rajasthan</p>
                    <p>2024 – 2028</p>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm text-zinc-900">The Adhyyan School</h3>
                    <p className="text-xs italic text-zinc-700">Class 12 Science (PCM)</p>
                    <p className="text-xs font-semibold text-purple-900">Percentage: 89.33%</p>
                  </div>
                  <div className="text-right text-xs text-zinc-600">
                    <p className="font-semibold">Meerut</p>
                    <p>2023 – 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="font-sans">
              <h2 className="text-sm uppercase font-bold tracking-wider text-purple-900 border-b border-zinc-300 pb-1 mb-3">Projects</h2>
              
              <div className="flex flex-col gap-4">
                
                {/* CureBot */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-xs text-zinc-900">
                      CureBot — Neuro-Symbolic Healthcare Assistant <span className="font-normal italic text-zinc-600">| Python, FastAPI, Scikit-learn, Redis, Groq LLM</span>
                    </h3>
                    <a href="https://github.com/diyagarg09/CureBot" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-700 font-semibold hover:underline flex items-center gap-0.5">
                      GitHub <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-zinc-700 flex flex-col gap-1">
                    <li>Built a neuro-symbolic triage assistant combining a symptom-condition knowledge graph, Retrieval-Augmented Generation (RAG) over curated medical documents, and an LLM (Groq).</li>
                    <li>Designed a 5-stage reasoning pipeline (NLP symptom extraction → knowledge-graph scoring → RAG retrieval → LLM composition → diagnostics UI) with red-flag symptom detection for urgent-care escalation.</li>
                    <li>Implemented an explainable diagnostics panel showing condition confidence and contributing factors, plus a D3.js knowledge-graph visualization and clinician-ready visit summaries (PDF/print export).</li>
                    <li>Engineered secure FastAPI REST endpoints with Redis caching to reduce repeated-query latency, and wrote an automated pytest suite for the reasoning pipeline.</li>
                  </ul>
                </div>

                {/* Credit Card Fraud Detection */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-xs text-zinc-900">
                      Credit Card Fraud Detection <span className="font-normal italic text-zinc-600">| Python, Scikit-learn, XGBoost, TensorFlow, Flask, SHAP, SQLite</span>
                    </h3>
                    <a href="https://github.com/diyagarg09/credit-fraud-detectionn" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-700 font-semibold hover:underline flex items-center gap-0.5">
                      GitHub <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-zinc-700 flex flex-col gap-1">
                    <li>Trained and benchmarked 7 ML models (Logistic Regression, Random Forest, XGBoost, Gradient Boosting, SVM, Neural Network, Ensemble Voting) on the Kaggle credit-card fraud dataset, using SMOTE for class-imbalance correction and GridSearchCV for hyperparameter tuning; ensemble model reached ~96% accuracy, ~95% F1, and ~0.99 ROC-AUC on the held-out test set.</li>
                  </ul>
                </div>

                {/* FinTrack-Pro */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-xs text-zinc-900">
                      FinTrack-Pro — Smart Personal Finance Tracker <span className="font-normal italic text-zinc-600">| React, Node.js, Express, MongoDB, Chart.js, Google Gemini, Tailwind CSS</span>
                    </h3>
                    <a href="https://github.com/diyagarg09/FinTrack-Pro" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-700 font-semibold hover:underline flex items-center gap-0.5">
                      GitHub <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-zinc-700 flex flex-col gap-1">
                    <li>Developed an end-to-end intelligent personal finance application featuring automated expense classification, recurring transaction logs, and monthly budget allocation trackers.</li>
                    <li>Integrated Google Gemini LLM API to deliver personalized AI financial advice and budgeting insights based on user spending habits and savings targets.</li>
                    <li>Built interactive visual dashboards with Chart.js to render income vs. expense breakdowns, monthly trend analytics, and real-time category distribution charts.</li>
                  </ul>
                </div>

                {/* Intelligent Insurance Claim Summarizer */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-xs text-zinc-900">
                      Intelligent Insurance Claim Summarizer <span className="font-normal italic text-zinc-600">| Python, FastAPI, n8n, MongoDB, Google Gemini</span>
                    </h3>
                    <a href="https://github.com/diyagarg09/Insurance-Claim-Summarizer" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-700 font-semibold hover:underline flex items-center gap-0.5">
                      GitHub <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-zinc-700 flex flex-col gap-1">
                    <li>Engineered a decoupled, asynchronous pipeline to summarize accident/insurance reports of 500+ pages, separating file handling, PDF text extraction, and AI orchestration into independently scalable layers.</li>
                    <li>Built a FastAPI backend for multi-file asynchronous uploads with PyPDF2-based text extraction tuned for high-volume legal/medical documents.</li>
                    <li>Orchestrated an n8n workflow that triggers Google Gemini for abstractive summarization of complex medical and legal jargon, with MongoDB persistence for claim IDs, processing logs, and generated summaries.</li>
                    <li>Built a responsive JavaScript frontend with real-time processing-status updates for multi-file submissions.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Technical Skills */}
            <div className="font-sans">
              <h2 className="text-sm uppercase font-bold tracking-wider text-purple-900 border-b border-zinc-300 pb-1 mb-2">Technical Skills</h2>
              <div className="flex flex-col gap-1 text-[11px] text-zinc-800">
                <p><strong className="font-bold text-zinc-900">Languages:</strong> Python, C, C++</p>
                <p><strong className="font-bold text-zinc-900">ML & Data:</strong> Supervised/Unsupervised Learning, Knowledge Graphs, Vector Search, LLM Integration (Google Gemini, Groq)</p>
                <p><strong className="font-bold text-zinc-900">Frameworks/Libraries:</strong> FastAPI, Scikit-learn, PyTorch, TensorFlow, Pandas, NumPy, PyPDF2, LangChain</p>
                <p><strong className="font-bold text-zinc-900">Web:</strong> React, JavaScript, HTML, CSS</p>
                <p><strong className="font-bold text-zinc-900">Databases & Automation:</strong> MongoDB, SQLite, Redis, n8n Workflow Engine</p>
                <p><strong className="font-bold text-zinc-900">Tools:</strong> VS Code, Jupyter Notebook, MongoDB Compass, GitHub</p>
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="font-sans">
              <h2 className="text-sm uppercase font-bold tracking-wider text-purple-900 border-b border-zinc-300 pb-1 mb-2">Achievements & Certifications</h2>
              <ul className="list-disc list-outside ml-4 text-[11px] text-zinc-700 flex flex-col gap-1.5">
                <li><strong className="font-bold text-zinc-900">Nexus Spring of Code (Open-Source Contribution Event):</strong> Contributor; ranked 125th out of 990 participants. Merged 5 PRs on backend.</li>
                <li><strong className="font-bold text-zinc-900">Google Big Code Challenge 2026 (Qualifier Round):</strong> Qualified, placing among the Top 15,000 participants globally.</li>
                <li><strong className="font-bold text-zinc-900">IBM & Coursera — Generative AI Specialization:</strong> Completed <em>Vector Databases for RAG: An Introduction</em> and <em>Advanced RAG with Vector Databases and Retrievers</em>.</li>
                <li><strong className="font-bold text-zinc-900">LeetCode:</strong> 50-Day consistency badge; solved 200+ DSA problems across arrays, linked lists, trees, graphs, and recursion.</li>
                <li><strong className="font-bold text-zinc-900">AI Symposium, University of South Dakota:</strong> Attended sessions on AI applications in computational biology and medicine.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer info */}
        <div className="bg-[#FBF9FF] px-6 py-3 border-t border-[#E2D9F7] flex items-center justify-between text-[10px] text-purple-900 font-sans print:hidden">
          <span>Official Resume Document</span>
          <span>Close window or press Esc to return</span>
        </div>

      </motion.div>
    </div>
  );
}

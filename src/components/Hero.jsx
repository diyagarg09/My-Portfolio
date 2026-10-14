import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from './icons';
import { profile, highlights } from '../data/profile';
import CountUp from './CountUp';
import DreamyBackdrop from './DreamyBackdrop';

// Entrance animation; waits until the intro overlay has lifted.
const fadeUp = (delay = 0, ready = true) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
  animate: ready ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined,
  transition: { duration: 0.8, delay: 0.15 + delay * 1.6, ease: [0.22, 1, 0.36, 1] },
});

// Terminal-style summary card shown beside the intro on large screens
function CodeCard() {
  return (
    <div className="card overflow-hidden font-[family-name:var(--font-code)] text-[13px] leading-relaxed shadow-2xl shadow-black/40 hover:transform-none">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-xs text-muted">diya.py</span>
      </div>
      <pre className="p-5 overflow-x-auto text-[#C9D1E6]">
<span className="text-accent">class</span> <span className="text-accent-2">Engineer</span>:{'\n'}
{'    '}name   = <span className="text-warm">"Diya Garg"</span>{'\n'}
{'    '}degree = <span className="text-warm">"B.Tech CS &amp; AI"</span>{'\n'}
{'    '}focus  = [<span className="text-warm">"ML systems"</span>,{'\n'}
{'              '}<span className="text-warm">"backend APIs"</span>,{'\n'}
{'              '}<span className="text-warm">"full-stack"</span>]{'\n'}
{'    '}stack  = [<span className="text-warm">"Python"</span>, <span className="text-warm">"C++"</span>,{'\n'}
{'              '}<span className="text-warm">"FastAPI"</span>, <span className="text-warm">"React"</span>]{'\n'}
{'\n'}
{'    '}<span className="text-accent">def</span> <span className="text-accent-2">solve</span>(self, problem):{'\n'}
{'        '}<span className="text-accent">return</span> build(problem, measure=<span className="text-accent">True</span>){'\n'}
<span className="text-muted">&gt;&gt;&gt;</span> <span className="caret text-accent-2">▍</span>
      </pre>
    </div>
  );
}

export default function Hero({ onOpenResume, ready = true }) {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 px-5 sm:px-6">
      <DreamyBackdrop />
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0, ready)} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-surface/70 text-xs font-medium text-muted mb-7">
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot" />
              Open to Software · AI · ML Engineering internships
            </motion.div>

            <motion.h1 {...fadeUp(0.05, ready)} className="font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              Hi, I'm {profile.name.split(' ')[0]}.<br />
              <span className="text-shimmer accent-serif text-[1.08em]">I build intelligent software.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.12, ready)} className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
              CS &amp; AI undergrad at <span className="text-fg font-medium">{profile.school}</span> building
              ML-powered systems and production-style backends — from a neuro-symbolic healthcare assistant
              to a fraud-detection ensemble at <span className="text-fg font-medium">~0.99 ROC-AUC</span>.
            </motion.p>

            <motion.div {...fadeUp(0.18, ready)} className="mt-3 flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="w-4 h-4" /> Rajasthan, India
            </motion.div>

            <motion.div {...fadeUp(0.24, ready)} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition">
                View my work <ArrowRight className="w-4 h-4" />
              </a>
              <button onClick={onOpenResume} className="btn-ghost inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition">
                <FileText className="w-4 h-4" /> Resume
              </button>
              <div className="flex items-center gap-2 ml-1">
                {[
                  { href: profile.github, label: 'GitHub', Icon: Github },
                  { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
                  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="btn-ghost w-11 h-11 rounded-xl inline-flex items-center justify-center transition"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.2, ready)} className="lg:col-span-5 hidden lg:block">
            <CodeCard />
          </motion.div>
        </div>

        {/* Headline numbers recruiters scan for */}
        <motion.dl {...fadeUp(0.32, ready)} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-line bg-line">
          {highlights.map((h) => {
            const content = (
              <>
                <dd className="font-display text-3xl font-bold text-fg">
                  <CountUp value={h.value} enabled={ready} delay={0.7} /><span className="text-muted text-lg font-medium">{h.unit}</span>
                </dd>
                <dt className="mt-1 text-sm font-medium text-fg/90">{h.label}</dt>
                <p className="text-xs text-muted mt-0.5">{h.note}</p>
              </>
            );
            return h.url ? (
              <a key={h.label} href={h.url} target="_blank" rel="noopener noreferrer" className="bg-surface p-5 sm:p-6 hover:bg-surface-2 transition-colors">
                {content}
              </a>
            ) : (
              <div key={h.label} className="bg-surface p-5 sm:p-6">{content}</div>
            );
          })}
        </motion.dl>
      </div>
    </section>
  );
}

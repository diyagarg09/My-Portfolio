import React, { useState } from 'react';
import { Mail, Copy, Check, FileText, ArrowUp } from 'lucide-react';
import { Github, Linkedin, Leetcode } from './icons';
import { profile } from '../data/profile';

const socials = [
  { href: profile.github, label: 'GitHub', Icon: Github },
  { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: profile.leetcode, label: 'LeetCode', Icon: Leetcode },
];

export default function Footer({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer id="contact" className="relative border-t border-line overflow-hidden">
      <div className="absolute inset-0 glow opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-24">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-fg max-w-3xl">
          Hiring for Software, AI or ML roles? <span className="text-gradient accent-serif text-[1.08em]">Let's talk.</span>
        </h2>
        <p className="mt-4 text-muted max-w-xl">
          I'm open to internships and new-grad opportunities. The fastest way to reach me is email — I usually reply within a day.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition">
            <Mail className="w-4 h-4" /> {profile.email}
          </a>
          <button onClick={copyEmail} className="btn-ghost inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition" aria-label="Copy email address">
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button onClick={onOpenResume} className="btn-ghost inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition">
            <FileText className="w-4 h-4" /> Resume
          </button>
        </div>

        <div className="mt-20 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Diya Garg · Built with React, Tailwind &amp; Framer Motion</p>
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="btn-ghost w-10 h-10 rounded-lg inline-flex items-center justify-center transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="btn-ghost w-10 h-10 rounded-lg inline-flex items-center justify-center transition ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

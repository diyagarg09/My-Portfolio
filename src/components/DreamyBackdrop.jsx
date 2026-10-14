import React from 'react';

// Fixed positions so the layout is stable between renders.
const SPARKLES = [
  { top: '12%', left: '8%', size: 14, delay: 0 },
  { top: '22%', left: '82%', size: 18, delay: 0.6 },
  { top: '68%', left: '14%', size: 12, delay: 1.2 },
  { top: '78%', left: '72%', size: 16, delay: 0.3 },
  { top: '40%', left: '92%', size: 10, delay: 1.8 },
  { top: '55%', left: '4%', size: 10, delay: 2.2 },
  { top: '8%', left: '55%', size: 12, delay: 1.5 },
  { top: '88%', left: '40%', size: 14, delay: 0.9 },
  { top: '32%', left: '30%', size: 8, delay: 2.6 },
  { top: '60%', left: '58%', size: 9, delay: 1.1 },
];

export default function DreamyBackdrop({ sparkles = true }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none grain" aria-hidden="true">
      <div className="orb orb-lavender drift-a w-[520px] h-[520px] -top-40 -left-32" />
      <div className="orb orb-pink drift-b w-[460px] h-[460px] top-10 -right-40" />
      <div className="orb orb-peach drift-c w-[380px] h-[380px] bottom-[-160px] left-1/3 opacity-35" />
      {sparkles &&
        SPARKLES.map((s, i) => (
          <span
            key={i}
            className="sparkle"
            style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: `${s.delay}s` }}
          >
            ✦
          </span>
        ))}
    </div>
  );
}

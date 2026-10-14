import React from 'react';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-fg">{title}</h2>
      {subtitle && <p className="mt-3 text-muted leading-relaxed">{subtitle}</p>}
    </div>
  );
}

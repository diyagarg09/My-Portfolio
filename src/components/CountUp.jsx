import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

// Animates the first number inside a string (e.g. "Top 15k", "300+", "8.45") once it scrolls into view.
export default function CountUp({ value, duration = 1.4, enabled = true, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();

  const match = value.match(/\d+(\.\d+)?/);
  const [display, setDisplay] = useState(match && !reduceMotion ? value.replace(match[0], '0') : value);

  useEffect(() => {
    if (!match || !inView || !enabled || reduceMotion) return;
    const target = parseFloat(match[0]);
    const decimals = match[1] ? match[1].length - 1 : 0;
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(value.replace(match[0], v.toFixed(decimals))),
    });
    return () => controls.stop();
  }, [inView, enabled]); // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref}>{display}</span>;
}

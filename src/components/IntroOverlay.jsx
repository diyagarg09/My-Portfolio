import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import DreamyBackdrop from './DreamyBackdrop';

const NAME = 'Diya Garg'.split('');

// Opening reveal: orbs bloom, rings spin, the name blurs into focus with a shimmer, then the curtain lifts.
export default function IntroOverlay({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2300);
    const skip = () => onFinish();
    window.addEventListener('keydown', skip);
    window.addEventListener('pointerdown', skip);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('pointerdown', skip);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink overflow-hidden"
      exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      style={{ clipPath: 'inset(0 0 0% 0)' }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      >
        <DreamyBackdrop />
      </motion.div>

      <motion.div
        className="relative flex flex-col items-center"
        exit={{ scale: 1.15, opacity: 0, filter: 'blur(12px)', transition: { duration: 0.6 } }}
      >
        {/* Spinning light rings */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ring w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] -translate-x-1/2 -translate-y-1/2" />
          <div
            className="ring w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] -translate-x-1/2 -translate-y-1/2"
            style={{ animationDirection: 'reverse', animationDuration: '11s' }}
          />
        </motion.div>

        <motion.p
          className="relative mb-4 text-xs sm:text-sm tracking-[0.45em] uppercase text-accent"
          initial={{ opacity: 0, letterSpacing: '0.8em' }}
          animate={{ opacity: 1, letterSpacing: '0.45em' }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
        >
          ✦ Portfolio ✦
        </motion.p>

        <h1 className="relative font-display font-extrabold tracking-tight text-6xl sm:text-8xl flex drop-shadow-[0_0_35px_rgba(249,168,212,0.35)]">
          {NAME.map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block text-shimmer"
              style={{ width: ch === ' ' ? '0.28em' : undefined }}
              initial={{ opacity: 0, y: 40, rotateX: -80, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.25 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <motion.span
          className="relative mt-6 h-[2px] w-48 rounded-full btn-primary origin-center"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
        />

        <motion.p
          className="relative mt-5 text-sm tracking-[0.3em] uppercase text-muted"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Software · AI · ML
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

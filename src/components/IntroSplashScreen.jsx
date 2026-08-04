import React from 'react';
import { motion } from 'framer-motion';

// Each letter of "Diya Garg" flies in from alternating sides
const NAME = 'Diya Garg'.split('');

export default function IntroSplashScreen({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center select-none overflow-hidden"
      style={{ background: '#faf9f7' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -30,
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {/* Subtle paper texture noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      <div className="relative flex flex-col items-center justify-center gap-2 px-8">

        {/* Small "welcome to my" label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#9ca3af',
          }}
        >
          Welcome to my Portfolio
        </motion.p>

        {/* ── Main name block with pink bar ── */}
        <div className="relative flex items-center justify-center" style={{ marginTop: '6px' }}>

          {/* Pink highlight bar — slides in after letters land */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              left: '-3%',
              right: '-3%',
              top: '50%',
              transform: 'translateY(-40%)',
              height: '50%',
              background: 'linear-gradient(90deg, #f9a8d4 0%, #e879f9 60%, #c084fc 100%)',
              borderRadius: '3px',
              zIndex: 0,
              transformOrigin: 'left center',
            }}
          />

          {/* Letters — each flies in from opposite sides */}
          <h1
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'baseline',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(3.8rem, 13vw, 7.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            {NAME.map((letter, idx) => {
              // Space character renders as-is
              if (letter === ' ') {
                return (
                  <span key={idx} style={{ display: 'inline-block', width: '0.35em' }} />
                );
              }
              // Alternate: even index → from left, odd index → from right
              const fromLeft = idx % 2 === 0;
              return (
                <motion.span
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: fromLeft ? -120 : 120,
                    rotate: fromLeft ? -18 : 18,
                    scale: 0.4,
                  }}
                  animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.2 + idx * 0.08,
                    type: 'spring',
                    stiffness: 130,
                    damping: 13,
                  }}
                  style={{
                    display: 'inline-block',
                    color: '#0f0f0f',
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </h1>

        </div>

        {/* Loading progress bar */}
        <motion.div
          className="overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            width: '140px',
            height: '2px',
            background: '#e5e7eb',
            marginTop: '36px',
          }}
        >
          <motion.div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #a855f7, #ec4899)',
              borderRadius: '9999px',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.3, delay: 1.3, ease: 'easeInOut' }}
            onAnimationComplete={onFinish}
          />
        </motion.div>

      </div>
    </motion.div>
  );
}

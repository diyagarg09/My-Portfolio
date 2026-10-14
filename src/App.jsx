import React, { useState, useCallback } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Competitive from './components/Competitive';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import IntroOverlay from './components/IntroOverlay';

const INTRO_KEY = 'intro-seen';

// Play the intro once per browser session, and never for reduced-motion users.
function shouldPlayIntro() {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return !sessionStorage.getItem(INTRO_KEY);
  } catch {
    return true;
  }
}

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(shouldPlayIntro);
  const openResume = () => setIsResumeOpen(true);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      // storage unavailable (private mode); the intro will simply replay next visit
    }
    setShowIntro(false);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {showIntro && <IntroOverlay onFinish={finishIntro} />}
      </AnimatePresence>

      <div className="min-h-screen bg-ink text-fg flex flex-col">
        <Navbar onOpenResume={openResume} />

        <main className="flex-grow">
          <Hero onOpenResume={openResume} ready={!showIntro} />
          <About />
          <Projects />
          <Skills />
          <Competitive />
        </main>

        <Footer onOpenResume={openResume} />

        <AnimatePresence>
          {isResumeOpen && (
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}

export default App;

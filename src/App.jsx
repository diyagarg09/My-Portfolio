import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Competitive from './components/Competitive';

import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import IntroSplashScreen from './components/IntroSplashScreen';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen text-zinc-900 flex flex-col justify-between selection:bg-pink-100 selection:text-pink-700" style={{ backgroundColor: '#faf9f7' }}>
      {/* Intro Splash Screen on Load */}
      <AnimatePresence>
        {showSplash && (
          <IntroSplashScreen onFinish={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Competitive />
      </main>

      {/* Footer */}
      <Footer />

      {/* Exact Resume Document Modal Overlay */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


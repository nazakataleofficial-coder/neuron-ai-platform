import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Particles } from './components/Particles';
import { Services, Showcase, Stats, Testimonials, Pricing, CTA } from './components/Sections';

export default function App() {
  const [isNightMode, setIsNightMode] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isNightMode]);

  const toggleTheme = () => {
    setIsSwitching(true);
    setTimeout(() => {
      setIsNightMode((prev) => !prev);
      setIsSwitching(false);
    }, 300);
  };

  return (
    <div className={`w-full min-h-screen font-sans flex flex-col items-center relative selection:bg-blue-500/30 transition-colors duration-500 ${isNightMode ? 'bg-[#05070D] text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Background with Blur Overlays */}
      <div className="hero fixed inset-0 pointer-events-none z-0">
        <div className="blur-overlay blur-overlay-top" />
        <div className="blur-overlay blur-overlay-bottom" />
        <video 
          key={isNightMode ? 'night' : 'day'}
          autoPlay 
          muted 
          loop 
          playsInline
          className={`hero-bg bg-front object-cover w-full h-full ${isSwitching ? 'pull-down' : ''}`} 
          style={{ opacity: isNightMode ? 0.8 : 0.6 }}
        >
<source src={isNightMode ? "/Night-Video.mp4" : "/Day-Video.mp4"} type="video/mp4" />
        </video>
      </div>

      <div className="z-10 relative w-full flex flex-col items-center min-h-screen">
        {isNightMode && <Particles />}
        <Navigation isNightMode={isNightMode} toggleTheme={toggleTheme} />

        {/* Main Content Layout */}
        <main className="w-full flex flex-col items-center flex-1 justify-center relative z-20">
          
          {/* Hero Section */}
          <section className="w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-24">
            {/* Hero Artwork Container (70% Focus) */}
            <motion.div 
              className="w-full max-w-[800px] h-[380px] rounded-2xl glass hero-placeholder relative flex items-center justify-center mx-6 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Gentle floating animation wrapper */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full relative flex items-center justify-center"
              >
                {/* Background Artwork */}
                <motion.video 
                  key={isNightMode ? 'night' : 'day'}
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover pointer-events-none" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <source src={isNightMode ? "/Night-Video.mp4" : "/Day-Video.mp4"} type="video/mp4" />
                </motion.video>
              </motion.div>
            </motion.div>

            {/* Hero Text Section */}
            <div className="mt-12 text-center px-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[40px] sm:text-[58px] font-bold tracking-tighter leading-none mb-4"
              >
                Build The Future With AI
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`text-[16px] sm:text-lg max-w-[700px] mx-auto font-light leading-relaxed ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-600'}`}
              >
                Create powerful AI experiences with one intelligent platform. <br className="hidden sm:block" />
                Integrated with next-generation neural models.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex gap-4 justify-center"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-3 font-bold rounded-full text-sm transition-colors ${isNightMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  Get Started
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: isNightMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-3 glass font-semibold rounded-full text-sm transition-colors border ${isNightMode ? 'text-white border-white/20' : 'text-gray-900 border-black/10'}`}
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </div>
          </section>

          <Services isNightMode={isNightMode} />
          <Stats isNightMode={isNightMode} />
          <Showcase isNightMode={isNightMode} />
          <Testimonials isNightMode={isNightMode} />
          <Pricing isNightMode={isNightMode} />
          <CTA isNightMode={isNightMode} />

        </main>

        {/* Footer Details */}
        <footer className={`w-full py-8 px-12 flex flex-col sm:flex-row justify-between items-center text-[11px] tracking-widest uppercase gap-4 sm:gap-0 z-10 border-t ${isNightMode ? 'border-white/10 text-[#BFC7D5]/40' : 'border-black/10 text-gray-400'}`}>
          <div>Optimized for Enterprise</div>
          <div>Powered by Gemini v1.5 Pro</div>
          <div>© 2024 Neuron AI Corp</div>
        </footer>
      </div>
    </div>
  );
}

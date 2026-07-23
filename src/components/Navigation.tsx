import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
  isNightMode: boolean;
  toggleTheme: () => void;
}

export function Navigation({ isNightMode, toggleTheme }: NavigationProps) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[800px] h-12 glass rounded-full flex items-center px-6 justify-between ${!isNightMode ? 'text-gray-900' : 'text-white'}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${isNightMode ? 'bg-white' : 'bg-black'}`}>
          <div className={`w-2 h-2 rounded-full ${isNightMode ? 'bg-black' : 'bg-white'}`}></div>
        </div>
        <span className="font-semibold tracking-tight text-sm">NEURON</span>
      </div>

      {/* Center Links */}
      <div className={`hidden md:flex items-center gap-8 text-[13px] font-medium ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-500'}`}>
        <a href="#" className={`transition-colors ${isNightMode ? 'hover:text-white' : 'hover:text-black'}`}>Home</a>
        <a href="#" className={`transition-colors ${isNightMode ? 'hover:text-white' : 'hover:text-black'}`}>Features</a>
        <a href="#" className={`transition-colors ${isNightMode ? 'hover:text-white' : 'hover:text-black'}`}>Models</a>
        <a href="#" className={`transition-colors ${isNightMode ? 'hover:text-white' : 'hover:text-black'}`}>Pricing</a>
        <a href="#" className={`transition-colors ${isNightMode ? 'hover:text-white' : 'hover:text-black'}`}>Docs</a>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Day/Night Toggle */}
        <button 
          onClick={toggleTheme}
          className={`relative w-12 h-6 rounded-full flex items-center p-1 transition-colors ${isNightMode ? 'bg-white/10' : 'bg-black/10'}`}
        >
          <motion.div 
            className={`w-4 h-4 rounded-full flex items-center justify-center ${isNightMode ? 'bg-white' : 'bg-white shadow-sm'}`}
            animate={{ x: isNightMode ? 0 : 24 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {isNightMode ? (
              <Moon className="w-2.5 h-2.5 text-black" />
            ) : (
              <Sun className="w-2.5 h-2.5 text-yellow-500" />
            )}
          </motion.div>
        </button>

        <button className={`hidden md:block text-[13px] font-medium transition-colors ${isNightMode ? 'text-[#BFC7D5] hover:text-white' : 'text-gray-500 hover:text-black'}`}>
          Sign In
        </button>
        <button className={`text-[13px] font-bold px-4 py-1.5 rounded-full transition-colors ${isNightMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}

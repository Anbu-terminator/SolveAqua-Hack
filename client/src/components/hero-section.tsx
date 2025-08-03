import { motion } from "framer-motion";

interface HeroSectionProps {
  onShowOnSpotModal: () => void;
}

export default function HeroSection({ onShowOnSpotModal }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 sm:mb-6 font-mono animate-neon-pulse text-shadow-strong"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-smart-cities">SolveAquaHack 2025</span> 
        </motion.h1>
        
  
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a 
            href="#register" 
            className="neon-border glassmorphism px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-white font-mono font-semibold hover:bg-smart-cities hover:text-black transition-all duration-300 text-shadow-strong bg-shadow-strong text-base sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.a>
          <motion.button 
            onClick={onShowOnSpotModal}
            className="neon-border glassmorphism px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-white font-mono font-semibold hover:bg-mobility hover:text-white transition-all duration-300 text-shadow-strong bg-shadow-strong text-base sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            OnSpot Registration
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

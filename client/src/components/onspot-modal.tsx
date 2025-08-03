import { motion, AnimatePresence } from "framer-motion";

interface OnSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnSpotModal({ isOpen, onClose }: OnSpotModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="glassmorphism rounded-3xl p-8 m-4 max-w-md w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-times"></i>
            </motion.button>
            
            <div className="text-center">
              <motion.i 
                className="fas fa-info-circle text-6xl text-smart-cities mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              />
              <motion.h3 
                className="text-2xl font-bold text-white mb-6 font-mono text-shadow-strong"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                OnSpot Registration
              </motion.h3>
              <motion.p 
                className="text-white text-lg leading-relaxed text-shadow-strong"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                On Spot Registration is available for only offline students on prior request
              </motion.p>
              <motion.div 
                className="mt-6 pt-6 border-t border-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-100 text-sm text-shadow-strong">
                  Please contact us for more information
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

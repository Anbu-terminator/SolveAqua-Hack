import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div 
          className="glassmorphism rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-white text-lg mb-4 text-shadow-strong"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            © 2025 SolveAqua Hack. Organized by VLGE Institute Private Limited & CT Tech Solutions
          </motion.p>
          <motion.p 
            className="text-gray-100 text-shadow-strong"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            In Collaboration with S.K.P Engineering College
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}

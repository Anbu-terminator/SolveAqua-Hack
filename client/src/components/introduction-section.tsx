import { motion } from "framer-motion";

export default function IntroductionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="glassmorphism rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-8 text-center font-mono text-shadow-strong"
            variants={itemVariants}
          >
            Challenge the <span className="text-smart-cities">Future</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p 
                className="text-xl text-white leading-relaxed mb-6 text-shadow-strong"
                variants={itemVariants}
              >
                <strong>SolveAqua Hack 2025</strong> invites you to tackle urgent challenges affecting our world today.
              </motion.p>
              
              <motion.ul className="space-y-4 text-white text-shadow-strong text-lg" variants={containerVariants}>
                <motion.li className="flex items-start" variants={itemVariants}>
                  <i className="fas fa-city text-smart-cities mr-3 mt-1"></i>
                  Cities are facing issues like pollution, traffic, and poor infrastructure needing smart tech solutions.
                </motion.li>
                <motion.li className="flex items-start" variants={itemVariants}>
                  <i className="fas fa-heartbeat text-healthtech mr-3 mt-1"></i>
                  Healthcare struggles with accessibility, early diagnosis, and digital health integration.
                </motion.li>
                <motion.li className="flex items-start" variants={itemVariants}>
                  <i className="fas fa-leaf text-agritech mr-3 mt-1"></i>
                  Farmers lack access to timely data, fair markets, and modern agricultural tools.
                </motion.li>
                <motion.li className="flex items-start" variants={itemVariants}>
                  <i className="fas fa-bolt text-green-energy mr-3 mt-1"></i>
                  Energy demands are rising, transport systems are outdated, and climate change needs urgent tech action.
                </motion.li>
              </motion.ul>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-7xl md:text-9xl font-bold text-white font-mono animate-bounce-slow text-shadow-strong">
                Are You <br/><span className="text-mobility">Ready?</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

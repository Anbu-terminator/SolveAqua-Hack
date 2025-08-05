import { motion } from "framer-motion";

export default function EvaluationSection() {
  const criteria = [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      color: "text-smart-cities"
    },
    {
      icon: "fas fa-cogs",
      title: "Technical Execution",
      color: "text-healthtech"
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX",
      color: "text-agritech"
    },
    {
      icon: "fas fa-globe-americas",
      title: "Real-world Impact",
      color: "text-green-energy"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center font-mono text-shadow-strong"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-healthtech">Evaluation</span> Criteria
        </motion.h2>
        
        <motion.div 
          className="glassmorphism rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-2xl text-white mb-8 text-center text-shadow-strong"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build a working website, app, or automation Hardware Simulation software based on the chosen domain within{' '}
            <span className="text-agritech font-bold">6 hours</span>.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteria.map((criterion, index) => (
              <motion.div
                key={criterion.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.i 
                  className={`${criterion.icon} text-4xl ${criterion.color} mb-4`}
                  whileHover={{ scale: 1.1 }}
                />
                <h3 className="text-xl font-bold text-white font-mono text-shadow-strong">{criterion.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

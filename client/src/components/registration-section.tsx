import { motion } from "framer-motion";

export default function RegistrationSection() {
  return (
    <section id="register" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center font-mono text-shadow-strong"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-smart-cities">Register</span> Now
        </motion.h2>
        
        <motion.div 
          className="glassmorphism rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-2xl text-white mb-6 text-shadow-strong">
              Ready to build something amazing?
              <span className="block md:inline">Register for SolveAqua Hack 2025!</span>
            </p>
            <p className="text-xl text-gray-100 text-shadow-strong">
              Join the event on Sept 19
              <span className="block sm:inline">and build something amazing!</span>
            </p>
             <p className="text-xl text-gray-100 text-shadow-strong">To Register click the Register Now button or else fill the following form!</p>
          </motion.div>
          <br />
          <motion.a
            href="https://forms.zohopublic.in/solveaquahack1/form/SolveAquaHack/formperma/U1Oh3ce1OMS5BFHzPBiR1TAl1ObMWSAp6zXqQdHSJ6w"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-border glassmorphism px-8 py-3 md:px-10 md:py-4 rounded-full text-white font-mono font-semibold hover:bg-smart-cities hover:text-black transition-all duration-300 text-shadow-strong bg-shadow-strong text-lg flex items-center gap-2 justify-center mx-auto w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-arrow-right"></i>
            Register Now
          </motion.a>
          <br />
          <motion.div 
            className="bg-white rounded-2xl p-4 h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <iframe 
              src="https://forms.zohopublic.in/solveaquahack1/form/SolveAquaHack/formperma/U1Oh3ce1OMS5BFHzPBiR1TAl1ObMWSAp6zXqQdHSJ6w" 
              width="100%" 
              height="800"
              className="min-h-[500px]"
              frameBorder="0"
              scrolling="auto"
              title="SolveAqua Hack 2025 Registration Form"
            />
          </motion.div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-white text-lg text-shadow-strong">
              <i className="fas fa-check-circle text-green-energy mr-2"></i>
              Thank you for your registration! We'll contact you soon with further details.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

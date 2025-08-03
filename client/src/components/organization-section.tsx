import { motion } from "framer-motion";

export default function OrganizationSection() {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="glassmorphism rounded-3xl p-6 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <motion.img 
                src="https://i.postimg.cc/3NFgfCgG/SKP-LOGO-modified.png " 
                alt="S.K.P Engineering College" 
                className="h-20 w-auto animate-float"
                style={{ animationDelay: '2s' }}
                whileHover={{ scale: 1.1 }}
              />
              <div className="text-center">
                <p className="text-white text-2xl font-mono font-bold text-shadow-strong mb-3">SKP ENGINEERING COLLEGE</p>
                <p className="text-white text-lg font-mono text-shadow-strong mb-2">Approved by AICTE & Affiliated to Anna University</p>
                <p className="text-white text-lg font-mono text-shadow-strong mb-4">
                  NH 66, Somasipadi Post, Chinnakangiyanur, Tiruvannamalai, Tamil Nadu 606611
                </p>
                <motion.a 
                  href="https://skpec.edu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-white transition-all duration-300 text-lg font-mono font-semibold animate-pulse shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  style={{ animationDelay: '1s' }}
                >
                  Visit SKP Engineering College Website
                </motion.a>
              </div>
            </div>

          <div className="flex flex-col space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <motion.img 
                src="https://i.postimg.cc/j26DCM8F/VL-modified.png" 
                alt="VLGE Institute" 
                className="h-24 w-auto animate-float"
                whileHover={{ scale: 1.1 }}
              />
              <div className="text-center">
                <p className="text-white text-lg md:text-xl lg:text-2xl font-mono text-shadow-strong font-semibold mb-4 px-4">
                  Organized by VLGE Institute Private Limited & CT Tech Solutions
                </p>
                <motion.a 
                  href="https://vlgegroups.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-white transition-all duration-300 text-lg font-mono mx-2 font-semibold animate-pulse shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  Visit VLGE Website
                </motion.a>
                <span className="text-white mx-2">|</span>
                <motion.a 
                  href="https://ctsolutionss.info/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-white transition-all duration-300 text-lg font-mono mx-2 font-semibold animate-pulse shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  style={{ animationDelay: '0.5s' }}
                >
                  Visit CT Tech Website
                </motion.a>
              </div>
              <motion.div className="flex items-center justify-center p-4 md:p-6">
                <motion.img
                  src="https://i.postimg.cc/xTgvK5jD/favicon-modified.png "
                  alt="CT Tech Solutions"
                  className="h-16 md:h-24 w-auto animate-float"
                  style={{ animationDelay: '1s' }}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
            </div>
            
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}

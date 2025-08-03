import { motion } from "framer-motion";

export default function ContactSection() {
  const phoneNumbers = [
    { number: "+91 77081 15754", color: "text-smart-cities" },
    { number: "+91 97901 55280", color: "text-healthtech" },
    { number: "+91 86108 97886", color: "text-agritech" },
    { number: "+91 93451 92017", color: "text-green-energy" }
  ];

  const emails = [
    { email: "bastoffcial@gmail.com", color: "text-mobility" },
    { email: "valuelearn.in@gmail.com", color: "text-smart-cities" }
  ];

  const whatsappNumbers = [
    { number: "+91 77081 15754", link: "https://wa.me/917708115754" },
    { number: "+91 97901 55280", link: "https://wa.me/919790155280" }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center font-mono text-shadow-strong"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-healthtech">Contact</span> Us
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="glassmorphism rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: 1 }}
            animate={{ 
              y: [0, -5, 0],
              transition: { repeat: Infinity, duration: 3 }
            }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-mono text-shadow-strong">Phone Numbers</h3>
            <div className="space-y-4">
              {phoneNumbers.map((phone, index) => (
                <motion.a 
                  key={phone.number}
                  href={`tel:${phone.number}`} 
                  className={`flex items-center text-white hover:${phone.color} transition-colors text-shadow-strong text-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <i className={`fas fa-phone ${phone.color} mr-3`}></i>
                  {phone.number}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="glassmorphism rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            animate={{ 
              y: [0, 5, 0],
              transition: { repeat: Infinity, duration: 3.5 }
            }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-mono text-shadow-strong">Email & WhatsApp</h3>
            <div className="space-y-4">
              {emails.map((email, index) => (
                <motion.a 
                  key={email.email}
                  href={`mailto:${email.email}`} 
                  className={`flex items-center text-white hover:${email.color} transition-colors text-shadow-strong text-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <i className={`fas fa-envelope ${email.color} mr-3`}></i>
                  {email.email}
                </motion.a>
              ))}
              
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-xl font-bold text-white mb-4 font-mono text-shadow-strong">WhatsApp</h4>
                {whatsappNumbers.map((whatsapp, index) => (
                  <motion.a 
                    key={whatsapp.number}
                    href={whatsapp.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-green-400 transition-colors mb-2 text-shadow-strong text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <i className="fab fa-whatsapp text-green-400 mr-3"></i>
                    {whatsapp.number}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

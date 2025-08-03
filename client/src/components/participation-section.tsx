import { motion } from "framer-motion";

export default function ParticipationSection() {
  const teamInfo = [
    {
      icon: "fas fa-users",
      text: "Team Size: 1 to 3 members",
      color: "text-smart-cities"
    },
    {
      icon: "fas fa-user",
      text: "Minimum 1 member required",
      color: "text-healthtech"
    },
    {
      icon: "fas fa-user-friends",
      text: "Maximum 3 members allowed",
      color: "text-agritech"
    }
  ];

  const registrationInfo = [
    {
      icon: "fas fa-rupee-sign",
      text: "Registration Fee: ₹300 per person",
      color: "text-green-energy"
    },
    {
      icon: "fas fa-laptop",
      text: "Registration Mode: Via Filling Registration Form",
      color: "text-mobility"
    },
    {
      icon: "fas fa-qrcode",
      text: "Scan QR Code to register",
      color: "text-smart-cities"
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
          How to <span className="text-mobility">Participate</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="glassmorphism rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-mono text-shadow-strong">Team Formation</h3>
            <ul className="space-y-4 text-white text-shadow-strong text-lg">
              {teamInfo.map((item, index) => (
                <motion.li 
                  key={item.text}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <i className={`${item.icon} ${item.color} mr-3`}></i>
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="glassmorphism rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-mono text-shadow-strong">Registration Details</h3>
            <ul className="space-y-4 text-white text-shadow-strong text-lg">
              {registrationInfo.map((item, index) => (
                <motion.li 
                  key={item.text}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <i className={`${item.icon} ${item.color} mr-3`}></i>
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

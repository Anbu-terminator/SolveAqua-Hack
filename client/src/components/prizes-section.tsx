import { motion } from "framer-motion";

export default function PrizesSection() {
  const prizes = [
    {
      icon: "fas fa-trophy",
      title: "Cash Prize Pool",
      amount: "₹5,000",
      description: "For winning teams",
      color: "text-yellow-400"
    },
    {
      icon: "fas fa-briefcase",
      title: "Internships",
      details: ["Stipend Internships", "Free Internships"],
      description: "For top projects",
      color: "text-smart-cities"
    },
    {
      icon: "fas fa-certificate",
      title: "Certificates",
      details: ["Participation Certificate"],
      description: "For all teams",
      color: "text-agritech"
    }
  ];

  return (
    <section id="prizes" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center font-mono text-shadow-strong"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-energy">Prize Pool</span> & Benefits
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.title}
              className="glassmorphism rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.i 
                className={`${prize.icon} text-6xl ${prize.color} mb-4 animate-glow`}
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="text-3xl font-bold text-white mb-4 font-mono text-shadow-strong">{prize.title}</h3>
              
              {prize.amount && (
                <p className="text-4xl font-bold text-yellow-400 mb-2">{prize.amount}</p>
              )}
              
              {prize.details && (
                <div className="mb-2">
                  {prize.details.map((detail, idx) => (
                    <p key={idx} className={`text-lg ${detail.includes('Stipend Internships') || detail.includes('Participation Certificate') || detail.includes('S.K.P Engineering College') ? 'text-yellow-300' : idx === 0 ? 'text-smart-cities' : 'text-healthtech'} mb-1`}>
                      {detail}
                    </p>
                  ))}
                </div>
              )}
              
              <p className="text-gray-100 text-shadow-strong text-lg">{prize.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

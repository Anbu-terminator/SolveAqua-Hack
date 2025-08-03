import { motion } from "framer-motion";

export default function DatesSection() {
  const leftDates = [
    {
      icon: "fas fa-calendar-plus",
      title: "Registration Starts",
      date: "August 4, 2025",
      color: "text-smart-cities"
    },
    {
      icon: "fas fa-calendar-times",
      title: "Registration Closes",
      date: "September 14, 2025",
      color: "text-healthtech"
    },
    {
      icon: "fas fa-calendar-check",
      title: "Hackathon Date",
      date: "September 19, 2025 (Friday)",
      color: "text-agritech"
    }
  ];

  const rightDates = [
    {
      icon: "fas fa-clock",
      title: "Time",
      date: "9:30 AM – 4:00 PM IST",
      color: "text-green-energy"
    },
    {
      icon: "fas fa-globe",
      title: "Mode",
      date: "Hybrid (Online + Offline)",
      color: "text-mobility"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Venue",
      date: "S.K.P Engineering College",
      color: "text-smart-cities"
    }
  ];

  return (
    <section id="dates" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center font-mono text-shadow-strong"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Important <span className="text-mobility">Dates</span>
        </motion.h2>
        
        <motion.div 
          className="glassmorphism rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {leftDates.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <i className={`${item.icon} text-2xl ${item.color}`}></i>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono text-shadow-strong">{item.title}</h3>
                    <p className={`${item.color} text-shadow-strong text-lg`}>{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-6">
              {rightDates.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <i className={`${item.icon} text-2xl ${item.color}`}></i>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono text-shadow-strong">{item.title}</h3>
                    <p className={`${item.color} text-shadow-strong text-lg`}>{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

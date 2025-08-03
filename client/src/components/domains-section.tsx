import { motion } from "framer-motion";
import { useState } from "react";

export default function DomainsSection() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const domains = [
    {
      id: "smart-cities",
      icon: "fas fa-city",
      title: "Smart & Sustainable Cities",
      description: "Building intelligent urban solutions for tomorrow's cities",
      color: "text-smart-cities",
      ring: "ring-smart-cities"
    },
    {
      id: "healthtech",
      icon: "fas fa-heartbeat",
      title: "HealthTech & Bio-Innovation",
      description: "Revolutionizing healthcare through digital innovation",
      color: "text-healthtech",
      ring: "ring-healthtech"
    },
    {
      id: "agritech",
      icon: "fas fa-leaf",
      title: "AgriTech & Rural Empowerment",
      description: "Empowering farmers with modern technology solutions",
      color: "text-agritech",
      ring: "ring-agritech"
    },
    {
      id: "green-energy",
      icon: "fas fa-bolt",
      title: "Green Energy & Climate Action",
      description: "Sustainable energy solutions for climate change",
      color: "text-green-energy",
      ring: "ring-green-energy"
    },
    {
      id: "mobility",
      icon: "fas fa-car",
      title: "Mobility, Transport & Automotive",
      description: "Next-generation transportation and mobility solutions",
      color: "text-mobility",
      ring: "ring-mobility"
    }
  ];

  const handleDomainClick = (domainId: string) => {
    setActiveDomain(domainId);
    setTimeout(() => setActiveDomain(null), 1000);
  };

  return (
    <section id="domains" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center font-mono text-shadow-strong"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Choose Your <span className="text-agritech">Domain</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              className={`domain-card glassmorphism rounded-2xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer ${
                activeDomain === domain.id ? `ring-4 ${domain.ring}` : ''
              }`}
              onClick={() => handleDomainClick(domain.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <motion.i 
                  className={`${domain.icon} text-6xl ${domain.color} mb-4 group-hover:animate-glow`}
                  whileHover={{ scale: 1.1 }}
                />
                <h3 className="text-3xl font-bold text-white mb-4 font-mono text-shadow-strong">{domain.title}</h3>
                <p className="text-gray-100 text-shadow-strong text-lg">{domain.description}</p>
              </div>
              
              {activeDomain === domain.id && (
                <motion.div
                  className="absolute inset-0 rounded-2xl animate-ping opacity-30"
                  style={{ backgroundColor: `var(--${domain.id.replace('-', '-')})` }}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  exit={{ scale: 1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", color: "hover:text-smart-cities" },
    { href: "#about", label: "About", color: "hover:text-healthtech" },
    { href: "#domains", label: "Domains", color: "hover:text-agritech" },
    { href: "#prizes", label: "Prizes", color: "hover:text-green-energy" },
    { href: "#dates", label: "Dates", color: "hover:text-mobility" },
    { href: "#register", label: "Register", color: "hover:text-smart-cities" },
    { href: "#contact", label: "Contact", color: "hover:text-healthtech" },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 glassmorphism transition-all duration-300 ${
        scrolled ? 'bg-opacity-95' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`navbar-item text-white ${item.color} transition-colors duration-300 font-mono`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          
          <button 
            className="md:hidden text-white text-xl p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block text-white ${item.color} transition-colors duration-300 font-mono`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

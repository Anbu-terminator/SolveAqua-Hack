import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import IntroductionSection from "@/components/introduction-section";
import DomainsSection from "@/components/domains-section";
import PrizesSection from "@/components/prizes-section";
import DatesSection from "@/components/dates-section";
import EvaluationSection from "@/components/evaluation-section";
import ParticipationSection from "@/components/participation-section";
import RegistrationSection from "@/components/registration-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import OnSpotModal from "@/components/onspot-modal";
import ParticleBackground from "@/components/particle-background";
import FloatingOrbs from "@/components/floating-orbs";
import OrganizationSection from "@/components/organization-section";


export default function Home() {
  const [showOnSpotModal, setShowOnSpotModal] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ParticleBackground />
      <FloatingOrbs />
      <Navbar />
      
      <main>
        <HeroSection onShowOnSpotModal={() => setShowOnSpotModal(true)} />
        <OrganizationSection />
        <IntroductionSection />
        <DomainsSection />
        <PrizesSection />
        <DatesSection />
        <EvaluationSection />
        <ParticipationSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      <OnSpotModal 
        isOpen={showOnSpotModal}
        onClose={() => setShowOnSpotModal(false)}
      />
    </div>
  );
}

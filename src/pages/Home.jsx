// src/pages/Home.jsx
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PhotographySection } from "@/components/PhotographySection"; // Import the new section
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PhotographySection /> {/* Add the new photography section */}
      <ContactSection />
    </div>
  );
};

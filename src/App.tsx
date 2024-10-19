import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import ProfileCard from './components/ProfileCard';
import IntroBox from './components/IntroBox';
import SkillsSection from './components/SkillsSection';
import { Timeline } from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FloatingDock  from './components/FloatingDock'; // Correctly importing the FloatingDock component
import Achievements from './components/Achievements';
import { FaHome, FaClipboardList, FaCertificate, FaTrophy, FaUserGraduate, FaEnvelope } from 'react-icons/fa';

const dockItems = [
  { title: "Home", icon: <FaHome />, href: "#" },
  { title: "Skill Set", icon: <FaClipboardList />, href: "#skills" },
  { title: "Timeline", icon: <FaTrophy />, href: "#timeline" },
  { title: "Certificates", icon: <FaCertificate />, href: "#certificates" },
  { title: "Achievements", icon: <FaUserGraduate />, href: "#achievements" },
  { title: "Contact Me", icon: <FaEnvelope />, href: "#contact" },
];

const App: React.FC = () => (
  <div className="relative min-h-screen bg-black text-white overflow-hidden">
    <AnimatedBackground />
    <div className="relative z-10 container mx-auto p-8">
      <ProfileCard />
      <IntroBox />
      <SkillsSection />
      <Timeline />
      <Certifications />
      <Achievements />
      <Contact />
    </div>
    <FloatingDock />
  </div>
);

export default App;

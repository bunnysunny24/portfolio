import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import ProfileCard from './components/ProfileCard';
import IntroBox from './components/IntroBox';
import SkillsSection from './components/SkillsSection';
import { Timeline } from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { FloatingDockDemo } from './components/FloatingDockDemo';
import Achievements from './components/Achievements';

const App: React.FC = () => {
  console.log("App is rendering");

  return (
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

      {/* Ensure Floating Dock is rendered at the bottom */}
      <FloatingDockDemo />
    </div>
  );
};

export default App;

import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import ProfileCard from './components/ProfileCard';
import IntroBox from './components/IntroBox';
import SkillsSection from './components/SkillsSection';
import { Timeline } from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FloatingDock from './components/FloatingDock';

const App: React.FC = () => (
  <div className="relative min-h-screen bg-black text-white overflow-hidden">
    <AnimatedBackground />
    <div className="relative z-10 container mx-auto p-8">
      <ProfileCard />
      <IntroBox />
      <SkillsSection />
      <Timeline />
      <Certifications />
      <Contact />
    </div>
    <FloatingDock />
  </div>
);

export default App;

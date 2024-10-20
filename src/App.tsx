import React, { useRef } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import IntroBox from './components/IntroBox';
import ProfileCard from './components/ProfileCard';
import SkillsSection from './components/SkillsSection';
import { Timeline } from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { FloatingDockDemo } from './components/FloatingDockDemo';
import Achievements from './components/Achievements';

const App: React.FC = () => {
  console.log("App is rendering");

  // Create refs for each section
  const profileRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto p-8">
        <div ref={profileRef}><ProfileCard /></div>
        <div><IntroBox /></div> {/* Directly rendering IntroBox */}
        <div ref={skillsRef}><SkillsSection /></div>
        <div ref={timelineRef}><Timeline /></div>
        <div ref={certificationsRef}><Certifications /></div>
        <div ref={achievementsRef}><Achievements /></div>
        <div ref={contactRef}><Contact /></div>
      </div>

      {/* Ensure Floating Dock is rendered at the bottom */}
      <FloatingDockDemo 
        profileRef={profileRef}
        skillsRef={skillsRef}
        timelineRef={timelineRef}
        certificationsRef={certificationsRef}
        achievementsRef={achievementsRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default App;

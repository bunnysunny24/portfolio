import React from 'react';
import FloatingDock from '../ui/floating-dock';
import {
  IconHome,
  IconSkills,
  IconTimeline,
  IconCertificate,
  IconAchievements,
  IconContact
} from './icons';

interface FloatingDockDemoProps {
  profileRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  timelineRef: React.RefObject<HTMLDivElement>;
  certificationsRef: React.RefObject<HTMLDivElement>;
  achievementsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const FloatingDockDemo: React.FC<FloatingDockDemoProps> = ({
  profileRef,
  skillsRef,
  timelineRef,
  certificationsRef,
  achievementsRef,
  contactRef
}) => {
  const links = [
    {
      title: "Home",
      icon: <IconHome />,
      scrollTo: () => profileRef.current?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: "Skills",
      icon: <IconSkills />,
      scrollTo: () => skillsRef.current?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: "Timeline",
      icon: <IconTimeline />,
      scrollTo: () => timelineRef.current?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: "Certifications",
      icon: <IconCertificate />,
      scrollTo: () => certificationsRef.current?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: "Achievements",
      icon: <IconAchievements />,
      scrollTo: () => achievementsRef.current?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: "Contact",
      icon: <IconContact />,
      scrollTo: () => contactRef.current?.scrollIntoView({ behavior: 'smooth' }),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center mb-4">
      <FloatingDock
        mobileClassName="translate-y-20" // Only for demo purposes
        items={links.map(link => ({
          ...link,
          onClick: (e: React.MouseEvent) => {
            e.preventDefault(); // Prevent default anchor behavior
            link.scrollTo(); // Call the scroll function
          }
        }))}
      />
    </div>
  );
};

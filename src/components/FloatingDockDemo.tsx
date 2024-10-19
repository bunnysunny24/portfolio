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

export const FloatingDockDemo: React.FC = () => {
  const links = [
    {
      title: "Home",
      icon: <IconHome />,
      href: "#home",
    },
    {
      title: "Skills",
      icon: <IconSkills />,
      href: "#skills",
    },
    {
      title: "Timeline",
      icon: <IconTimeline />,
      href: "#timeline",
    },
    {
      title: "Certifications",
      icon: <IconCertificate />,
      href: "#certifications",
    },
    {
      title: "Achievements",
      icon: <IconAchievements />,
      href: "#achievements",
    },
    {
      title: "Contact",
      icon: <IconContact />,
      href: "#contact",
    },
  ];

  // Log the links before returning JSX
  console.log("FloatingDock links: ", links);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center mb-4">
      <FloatingDock
        mobileClassName="translate-y-20" // Only for demo purposes
        items={links}
      />
    </div>
  );
};

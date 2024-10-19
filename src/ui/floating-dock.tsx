// src/ui/floating-dock.tsx
import React, { useState } from 'react';
import './floating-dock.css'; 

interface FloatingDockProps {
  items: {
    title: string;
    icon: JSX.Element;
    href: string;
  }[];
  mobileClassName?: string; 
}

const FloatingDock: React.FC<FloatingDockProps> = ({ items, mobileClassName }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={`floating-dock ${mobileClassName}`}>
            {items.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    title={item.title}
                    onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                    onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
                    style={{
                        transform: hoveredIndex === index ? 'scale(1.5)' : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1 ? 'scale(1.2)' : 'scale(1)',
                        opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6 // Dim unhovered icons
                    }}
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default FloatingDock;

import React from 'react';
import './floating-dock.css'; 

interface FloatingDockProps {
  items: {
    title: string;
    icon: JSX.Element;
    onClick: (e: React.MouseEvent) => void; // Function to handle click
  }[];
  mobileClassName?: string; 
}

const FloatingDock: React.FC<FloatingDockProps> = ({ items, mobileClassName }) => {
    return (
        <div className={`floating-dock ${mobileClassName}`}>
            {items.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    title={item.title}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      item.onClick(e); // Call the onClick function
                    }}
                    role="button" 
                    tabIndex={0} // Make it focusable for keyboard users
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        item.onClick(e as any); // Trigger onClick on Enter or Space key
                      }
                    }}
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default FloatingDock;

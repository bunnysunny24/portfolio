import React from 'react';
import './floating-dock.css'; 

interface FloatingDockProps {
  items: {
    title: string;
    icon: JSX.Element;
    onClick: (e: React.MouseEvent) => void; // Changed href to onClick
  }[];
  mobileClassName?: string; 
}

const FloatingDock: React.FC<FloatingDockProps> = ({ items, mobileClassName }) => {
    return (
        <div className={`floating-dock ${mobileClassName}`}>
            {items.map((item, index) => (
                <a
                    key={index}
                    href="#" // Can still keep this for accessibility
                    title={item.title}
                    onClick={item.onClick} // Use onClick from props
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default FloatingDock;

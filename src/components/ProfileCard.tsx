"use client";

import { cn } from "../lib/utils"; // Ensure the path is correct
import React, { createContext, useState, useRef } from "react";

// Create context for mouse enter state
const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

// CardContainer component
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: (isMouseEntered: boolean) => React.ReactNode; // Expecting a function as children
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
          marginTop: "50px", // Keep the margin to move the container down
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className,
            {
              "transform rotate-2 hover:scale-105": isMouseEntered, // Add hover effects for container
            }
          )}
        >
          {children(isMouseEntered)} {/* Pass the hover state to children */}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// CardBody component
export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("h-60 w-full", className)}> {/* Decrease height */}
      {children}
    </div>
  );
};

// CardItem component
export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Tag className={cn("w-full transition duration-200 ease-linear", className)} {...rest}>
      {children}
    </Tag>
  );
};

// ProfileCard component
const ProfileCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false); // New state for hover effect

  return (
    <CardContainer>
      {(isMouseEntered) => ( // Receive isMouseEntered as a parameter
        <CardBody>
          <CardItem>
            <div
              className="bg-gray-800 bg-opacity-80 h-80 w-[1000px] mx-auto -mt-16 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-between"
              style={{
                backgroundColor: "rgba(40, 40, 40, 0.8)", // Set the dark background with transparency
              }}
            >
              {/* Text Box */}
              <div className="flex flex-col items-start justify-center h-full p-6">
                <div 
                  onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative" // Use a relative wrapper to handle the hover state
                >
                  <h1 className="text-4xl font-bold text-white mb-2 transition-opacity duration-200 ease-in-out">
                    {isHovered ? "Hello, I'm bunnysunny24" : "Hello, I'm Dachapalli Bhavashesh"}
                  </h1>
                  <p className="text-2xl text-gray-300 mb-2 transition-opacity duration-200 ease-in-out">
                    Welcome to my portfolio!
                  </p>
                  <p className="text-lg text-gray-400 transition-opacity duration-200 ease-in-out">
                    I am an undergraduate student pursuing a degree in Computer Science and Engineering. Passionate about technology, I specialize in full-stack development, blending creativity with technical expertise to build innovative solutions.
                  </p>
                </div>
              </div>

              {/* Image on the right */}
              <div className="flex-shrink-0 mr-8">
                <img 
                  src="https://i.ibb.co/qjtb1BG/BNY-SOMA9901-Copy.jpg" 
                  alt="Dachapalli Bhavashesh" 
                  className={`h-72 rounded-lg object-cover transition-transform duration-200 ease-in-out ${isMouseEntered ? 'scale-105 rotate-6' : 'scale-100 rotate-0'}`}
                />
              </div>
            </div>
          </CardItem>
        </CardBody>
      )}
    </CardContainer>
  );
};

export default ProfileCard; // Ensure default export

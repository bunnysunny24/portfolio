"use client";

import { cn } from "../lib/utils"; // Ensure the path is correct
import React, { createContext, useState, useContext, useRef } from "react";

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
    <div className={cn("h-80 w-full", className)}> {/* Decrease height */ }
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
  return (
    <CardContainer>
      {(isMouseEntered) => ( // Receive isMouseEntered as a parameter
        <CardBody>
          <CardItem>
            <div
              className="bg-white bg-opacity-50 h-80 w-[1000px] mx-auto -mt-16 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)", // Set the white background with transparency
              }}
            >
              {/* Text Box */}
              <div className="flex flex-col items-center justify-center h-full p-6">
                <h1 className={`text-2xl font-bold text-blue-700 mb-2 transition-transform duration-200 ease-in-out ${isMouseEntered ? "rotate-[-6deg]" : "rotate-0"}`}>
                  I'm Dachapalli Bhavashesh
                </h1>
                <p className={`text-lg text-gray-800 transition-transform duration-200 ease-in-out ${isMouseEntered ? "rotate-[-6deg]" : "rotate-0"}`}>
                  Welcome to my portfolio!
                </p>
              </div>
            </div>
          </CardItem>
        </CardBody>
      )}
    </CardContainer>
  );
};

export default ProfileCard; // Ensure default export

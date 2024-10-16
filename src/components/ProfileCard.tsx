"use client";

import { cn } from "../lib/utils"; // Ensure the path is correct
import React, { createContext, useState, useContext, useRef } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
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
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("h-96 w-full", className)}>
      {children}
    </div>
  );
};

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

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

// New ProfileCard component
const ProfileCard: React.FC = () => {
  return (
    <CardContainer>
      <CardBody>
        <CardItem>
          <div
            className="bg-white bg-opacity-50 h-96 w-[1200px] mx-auto -mt-16 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)", // Set the white background with transparency
            }}
          >
            {/* Additional content can go here */}
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ProfileCard; // Ensure default export

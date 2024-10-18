"use client"; // if you are using Next.js with client components
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "../lib/utils"; // Adjust the path if necessary

const Achievements: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const achievements = [
    {
      title: "Achievement 1: Full Stack Web Development",
      description: "Successfully completed a full stack web development project that included:",
      points: [
        "Built a responsive front-end using React and Tailwind CSS.",
        "Developed a RESTful API with Node.js and Express.",
        "Implemented user authentication and authorization.",
      ],
    },
    {
      title: "Achievement 2: Data Science Certification",
      description: "Earned a certification in Data Science that involved:",
      points: [
        "Completed coursework in Python for data analysis and machine learning.",
        "Worked on projects involving data visualization with Matplotlib and Seaborn.",
        "Gained hands-on experience with machine learning algorithms and model evaluation.",
      ],
    },
    {
      title: "Achievement 3: Open Source Contributor",
      description: "Contributed to several open source projects, including:",
      points: [
        "Fixed bugs and implemented new features in a popular JavaScript library.",
        "Participated in code reviews and provided feedback to other contributors.",
        "Gained experience collaborating with developers from around the world.",
      ],
    },
  ];

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "mx-auto w-full bg-gray-800 relative rounded-2xl overflow-hidden p-6 mb-6" // Whitish-black background
      )}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.1),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden" // Adjusted gradient for a subtler effect
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <div className="h-full px-4 py-20">
          <h2 className="text-lg font-semibold mb-4 text-white">Achievements</h2> {/* White text for the title */}
          <ul className="list-disc list-inside text-gray-300">
            {achievements.map((ach, index) => (
              <li key={index} className="mb-4">
                <strong className="text-white">{ach.title}</strong> {/* Title in white for better visibility */}
                <p>{ach.description}</p>
                <ul className="list-disc list-inside ml-5">
                  {ach.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <Noise />
        </div>
      </div>
    </motion.section>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};

export default Achievements;

"use client"; // if you are using Next.js with client components
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "../lib/utils"; // Adjust the path if necessary

const Achievements: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const achievements = [
    {
      title: "Vibeout",
      description: "Developed an application that analyzes users' emotions through facial expression detection and suggests tailored workout routines and nutrition.",
      points: [
        "Used AI and ML to train a model for scanning facial expressions and voice details.",
        "Employed FastAPI and Google API along with other APIs to process requests.",
        "Utilized React framework and Tailwind CSS for styling to create the web application.",
        "For future implementations, will also attach a band for variable things.",
      ],
      link: "https://vibeout-alpha.vercel.app/",
    },
    {
      title: "Survival Game",
      description: "Created a game that tracks user IP addresses and enhances player engagement through competitive features.",
      points: [
        "Implemented a leaderboard to track player scores.",
        "Added user authentication for personalized experiences.",
        "Introduced dynamic game environments for better engagement.",
      ],
      link: "https://os-project-p4gchfbc0-krish-kumars-projects-cfa5e03c.vercel.app/",
    },
    {
      title: "Food Waste Consumption App",
      description: "An app that checks wasted food and gives it to NGOs for distribution to those in need.",
      points: [
        "Utilized Java and Swing for app development.",
        "Integrated Maps API for location services.",
        "Connected to MySQL database for data management.",
      ],
    },
    {
      title: "Redbull Hackathon Winner",
      description: "We developed a project called Vibeout and won the hackathon.",
      points: [
        "Collaborated with a team of developers.",
        "Showcased innovative solutions for emotional wellness.",
        "Received recognition for outstanding project presentation.",
      ],
    },
    {
      title: "Sih All India Hackathon",
      description: "Qualified for the internals and waiting for the next round results.",
      points: [
        "Demonstrated exceptional problem-solving skills.",
        "Collaborated with cross-functional teams.",
      ],
    },
    {
      title: "Other Hackathons",
      description: "Participated in various other hackathons held at our university and other universities.",
      points: [
        "Gained experience in real-world problem-solving.",
        "Networked with industry professionals and peers.",
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

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
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
        "mx-auto w-full bg-gray-800 relative rounded-2xl overflow-hidden p-6 mb-6"
      )}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.1),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <div className="h-full px-4 py-20">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">Achievements</h2>
          <ul className="list-disc list-inside text-gray-300">
            {achievements.map((ach, index) => (
              <li key={index} className="mb-4">
                <strong className="text-white">{ach.title}</strong>
                <p>{ach.description}</p>
                <ul className="list-disc list-inside ml-5">
                  {ach.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                {ach.link && (
                  <button
                    onClick={() => handleRedirect(ach.link)}
                    className="mt-2 text-white underline hover:text-blue-400 z-10" // Added z-index for button
                    style={{ pointerEvents: "auto" }} // Ensure pointer events are enabled
                  >
                    Visit Link
                  </button>
                )}
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

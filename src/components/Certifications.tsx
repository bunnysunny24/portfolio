"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cert1 from "../cert1.jpeg";
import cert2 from "../cert2.jpeg";

const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<number | null>(null);

  const certifications = [
    {
      title: "Certification 1",
      description: "This certification validates my skills in React and modern JavaScript frameworks.",
      image: cert1,
    },
    {
      title: "Certification 2",
      description: "This certification demonstrates my proficiency in web development and design principles.",
      image: cert2,
    },
    // Add more certifications as needed
  ];

  const handleOpenModal = (index: number) => {
    setActiveCert(index);
  };

  const handleCloseModal = () => {
    setActiveCert(null);
  };

  return (
    <div className="p-6 bg-black text-white">
      <h2 className="text-lg font-semibold mb-4">Certifications</h2>
      <div className="flex flex-col gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-4 flex items-center justify-between">
            {/* Image on the left */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-32 h-32 object-cover mr-4" // Set the width and height of the image
            />
            <div className="flex-grow"> {/* Allows the title to take remaining space */}
              <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
            </div>
            {/* Button on the right */}
            <button
              onClick={() => handleOpenModal(index)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-green-600" // Rounded edges for the button
            >
              Open
            </button>
          </div>
        ))}
      </div>

      {/* Modal for displaying certificate details */}
      <AnimatePresence>
        {activeCert !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-lg p-6 max-w-lg mx-4"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={certifications[activeCert].image}
                alt={certifications[activeCert].title}
                className="w-full h-48 rounded-lg object-cover mb-4"
              />
              <h4 className="font-semibold text-lg mb-2">{certifications[activeCert].title}</h4>
              <p className="text-sm text-neutral-300 mb-4">{certifications[activeCert].description}</p>
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-red-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;

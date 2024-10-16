import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect'; // Adjust the path if necessary

const IntroBox: React.FC = () => {
  console.log("IntroBox rendered"); // Log to the console when the component renders

  // Combine all the text you want to animate
  const animatedText = `
    Hello 
    I'm a passionate software developer... 
    I enjoy working on web development, AI/ML, and game development.
  `;

  return (
    <div 
      className="p-6 rounded-lg shadow-lg" 
      style={{ 
        position: 'relative', 
        zIndex: 10, 
        backgroundColor: 'rgba(255, 255, 255, 0.5)' // Semi-transparent white
      }} 
    > 
      {/* Outer transparent container */}
      <div 
        className="text-black p-6 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300" 
        style={{ 
          position: 'relative', 
          zIndex: 20, 
          backgroundColor: 'rgba(255, 255, 255, 0.7)' // Semi-transparent white
        }} 
      > 
        {/* Inner transparent container */}
        <h2 className="text-3xl font-bold text-black">About Me</h2> {/* Heading with black text */}
        <TextGenerateEffect words={animatedText.trim()} className="mt-4" /> {/* Animated text */}
      </div>
    </div>
  );
};

export default IntroBox;

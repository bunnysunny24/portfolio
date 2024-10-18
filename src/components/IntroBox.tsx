import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect'; // Adjust the path if necessary

const IntroBox: React.FC = () => {
  console.log("IntroBox rendered"); // Log to the console when the component renders

  // Combine all the text you want to animate
  const animatedText = `Hello 
    I'm a passionate software developer... 
    I enjoy working on web development, AI/ML, and game development.
  `;

  return (
    <div 
      className="p-6 rounded-lg shadow-lg" 
      style={{ 
        position: 'relative', 
        zIndex: 10, 
        backgroundColor: 'rgba(34, 34, 34, 0.8)' // Dark gray background for light black theme
      }} 
    > 
      {/* Outer transparent container */}
      <div 
        className="text-white p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300" 
        style={{ 
          position: 'relative', 
          zIndex: 20, 
          backgroundColor: 'rgba(50, 50, 50, 0.9)' // Slightly lighter dark gray for inner container
        }} 
      > 
        {/* Inner transparent container */}
        <h2 className="text-3xl font-bold">About Me</h2> {/* Heading with white text */}
        <TextGenerateEffect words={animatedText.trim()} className="mt-4" duration={0.5} /> {/* Use duration for speed */}
      </div>
    </div>
  );
};

export default IntroBox;

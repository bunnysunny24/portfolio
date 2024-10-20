import React from 'react';

const IntroBox: React.FC = () => {
  console.log("IntroBox rendered"); // Log to the console when the component renders

  // Combine all the text you want to display
  const animatedText = `Hello! 
    I'm a B.Tech 2nd-year Computer Science Engineering student. 
    I am proficient in English, Telugu, Hindi, and French. 
    I enjoy cooking, playing musical instruments, traveling, and discovering new things. 
    I have experience in web development, AI, and ML. 
    My interests include exploring the world and learning about diverse cultures.
  `;

  return (
    <div 
      className="p-6 rounded-lg shadow-lg" 
      style={{ 
        position: 'relative', 
        zIndex: 10, 
        backgroundColor: 'rgba(45, 45, 45, 0.9)' // Darker gray background to contrast with the outer container
      }} 
    > 
      {/* Outer transparent container */}
      <div 
        className="text-white p-6 rounded-lg shadow-lg hover:bg-gray-500 transition duration-300" 
        style={{ 
          position: 'relative', 
          zIndex: 20, 
          backgroundColor: 'rgba(60, 60, 60, 0.95)' // Slightly lighter dark gray for inner container
        }} 
      > 
        {/* Inner transparent container */}
        <h2 className="text-4xl font-bold text-white">About Me</h2> {/* Increased font size for heading */}
        {/* Text with a lighter shade */}
        <p className="mt-4 text-lg" style={{
          color: '#D1D1D1', // Light gray shade for body text
        }}>
          {animatedText}
        </p>
      </div>
    </div>
  );
};

export default IntroBox;

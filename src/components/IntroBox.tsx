import React from 'react';

const IntroBox: React.FC = () => (
  <div className="bg-black p-6 rounded-lg shadow-lg"> {/* Outer black container */}
    <div className="bg-black text-white p-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"> {/* Inner black container */}
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4">Hello</p> {/* Added sample text */}
      <p className="mt-2">I'm a passionate software developer...</p>
      <p className="mt-2">I enjoy working on web development, AI/ML, and game development.</p>
    </div>
  </div>
);

export default IntroBox;

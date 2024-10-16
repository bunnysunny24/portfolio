import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { BoxGeometry } from 'three'; // Import BoxGeometry

const ProfileCard: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 1.1 : 1,
  });

  return (
    <div className="relative w-64 h-96"> {/* Container for positioning */}
      <Canvas>
        <animated.mesh
          scale={scale}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[3, 4, 0.5]} /> {/* Increased size */}
          <meshStandardMaterial color="black" />
        </animated.mesh>
      </Canvas>
      <img 
        src="https://via.placeholder.com/150" // Placeholder image URL
        alt="Profile"
        className="absolute top-2 left-2 w-20 h-20 rounded-full border-4 border-white" // Image styling
      />
      <div className="absolute bottom-2 left-2 right-2 bg-white text-black p-2 rounded-md text-center">
        <p className="text-sm">Your Name</p> {/* First line of text */}
        <p className="text-sm">Your Title</p> {/* Second line of text */}
      </div>
    </div>
  );
};

export default ProfileCard;

/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css, keyframes } from '@emotion/react';

// Keyframes for a slow, smooth, wavy gradient animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  10% { background-position: 10% 50%; }
  20% { background-position: 20% 50%; }
  30% { background-position: 30% 50%; }
  40% { background-position: 40% 50%; }
  50% { background-position: 50% 50%; }
  60% { background-position: 60% 50%; }
  70% { background-position: 70% 50%; }
  80% { background-position: 80% 50%; }
  90% { background-position: 90% 50%; }
  100% { background-position: 100% 50%; }
`;

const AnimatedBackground: FC = () => {
  return (
    <div
      css={css`
        position: absolute;
        inset: 0;
        z-index: 0;
        background: linear-gradient(270deg, 
          #5b86e5,  /* Soft blue */
          #36d1dc,  /* Aqua green */
          #f2c94c,  /* Soft yellow */
          #ff6a88,  /* Soft red */
          #f7971e,  /* Orange */
          #f66b0e,  /* Warm orange */
          #8E44AD,  /* Purple */
          #F39C12,  /* Bright yellow-orange */
          #1ABC9C,  /* Turquoise */
          #2980B9,  /* Darker blue */
          #E74C3C,  /* Bright red */
          #3498DB   /* Light blue */
        );
        background-size: 800% 800%; /* Increased size for smoother animation */
        animation: ${gradientAnimation} 40s ease-in-out infinite; /* Slow and smooth transition */
      `}
    />
  );
};

export default AnimatedBackground;

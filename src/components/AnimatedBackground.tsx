/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css, keyframes } from '@emotion/react';

// Keyframes for the gradient animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedBackground: FC = () => {
  return (
    <div
      // Use only the `css` prop to handle the styles
      css={css`
        position: absolute;
        inset: 0;
        z-index: 0;
        background: linear-gradient(270deg, #ff7eb3, #ff65a3, #7afcff, #feff9c);
        background-size: 400% 400%;
        animation: ${gradientAnimation} 10s ease infinite;
      `}
    />
  );
};

export default AnimatedBackground;

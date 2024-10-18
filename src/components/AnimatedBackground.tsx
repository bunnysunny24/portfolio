import React, { useRef, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shapes: { x: number; y: number; size: number; speed: number; type: string; color: string }[] = [];

    // Generate random shapes (circles, squares, rectangles)
    const generateShapes = (numShapes: number) => {
      for (let i = 0; i < numShapes; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 10, // random size between 10 and 40
          speed: Math.random() * 2 + 0.5, // random speed between 0.5 and 2.5
          type: ['circle', 'square', 'rectangle'][Math.floor(Math.random() * 3)],
          color: `hsl(${Math.random() * 360}, 100%, 50%)`, // random color
        });
      }
    };

    generateShapes(50); // Create 50 shapes

    // Animate the shapes
    const animateShapes = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        context.fillStyle = shape.color;

        if (shape.type === 'circle') {
          context.beginPath();
          context.arc(shape.x, shape.y, shape.size / 2, 0, Math.PI * 2);
          context.fill();
        } else if (shape.type === 'square') {
          context.fillRect(shape.x, shape.y, shape.size, shape.size);
        } else if (shape.type === 'rectangle') {
          context.fillRect(shape.x, shape.y, shape.size * 1.5, shape.size);
        }

        // Move the shape from left to right
        shape.x += shape.speed;

        // Reset position when it reaches the right end
        if (shape.x - shape.size > canvas.width) {
          shape.x = -shape.size;
        }
      });

      requestAnimationFrame(animateShapes);
    };

    animateShapes();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Hover scatter effect
    const handleMouseMove = () => {
      shapes.forEach((shape) => {
        shape.x += (Math.random() - 0.5) * 20;
        shape.y += (Math.random() - 0.5) * 20;
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: 'black',
      }}
    />
  );
};

export default AnimatedBackground;

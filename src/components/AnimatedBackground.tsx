import React, { useRef, useEffect } from 'react';

class Snowflake {
    x: number;
    y: number;
    z: number;
    radius: number;
    speed: number;
    isStopped: boolean; // New property to check if the snowflake is stopped

    constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.z = Math.random() * 0.5 + 0.5; // z between 0.5 and 1 for depth
        this.radius = Math.random() * 2 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.isStopped = false; // Initially, snowflake is not stopped
    }

    fall(canvasHeight: number, handArea: { x: number; y: number; size: number }): void {
        // Check if snowflake is within the hand area
        const isInHandArea =
            this.x >= handArea.x &&
            this.x <= handArea.x + handArea.size &&
            this.y >= handArea.y &&
            this.y <= handArea.y + handArea.size;

        // If the snowflake is not stopped, update position
        if (!this.isStopped) {
            this.y += this.speed; // Fall at constant speed

            // Reset snowflake if it goes out of bounds
            if (this.y > canvasHeight) {
                this.y = 0;
                this.x = Math.random() * window.innerWidth; // Reset x position randomly
            }
        }

        // Set isStopped to true if within hand area
        this.isStopped = isInHandArea;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius / this.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - this.z * 0.5})`;
        ctx.fill();
    }
}

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const snowflakes: Snowflake[] = [];
    const numSnowflakes = 200;
    let animationId: number | null = null;

    // Use refs to track mouse position
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const handSize = 100; // Size of the hand area

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize(); // Set the initial size of the canvas

        // Create snowflakes
        const createSnowflakes = (num: number) => {
            for (let i = 0; i < num; i++) {
                snowflakes.push(new Snowflake(canvas.width, canvas.height));
            }
        };

        createSnowflakes(numSnowflakes); // Create snowflakes

        // Animate the snowfall
        const animateSnowflakes = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            snowflakes.forEach((snowflake) => {
                snowflake.fall(canvas.height, { x: mouseX.current, y: mouseY.current, size: handSize });
                snowflake.draw(ctx);
            });

            animationId = requestAnimationFrame(animateSnowflakes);
        };

        animateSnowflakes();

        // Handle window resize
        const handleResize = () => {
            setCanvasSize(); // Update canvas size on resize
        };

        // Track mouse movement to update mouse position
        const handleMouseMove = (event: MouseEvent) => {
            mouseX.current = event.clientX - handSize / 2; // Center the hand area
            mouseY.current = event.clientY - handSize / 2; // Center the hand area
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove); // Add mouse move event listener

        return () => {
            if (animationId !== null) {
                cancelAnimationFrame(animationId);
            }
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove); // Clean up mouse move event listener
        };
    }, []); // No dependency on mouse position to avoid re-renders

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

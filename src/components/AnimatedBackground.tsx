import React, { useRef, useEffect } from 'react';

class Snowflake {
    x: number;
    y: number;
    z: number;
    radius: number;
    speed: number;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.z = Math.random() * 0.5 + 0.5; // z between 0.5 and 1 for depth
        this.radius = Math.random() * 2 + 1;
        this.speed = Math.random() * 1 + 0.5;
    }

    fall(canvasHeight: number): void {
        this.y += this.speed / this.z;
        if (this.y > canvasHeight) {
            this.y = 0;
        }
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
                snowflake.fall(canvas.height);
                snowflake.draw(ctx);
            });

            animationId = requestAnimationFrame(animateSnowflakes);
        };

        animateSnowflakes();

        // Handle window resize
        const handleResize = () => {
            setCanvasSize(); // Update canvas size on resize
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationId !== null) {
                cancelAnimationFrame(animationId);
            }
            window.removeEventListener('resize', handleResize);
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

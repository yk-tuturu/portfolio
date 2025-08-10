import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameIdRef = useRef<number>(0);
  const MAX_DISTANCE = 200;
  const MAX_DISTANCE_SQ = MAX_DISTANCE * MAX_DISTANCE;
  const PARTICLE_COUNT = 80;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Initialize canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setCanvasSize();

    // Initialize particles only once
    if (particlesRef.current.length === 0) {
      const particles: Particle[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.3,
          vy: (Math.random() - 0.5) * 1.3,
        });
      }
      particlesRef.current = particles;
    }

    // Resize handler with debounce to reduce event firing frequency
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    
    let lastTime = 0;
  const desiredFPS = 30;
  const frameDuration = 1000 / desiredFPS;

    const animate = (time = 0) => {
    if (!ctx) return;

    if (time - lastTime >= frameDuration) {
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;

      // Move and draw particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(145, 175, 220, 1)";
        ctx.fill();
      }

      // Draw lines between close particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_DISTANCE_SQ) {
            const alpha = 1 - distSq / MAX_DISTANCE_SQ;
            ctx.strokeStyle = `rgba(145, 175, 220, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    animationFrameIdRef.current = requestAnimationFrame(animate);
  };

  animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        backgroundColor: "#000623",
        display: "block", // prevent inline gap issues
      }}
    />
  );
}

export default Background;
import { useEffect, useRef } from "react";

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
  const MIN_PARTICLES = 24;
  const MAX_PARTICLES = 80;
  const REFERENCE_AREA = 1440 * 800; // area at which MAX_PARTICLES looks right

  const getParticleCountForArea = (width: number, height: number) => {
    const scaled = Math.round((MAX_PARTICLES * (width * height)) / REFERENCE_AREA);
    return Math.min(MAX_PARTICLES, Math.max(MIN_PARTICLES, scaled));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const syncParticleCount = () => {
      const targetCount = getParticleCountForArea(width, height);
      const particles = particlesRef.current;

      if (particles.length < targetCount) {
        for (let i = particles.length; i < targetCount; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.3,
            vy: (Math.random() - 0.5) * 1.3,
          });
        }
      } else if (particles.length > targetCount) {
        particles.length = targetCount;
      }
    };

    // Initialize canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      syncParticleCount();
    };
    setCanvasSize();

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
  const desiredFPS = 20;
  const frameDuration = 1000 / desiredFPS;

    const animate = (time = 0) => {
    if (!ctx) return;

    if (time - lastTime >= frameDuration) {
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const particleCount = particles.length;

      // Move and draw particles
      for (let i = 0; i < particleCount; i++) {
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
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
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
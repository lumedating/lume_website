import { useEffect, useRef } from "react";
import "./FooterConfetti.css";

const COLORS = [
  "#b700ff",
  "#c739ff",
  "#8800be",
  "#ff4fd8",
  "#ff6b6b",
  "#ffd93d",
  "#6bcb77",
  "#4d96ff",
  "#ffffff",
  "#ff922b",
  "#845ef7",
  "#20c997",
  "#fcc419",
  "#ff8787",
  "#74c0fc",
  "#e599f7",
];

const TOTAL_PARTICLES = 160;
const SPAWN_DURATION = 3200;

function getParticleOpacity(y, height) {
  const fadeStart = height * 0.78;
  const fadeEnd = height * 1.1;

  if (y < fadeStart) return 1;
  if (y > fadeEnd) return 0;

  return 1 - (y - fadeStart) / (fadeEnd - fadeStart);
}

function createParticle(width) {
  return {
    x: Math.random() * width,
    y: Math.random() * 24 - 28,
    w: 5 + Math.random() * 8,
    h: 3 + Math.random() * 6,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    vx: (Math.random() - 0.5) * 4,
    vy: 4 + Math.random() * 5,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 14,
  };
}

function FooterConfetti({ onComplete }) {
  const canvasRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onCompleteRef.current?.();
      return;
    }

    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const resizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();

    const particles = [];
    let spawnedCount = 0;
    const startTime = performance.now();
    const maxDuration = SPAWN_DURATION + 2400;
    let frameId;

    const animate = (now) => {
      const elapsed = now - startTime;
      const ctx = canvas.getContext("2d");
      const { width, height } = canvas;

      const targetSpawned = Math.min(
        TOTAL_PARTICLES,
        Math.floor((elapsed / SPAWN_DURATION) * TOTAL_PARTICLES),
      );

      while (spawnedCount < targetSpawned) {
        particles.push(createParticle(width));
        spawnedCount += 1;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.14;
        particle.vx *= 0.992;
        particle.rotation += particle.rotationSpeed;

        const opacity = getParticleOpacity(particle.y, height);

        if (opacity <= 0 && particle.y > height) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = opacity;
        ctx.fillStyle = particle.color;
        ctx.fillRect(
          -particle.w / 2,
          -particle.h / 2,
          particle.w,
          particle.h,
        );
        ctx.restore();
      }

      const spawnComplete =
        spawnedCount >= TOTAL_PARTICLES && elapsed >= SPAWN_DURATION;

      if (elapsed < maxDuration && (particles.length > 0 || !spawnComplete)) {
        frameId = requestAnimationFrame(animate);
      } else {
        onCompleteRef.current?.();
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="footer-confetti" aria-hidden="true" />
  );
}

export default FooterConfetti;

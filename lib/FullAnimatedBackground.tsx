'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function FullAnimatedBackground() {
  // Particle animation logic
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Mouse light state
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.3 + 0.2,
    }));
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    }
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    draw();
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Aurora/Nebula gradient style
  const auroraStyle = {
    background: `radial-gradient(ellipse 80% 60% at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(99,102,241,0.25) 0%, rgba(236,72,153,0.18) 40%, rgba(16,185,129,0.12) 70%, transparent 100%)`,
    filter: 'blur(80px)',
    transition: 'background 0.2s',
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden vignette-bg">
      {/* Aurora/Nebula gradient */}
      <div className="absolute inset-0" style={auroraStyle} />
      {/* Parallax SVG shapes */}
      <svg className="absolute top-0 left-0 w-full h-40" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
        <path fill="url(#parallax1)" fillOpacity="0.5">
          <animate attributeName="d" dur="12s" repeatCount="indefinite"
            values="M0,160L80,170C160,180,320,200,480,192C640,184,800,144,960,133.3C1120,123,1280,149,1360,162.7L1440,176L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z;
                    M0,180L80,160C160,140,320,120,480,128C640,136,800,176,960,186.7C1120,197,1280,171,1360,157.3L1440,144L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z;
                    M0,160L80,170C160,180,320,200,480,192C640,184,800,144,960,133.3C1120,123,1280,149,1360,162.7L1440,176L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </path>
        <defs>
          <linearGradient id="parallax1" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute top-20 left-0 w-full h-32 opacity-60" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
        <path fill="url(#parallax2)" fillOpacity="0.3">
          <animate attributeName="d" dur="16s" repeatCount="indefinite"
            values="M0,96L80,112C160,128,320,160,480,176C640,192,800,192,960,176C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z;
                    M0,112L80,128C160,144,320,176,480,192C640,208,800,208,960,192C1120,176,1280,144,1360,128L1440,112L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z;
                    M0,96L80,112C160,128,320,160,480,176C640,192,800,192,960,176C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </path>
        <defs>
          <linearGradient id="parallax2" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a5b4fc" />
            <stop offset="1" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>
      {/* Interactive mouse-following light */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
          zIndex: 3,
        }}
      />
      {/* Particle layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }} />
      {/* Floating blobs */}
      <motion.div
        initial={{ x: '-50%', y: '-50%', scale: 0.8, opacity: 0.4 }}
        animate={{ x: '0%', y: '0%', scale: 1.1, opacity: 0.6 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className="absolute w-[600px] h-[600px] bg-pink-400 opacity-20 rounded-full filter blur-3xl top-0 left-0"
      />
      <motion.div
        initial={{ x: '50%', y: '50%', scale: 1.2, opacity: 0.3 }}
        animate={{ x: '0%', y: '0%', scale: 1, opacity: 0.5 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className="absolute w-[500px] h-[500px] bg-blue-400 opacity-20 rounded-full filter blur-2xl bottom-0 right-0"
      />
      {/* Third animated blob */}
      <motion.div
        initial={{ x: '0%', y: '100%', scale: 0.7, opacity: 0.2 }}
        animate={{ x: '0%', y: '0%', scale: 1.3, opacity: 0.35 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className="absolute w-[400px] h-[400px] bg-purple-400 opacity-20 rounded-full filter blur-2xl bottom-10 left-1/2 -translate-x-1/2"
      />
      {/* Animated SVG wave bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#waveBot)" fillOpacity="0.4">
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                    M0,192L80,186.7C160,181,320,171,480,154.7C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                    M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </path>
        <defs>
          <linearGradient id="waveBot" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

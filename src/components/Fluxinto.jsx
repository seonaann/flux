import React, { useEffect, useState } from "react";

export default function FluxIntro({ goNext }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const container = document.getElementById("introContainer");
    if (!container) return;

    const particles = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const startX = Math.random() * window.innerWidth;
      const endX = (Math.random() - 0.5) * 200;
      const delay = Math.random() * 2;

      particle.style.left = startX + "px";
      particle.style.bottom = "0";
      particle.style.setProperty("--tx", endX + "px");
      particle.style.animationDelay = delay + "s";

      container.appendChild(particle);
      particles.push(particle);
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      particles.forEach(p => p.remove());
    };
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const navTimer = setTimeout(() => {
        goNext();
      }, 800);
      return () => clearTimeout(navTimer);
    }
  }, [fadeOut, goNext]);

  return (
    <>
      <style>{`
        :root {
          --electric-cyan: #00F0FF;
          --deep-purple: #1A0B2E;
          --energy-yellow: #FFF500;
          --accent-green: #00FF87;
        }

        body {
          margin: 0;
          font-family: 'Syne', sans-serif;
          background: var(--deep-purple);
          overflow: hidden;
        }

        .intro-container {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .energy-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(0, 240, 255, 0.2), transparent 70%);
          animation: pulse 3s ease-out forwards;
        }

        @keyframes pulse {
          0% { transform: scale(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }

        .lightning-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(0,240,255,0.15), transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(255,245,0,0.1), transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(0,255,135,0.12), transparent 50%);
          animation: energyShift 2s ease-in-out;
        }

        @keyframes energyShift {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .logo-container {
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .flux-text {
          font-size: 10rem;
          font-weight: 800;
          letter-spacing: -5px;
        }

        .flux-text span {
          display: inline-block;
          background: linear-gradient(135deg, var(--electric-cyan), var(--accent-green));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0;
          transform: translateY(100px) rotateX(-90deg);
          animation: letterDrop 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        .flux-text span:nth-child(1) { animation-delay: 0.2s; }
        .flux-text span:nth-child(2) { animation-delay: 0.35s; }
        .flux-text span:nth-child(3) { animation-delay: 0.5s; }
        .flux-text span:nth-child(4) { animation-delay: 0.65s; }

        @keyframes letterDrop {
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0,240,255,0.3), transparent 70%);
          filter: blur(60px);
          animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,100% { opacity: 0.3; transform: translate(-50%,-50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%,-50%) scale(1.1); }
        }

        .tagline {
          margin-top: 2rem;
          font-size: 1.2rem;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          opacity: 0;
          animation: fadeInUp 1s ease-out 1.2s forwards;
        }

        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: var(--electric-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--electric-cyan);
          animation: particleFloat 2s ease-out forwards;
        }

        @keyframes particleFloat {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-200px) translateX(var(--tx)) scale(1); }
        }

        .progress-ring {
          position: absolute;
          bottom: 10%;
          opacity: 0;
          animation: fadeIn 0.5s ease-out 1.5s forwards;
        }

        .progress-ring circle {
          fill: none;
          stroke: var(--electric-cyan);
          stroke-width: 4;
          stroke-dasharray: 283;
          stroke-dashoffset: 283;
          animation: progressFill 2s ease-out 1.5s forwards;
          transform-origin: center;
          transform: rotate(-90deg);
        }

        @keyframes progressFill {
          to { stroke-dashoffset: 0; }
        }

        .fade-out {
          animation: zoomFade 0.8s ease forwards;
        }

        @keyframes zoomFade {
          to {
            opacity: 0;
            transform: scale(1.1);
          }
        }

        @media (max-width: 768px) {
          .flux-text { font-size: 5rem; }
          .glow-effect { width: 400px; height: 400px; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div
        id="introContainer"
        className={`intro-container ${fadeOut ? "fade-out" : ""}`}
      >
        <div className="energy-pulse"></div>
        <div className="lightning-bg"></div>

        <div className="logo-container">
          <div className="glow-effect"></div>

          <div className="flux-text">
            <span>F</span>
            <span>L</span>
            <span>U</span>
            <span>X</span>
          </div>

          <div className="tagline">Smart Energy Tracking</div>
        </div>

        <svg className="progress-ring" width="100" height="100">
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>
    </>
  );
}

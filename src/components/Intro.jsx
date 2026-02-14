import React, { useEffect, useState } from 'react';

export default function FluxIntro() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const container = document.getElementById('introContainer');
      if (!container) return;

      const particleCount = 30;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const startX = Math.random() * window.innerWidth;
        const endX = (Math.random() - 0.5) * 200;
        const delay = Math.random() * 2;
        
        particle.style.left = startX + 'px';
        particle.style.bottom = '0';
        particle.style.setProperty('--tx', endX + 'px');
        particle.style.animationDelay = delay + 's';
        
        container.appendChild(particle);
      }
    };

    createParticles();

    // Fade out after animation completes
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      // Optional: Call onComplete callback or redirect
      // setTimeout(() => {
      //   window.location.href = 'main-page.html';
      // }, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

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
          font-family: 'Syne', sans-serif;
          background: var(--deep-purple);
          overflow: hidden;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
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
          opacity: 0;
        }

        @keyframes pulse {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .lightning-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at 20% 50%, rgba(0, 240, 255, 0.15), transparent 50%),
                      radial-gradient(ellipse at 80% 20%, rgba(255, 245, 0, 0.1), transparent 50%),
                      radial-gradient(ellipse at 50% 80%, rgba(0, 255, 135, 0.12), transparent 50%);
          animation: energyShift 2s ease-in-out;
        }

        @keyframes energyShift {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        .logo-container {
          position: relative;
          z-index: 10;
        }

        .flux-text {
          font-size: 10rem;
          font-weight: 800;
          letter-spacing: -5px;
          position: relative;
          display: inline-block;
        }

        .flux-text span {
          display: inline-block;
          background: linear-gradient(135deg, var(--electric-cyan), var(--accent-green));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: translateY(100px) rotateX(-90deg);
          animation: letterDrop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .flux-text span:nth-child(1) { animation-delay: 0.2s; }
        .flux-text span:nth-child(2) { animation-delay: 0.35s; }
        .flux-text span:nth-child(3) { animation-delay: 0.5s; }
        .flux-text span:nth-child(4) { animation-delay: 0.65s; }

        @keyframes letterDrop {
          0% {
            opacity: 0;
            transform: translateY(100px) rotateX(-90deg);
          }
          50% {
            opacity: 1;
          }
          100% {
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
          background: radial-gradient(circle, rgba(0, 240, 255, 0.3), transparent 70%);
          filter: blur(60px);
          animation: glowPulse 2s ease-in-out infinite;
          opacity: 0;
          animation-delay: 1s;
        }

        @keyframes glowPulse {
          0%, 100% { 
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: var(--electric-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--electric-cyan);
          opacity: 0;
          animation: particleFloat 2s ease-out forwards;
        }

        @keyframes particleFloat {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-200px) translateX(var(--tx)) scale(1);
          }
        }

        .tagline {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.3rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 8px;
          text-transform: uppercase;
          opacity: 0;
          animation: fadeInUp 1s ease-out 1.2s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .lightning-bolt {
          position: absolute;
          width: 4px;
          height: 150px;
          background: linear-gradient(to bottom, var(--energy-yellow), transparent);
          box-shadow: 0 0 20px var(--energy-yellow);
          opacity: 0;
          animation: lightning 0.3s ease-out;
        }

        .lightning-bolt:nth-child(3) {
          top: 20%;
          left: 25%;
          animation-delay: 0.5s;
        }

        .lightning-bolt:nth-child(4) {
          top: 30%;
          right: 20%;
          animation-delay: 1s;
        }

        .lightning-bolt:nth-child(5) {
          bottom: 25%;
          left: 15%;
          animation-delay: 1.5s;
        }

        @keyframes lightning {
          0%, 100% { opacity: 0; }
          10%, 30%, 50% { opacity: 1; }
          20%, 40% { opacity: 0.3; }
        }

        .progress-ring {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          animation: fadeIn 0.5s ease-out 1.5s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
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

        .intro-container.fade-out {
          animation: fadeOutScreen 0.8s ease-out forwards;
        }

        @keyframes fadeOutScreen {
          to {
            opacity: 0;
            transform: scale(1.1);
          }
        }

        @media (max-width: 768px) {
          .flux-text {
            font-size: 5rem;
            letter-spacing: -3px;
          }

          .tagline {
            font-size: 0.9rem;
            letter-spacing: 4px;
            bottom: -60px;
          }

          .glow-effect {
            width: 400px;
            height: 400px;
          }
        }
      `}</style>

      <link 
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" 
        rel="stylesheet"
      />

      <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`} id="introContainer">
        <div className="energy-pulse"></div>
        <div className="lightning-bg"></div>
        <div className="lightning-bolt"></div>
        <div className="lightning-bolt"></div>
        <div className="lightning-bolt"></div>
        
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
          <circle cx="50" cy="50" r="45"/>
        </svg>
      </div>
    </>
  );
}
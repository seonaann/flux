import React, { useState, useEffect } from "react";

export default function FluxLandingPage({ goToLogin }) {
  const [consumption, setConsumption] = useState(24.7);

  // Simulated live energy updates
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.5) * 0.2;
      setConsumption(prev => parseFloat((prev + delta).toFixed(1)));
    }, 3000);

    return () => clearInterval(interval);
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

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--deep-purple);
          color: #ffffff;
          overflow-x: hidden;
        }

        /* BACKGROUND BLOBS */
        .bg-animation {
          position: fixed;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(circle at 20% 40%, rgba(0,240,255,0.2), transparent 40%),
            radial-gradient(circle at 80% 60%, rgba(0,255,135,0.15), transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(255,245,0,0.1), transparent 50%);
          animation: bgShift 12s ease-in-out infinite alternate;
        }

        @keyframes bgShift {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.1); opacity: 1; }
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 5%;
          background: rgba(26, 11, 46, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0,240,255,0.2);
          z-index: 1000;
        }

        .logo {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--electric-cyan), var(--accent-green));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .auth-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.7rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: 0.3s ease;
        }

        .btn-user {
          background: transparent;
          border: 2px solid var(--electric-cyan);
          color: var(--electric-cyan);
        }

        .btn-user:hover {
          box-shadow: 0 0 20px rgba(0,240,255,0.4);
        }

        .btn-signup {
          background: linear-gradient(135deg, var(--electric-cyan), var(--accent-green));
          color: var(--deep-purple);
          box-shadow: 0 10px 30px rgba(0,240,255,0.4);
        }

        .btn-signup:hover {
          transform: translateY(-3px);
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 5% 4rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: 4rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            var(--electric-cyan),
            var(--energy-yellow),
            var(--accent-green)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          margin: 1.5rem 0;
          font-size: 1.2rem;
          color: rgba(255,255,255,0.8);
        }

        /* DASHBOARD PREVIEW */
        .preview-card {
          padding: 2rem;
          border-radius: 30px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,240,255,0.3);
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
        }

        .live-tag {
          color: var(--accent-green);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 1px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }

        .consumption-value {
          font-family: 'Syne', sans-serif;
          font-size: 4rem;
          margin: 1rem 0;
          background: linear-gradient(135deg, var(--electric-cyan), var(--accent-green));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* FEATURES */
        .features {
          padding: 6rem 5%;
          text-align: center;
        }

        .feature-grid {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2rem;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(0,240,255,0.2);
          transition: 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,240,255,0.2);
        }

        /* CTA */
        .cta {
          padding: 5rem 5%;
          text-align: center;
        }

        .cta-box {
          padding: 4rem;
          border-radius: 40px;
          border: 1px solid rgba(0,240,255,0.3);
          background: rgba(0,240,255,0.05);
        }

        footer {
          padding: 2rem;
          text-align: center;
          opacity: 0.6;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="bg-animation" />

      {/* NAV */}
      <nav>
        <div className="logo">Flux</div>
        <div className="auth-buttons">
          <button className="btn btn-user" onClick={goToLogin}>
            Sign In
          </button>
          <button className="btn btn-signup" onClick={goToLogin}>
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <h1>
              Track Your Energy.<br />
              <span className="gradient-text">Save The Planet.</span>
            </h1>
            <p>
              Real-time energy monitoring with AI insights to optimize
              consumption and reduce cost.
            </p>
            <button className="btn btn-signup" onClick={goToLogin}>
              Start Free Trial
            </button>
          </div>

          <div className="preview-card">
            <div className="live-tag">● LIVE FEED</div>
            <div className="consumption-value">
              {consumption} kWh
            </div>
            <p>Current Power Consumption</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="gradient-text">Smart Energy Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚡ Real-Time Monitoring</h3>
            <p>Live updates every second.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Smart Analytics</h3>
            <p>Understand usage patterns.</p>
          </div>
          <div className="feature-card">
            <h3>🌱 Carbon Tracking</h3>
            <p>Reduce environmental impact.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-box">
          <h2>Ready to Flow?</h2>
          <p>Join thousands already saving 20% monthly.</p>
          <button className="btn btn-signup" onClick={goToLogin}>
            Join Now
          </button>
        </div>
      </section>

      <footer>
        © 2026 Flux Energy Tracker. Intelligent Power Management.
      </footer>
    </>
  );
}
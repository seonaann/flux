import React from "react";

export default function FluxLandingPage({ goToLogin }) {
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

        /* ================= BACKGROUND ANIMATION ================= */

        .bg-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background:
            radial-gradient(circle at 20% 50%, rgba(0,240,255,0.25), transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,245,0,0.15), transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(0,255,135,0.2), transparent 50%);
          animation: bgShift 12s ease-in-out infinite alternate;
        }

        @keyframes bgShift {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.15); opacity: 1; }
        }

        /* ================= NAV ================= */

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 5%;
          background: rgba(26, 11, 46, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0,240,255,0.2);
          animation: slideDown 0.8s ease-out;
          z-index: 1000;
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
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

        /* ================= BUTTONS ================= */

        .btn {
          padding: 0.7rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }

        .btn-user {
          background: transparent;
          border: 2px solid var(--electric-cyan);
          color: var(--electric-cyan);
        }

        .btn-user:hover {
          background: rgba(0,240,255,0.1);
          box-shadow: 0 0 20px rgba(0,240,255,0.4);
        }

        .btn-admin {
          background: transparent;
          border: 2px solid var(--energy-yellow);
          color: var(--energy-yellow);
        }

        .btn-admin:hover {
          background: rgba(255,245,0,0.1);
          box-shadow: 0 0 20px rgba(255,245,0,0.4);
        }

        .btn-signup {
          background: linear-gradient(135deg, var(--electric-cyan), var(--accent-green));
          color: var(--deep-purple);
          box-shadow: 0 10px 30px rgba(0,240,255,0.4);
        }

        .btn-signup:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 45px rgba(0,240,255,0.6);
        }

        /* ================= HERO ================= */

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 5% 4rem;
          text-align: center;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: 3.8rem;
          margin-bottom: 1rem;
          line-height: 1.2;
          letter-spacing: -1px;
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
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: rgba(255,255,255,0.8);
        }

        /* ================= FOOTER ================= */

        footer {
          padding: 2rem;
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.6;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .auth-buttons {
            flex-direction: column;
          }
        }

      `}</style>

      {/* Google Fonts */}
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
            User Sign In
          </button>
          <button className="btn btn-admin" onClick={goToLogin}>
            Admin Sign In
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>
            Track Your Energy. <br />
            <span className="gradient-text">Save The Planet.</span>
          </h1>

          <p>
            Real-time energy monitoring that helps you optimize and reduce
            power consumption.
          </p>

          <button className="btn btn-signup" onClick={goToLogin}>
            Get Started
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Flux Energy Tracker. All rights reserved.
      </footer>
    </>
  );
}

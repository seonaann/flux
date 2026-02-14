import React from 'react';

export default function FluxLandingPage() {
  return (
    <>
      <style>{`
        :root {
          --electric-cyan: #00F0FF;
          --deep-purple: #1A0B2E;
          --energy-yellow: #FFF500;
          --soft-gray: #E8E9ED;
          --dark-gray: #2A2D3A;
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
          line-height: 1.6;
        }

        .bg-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(ellipse at 20% 50%, rgba(0, 240, 255, 0.15), transparent 50%),
                      radial-gradient(ellipse at 80% 20%, rgba(255, 245, 0, 0.1), transparent 50%),
                      radial-gradient(ellipse at 50% 80%, rgba(0, 255, 135, 0.12), transparent 50%);
          animation: bgShift 15s ease-in-out infinite;
        }

        @keyframes bgShift {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 1.5rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          background: rgba(26, 11, 46, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 240, 255, 0.1);
          animation: slideDown 0.8s ease-out;
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
          background-clip: text;
          letter-spacing: -1px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--electric-cyan);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--electric-cyan);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .auth-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.7rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          border: none;
        }

        .btn-signin {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-signin:hover {
          border-color: var(--electric-cyan);
          color: var(--electric-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }

        .btn-user {
          background: transparent;
          color: white;
          border: 2px solid rgba(0, 240, 255, 0.4);
        }

        .btn-user:hover {
          border-color: var(--electric-cyan);
          background: rgba(0, 240, 255, 0.1);
          color: var(--electric-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }

        .btn-admin {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 245, 0, 0.4);
        }

        .btn-admin:hover {
          border-color: var(--energy-yellow);
          background: rgba(255, 245, 0, 0.1);
          color: var(--energy-yellow);
          box-shadow: 0 0 20px rgba(255, 245, 0, 0.3);
        }

        .btn-signup {
          background: linear-gradient(135deg, var(--electric-cyan), var(--accent-green));
          color: var(--deep-purple);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.3);
        }

        .btn-signup:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 240, 255, 0.5);
        }

        .sustainability-content {
          position: relative;
          z-index: 1;
        }

        .sustainability-point {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .sustainability-point:hover {
          background: rgba(0, 0, 0, 0.3);
          border-color: rgba(0, 240, 255, 0.3);
          transform: translateX(5px);
        }

        .sustainability-point:last-child {
          margin-bottom: 0;
        }

        .point-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 255, 135, 0.15));
          border-radius: 15px;
          border: 1px solid rgba(0, 240, 255, 0.3);
        }

        .point-text h4 {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: white;
        }

        .point-text p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 5% 4rem;
          position: relative;
        }

        .hero-content {
          max-width: 1400px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-text h1 {
          font-family: 'Syne', sans-serif;
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--electric-cyan), var(--energy-yellow), var(--accent-green));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-text p {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .btn-large {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
        }

        .hero-visual {
          position: relative;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .energy-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: 30px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .energy-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(0, 240, 255, 0.1), transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .card-header h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          color: white;
        }

        .status-badge {
          padding: 0.5rem 1rem;
          background: rgba(0, 255, 135, 0.2);
          border: 1px solid var(--accent-green);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--accent-green);
          font-weight: 600;
        }

        .features {
          padding: 6rem 5%;
          position: relative;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 5rem;
          animation: fadeInUp 1s ease-out;
        }

        .section-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .features-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 240, 255, 0.15);
          border-radius: 25px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          animation: fadeInUp 1s ease-out both;
        }

        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: var(--electric-cyan);
          box-shadow: 0 20px 50px rgba(0, 240, 255, 0.2);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(0, 255, 135, 0.2));
          border: 2px solid var(--electric-cyan);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .feature-card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .cta-section {
          padding: 8rem 5%;
          text-align: center;
          position: relative;
        }

        .cta-box {
          max-width: 900px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 255, 135, 0.1));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(0, 240, 255, 0.3);
          border-radius: 40px;
          padding: 4rem 3rem;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 1s ease-out;
        }

        .cta-box::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 245, 0, 0.05), transparent);
          animation: shimmer 4s infinite;
        }

        .cta-box h2 {
          font-family: 'Syne', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .cta-box p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2.5rem;
          position: relative;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          position: relative;
        }

        footer {
          padding: 3rem 5%;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        footer p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 3.5rem;
          }

          .hero-cta {
            justify-content: center;
          }

          .nav-links {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-text p {
            font-size: 1.1rem;
          }

          .section-header h2 {
            font-size: 2.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .auth-buttons {
            gap: 0.5rem;
            flex-wrap: wrap;
          }

          .btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }

          .cta-box h2 {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <link 
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap" 
        rel="stylesheet"
      />

      <div className="bg-animation"></div>

      {/* Navigation */}
      <nav>
        <div className="logo">Flux</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>
        <div className="auth-buttons">
          <a href="#signin-user" className="btn btn-user">User Sign In</a>
          <a href="#signin-admin" className="btn btn-admin">Admin Sign In</a>
          <a href="#signup" className="btn btn-signup">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Track Your Energy.<br />
              <span className="gradient-text">Save The Planet.</span>
            </h1>
            <p>
              Real-time energy monitoring that helps you understand, optimize, and reduce your power consumption. Make every watt count.
            </p>
            <div className="hero-cta">
              <a href="#signup" className="btn btn-signup btn-large">Start Free Trial</a>
              <a href="#features" className="btn btn-signin btn-large">Learn More</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="energy-card">
              <div className="card-header">
                <h3>Sustainability Made Simple</h3>
                <span className="status-badge">● Smart Tracking</span>
              </div>
              <div className="sustainability-content">
                <div className="sustainability-point">
                  <div className="point-icon">🌍</div>
                  <div className="point-text">
                    <h4>Reduce Carbon Footprint</h4>
                    <p>Track and minimize your environmental impact with real-time insights into your energy consumption patterns.</p>
                  </div>
                </div>
                <div className="sustainability-point">
                  <div className="point-icon">💡</div>
                  <div className="point-text">
                    <h4>Smart Energy Optimization</h4>
                    <p>AI-powered recommendations help you identify inefficiencies and optimize usage for maximum savings.</p>
                  </div>
                </div>
                <div className="sustainability-point">
                  <div className="point-icon">📈</div>
                  <div className="point-text">
                    <h4>Measurable Impact</h4>
                    <p>Visualize your progress with detailed analytics showing how your actions contribute to a greener future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Powerful Features for <span className="gradient-text">Smart Energy Management</span></h2>
          <p>Everything you need to take control of your energy consumption and make informed decisions about your power usage.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Real-Time Monitoring</h3>
            <p>Track your energy usage in real-time with live updates every second. See exactly what's consuming power and when.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Smart Analytics</h3>
            <p>Detailed insights and trends help you understand patterns in your energy consumption and identify opportunities to save.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Custom Alerts</h3>
            <p>Set personalized alerts for unusual consumption, peak hours, or budget limits. Stay informed and in control.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Cost Tracking</h3>
            <p>Monitor your energy costs in real-time and receive monthly reports showing exactly where your money goes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Carbon Footprint</h3>
            <p>Understand your environmental impact with carbon tracking and get recommendations to reduce your footprint.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔌</div>
            <h3>Device Detection</h3>
            <p>AI-powered device recognition automatically identifies which appliances are consuming the most energy.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to Save Energy?</h2>
          <p>Join thousands of users who are already saving money and reducing their environmental impact with Flux.</p>
          <div className="cta-buttons">
            <a href="#signup" className="btn btn-signup btn-large">Start Your Free Trial</a>
            <a href="#demo" className="btn btn-signin btn-large">Watch Demo</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Flux Energy Tracker. All rights reserved.</p>
      </footer>
    </>
  );
}
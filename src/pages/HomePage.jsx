import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-wrapper">
            <div className="bg-animation"></div>

            <nav className="home-nav">
                <div className="logo">Flux</div>
                <div className="nav-links">
                    <Link to="#features">Features</Link>
                    <Link to="#about">About</Link>
                    <Link to="#mission">Mission</Link>
                </div>
                <div className="auth-buttons">
                    <Link to="/signup" className="btn btn-signup btn-large">Start Free Trial</Link>
                    <Link to="/signup" className="btn btn-signup btn-large">Get Started</Link>
                </div>
            </nav>

            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>
                            Intelligent<br />
                            <span className="gradient-text">Energy Control.</span>
                        </h1>
                        <p>
                            Take charge of your electrical footprint. Flux provides the tools to monitor, visualize, and optimize consumption for a greener future.
                        </p>
                        <div className="hero-cta">
                            <Link to="/signup" className="btn btn-signup">Get Started</Link>
                            <a href="#features" className="btn btn-signin btn-large">Learn More</a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="info-card" id="about">
                            <div className="highlight-bar"></div>
                            <h2>The Flux Innovation</h2>
                            <p>
                                Flux – Smart Energy Usage Tracker is an innovative solution designed to monitor and analyze electricity consumption in real time, helping users understand how energy is being used across different appliances and time periods.
                            </p>
                            <p>
                                The system provides accurate usage insights, detects high power-consuming devices, and supports smarter decision-making to reduce electricity bills and prevent energy wastage.
                            </p>
                            <p>
                                By combining IoT-based monitoring with intelligent data visualization, Flux promotes efficient energy management and encourages sustainable living in both households and small workplaces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features" id="features">
                <div className="section-header">
                    <h2>Powerful Features for <span className="gradient-text">Smart Energy Management</span></h2>
                    <p>Everything you need to take control of your energy consumption and make informed decisions about your power usage.</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Real-Time Monitoring</h3>
                        <p>Track your energy usage in real-time with live updates. See exactly what's consuming power and when across your entire network.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3>Smart Analytics</h3>
                        <p>Detailed insights and trends help you understand patterns in your energy consumption and identify opportunities to save.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎯</div>
                        <h3>Smarter Decisions</h3>
                        <p>Make data-backed choices to reduce electricity bills and prevent energy wastage through intelligent alerts and recommendations.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3>Cost Tracking</h3>
                        <p>Monitor your energy costs and receive reports showing exactly where your money goes, helping you budget more effectively.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🌱</div>
                        <h3>Sustainable Living</h3>
                        <p>Understand your environmental impact and get actionable recommendations to reduce your carbon footprint and live greener.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔌</div>
                        <h3>IoT Integration</h3>
                        <p>Seamlessly connect your devices through our IoT-based monitoring system for comprehensive hardware-to-dashboard visualization.</p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-box">
                    <h2>Ready to Optimize Your Power?</h2>
                    <p>Join the movement toward efficient energy management and sustainable living with Flux.</p>
                    <div className="cta-buttons">
                        <a href="#signup" className="btn btn-signup btn-large">Join Today</a>
                        <a href="#demo" className="btn btn-signin btn-large">Watch Demo</a>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2026 Flux Energy Tracker. Designed for Sustainable Living.</p>
            </footer>
        </div>
    );
};

export default HomePage;

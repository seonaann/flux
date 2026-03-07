import { Link } from 'react-router-dom';
import './CarbonPage.css';

const CarbonPage = () => {
    return (
        <div className="carbon-wrapper">
            <div className="bg-animation"></div>

            <nav className="carbon-nav">
                <div className="logo">Flux Carbon</div>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Energy Tracker</Link>
                    <a href="#" className="badge">Live Footprint</a>
                </div>
            </nav>

            <section className="hero">
                <div className="hero-grid">
                    <div className="hero-text">
                        <h1>From Watts to <br /><span className="gradient-green">Carbon Impact.</span></h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px' }}>
                            Understand your environmental legacy. Flux Carbon translates your energy usage into precise CO2 emissions data, enabling a path toward true net-zero living.
                        </p>

                        <div className="description-box">
                            <h3>The Flux Mission</h3>
                            <p>
                                Flux – Smart Energy Usage Tracker is an innovative solution designed to monitor and analyze electricity consumption in real time. By identifying high-load devices and usage peaks, Flux provides the intelligence needed to drastically reduce your <strong>Carbon Footprint</strong>. We believe that sustainable living starts with accurate data visualization.
                            </p>
                        </div>

                        <a href="#" className="btn-green">Generate Impact Report</a>
                    </div>

                    <div className="hero-visual">
                        <div className="carbon-card">
                            <div className="carbon-header">
                                <span className="stat-label">Monthly CO2e</span>
                                <span className="badge">Top 15% Efficient</span>
                            </div>
                            <div className="carbon-value">
                                0.42 <span className="unit">Metric Tons</span>
                            </div>
                            <div className="progress-container">
                                <div className="progress-bar"></div>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                                You have reduced your footprint by <strong>12.4%</strong> compared to last month. Equivalent to planting <strong>7 trees</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="impact-section">
                <div className="impact-grid">
                    <div className="stat-card">
                        <span className="stat-icon">🌲</span>
                        <span className="stat-number">84</span>
                        <span className="stat-label">Trees Saved</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-icon">🚗</span>
                        <span className="stat-number">1,240</span>
                        <span className="stat-label">Miles Not Driven</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-icon">💡</span>
                        <span className="stat-number">320kg</span>
                        <span className="stat-label">CO2 Prevented</span>
                    </div>
                </div>
            </section>

            <footer style={{ padding: '4rem 5%', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ color: 'rgba(255,255,255,0.4)' }}>&copy; 2026 Flux Energy. Smarter tracking for a greener planet.</p>
            </footer>
        </div>
    );
};

export default CarbonPage;

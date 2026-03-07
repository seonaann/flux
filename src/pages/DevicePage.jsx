import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DevicePage.css';

const DeviceCard = ({ icon, title, meta, initialWatts, initialActive }) => {
    const [active, setActive] = useState(initialActive);
    const [watts, setWatts] = useState(initialWatts);

    const toggleDevice = () => {
        setActive(!active);
        if (active) {
            setWatts('0W');
        } else {
            setWatts(Math.floor(Math.random() * 200 + 50) + 'W');
        }
    };

    return (
        <div className="device-card">
            <span className="device-icon">{icon}</span>
            <div className="device-info">
                <h3>{title}</h3>
                <span className="device-meta">{meta}</span>
            </div>
            <div className="power-metric">
                <span
                    className="watts"
                    style={{ color: active ? 'var(--electric-cyan)' : 'rgba(255,255,255,0.2)' }}
                >
                    {watts}
                </span>
                <div
                    className={`toggle-switch ${active ? 'active' : ''}`}
                    onClick={toggleDevice}
                ></div>
            </div>
        </div>
    );
};

const DevicePage = () => {
    return (
        <div className="device-wrapper">
            <div className="bg-mesh"></div>

            <nav className="device-nav">
                <div className="logo">Flux Hub</div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/carbon" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>
                        Impact View
                    </Link>
                </div>
            </nav>

            <main className="device-main">
                <div className="header-section">
                    <span className="badge online">System Active</span>
                    <h1>Connected Devices</h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>Managing 4 active nodes across your local network.</p>
                </div>

                <div className="device-grid">
                    <DeviceCard
                        icon="💻"
                        title="Workstation Setup"
                        meta="Home Office • ID: FLX-092"
                        initialWatts="142W"
                        initialActive={true}
                    />
                    <DeviceCard
                        icon="❄️"
                        title="Smart AC Unit"
                        meta="Living Room • ID: FLX-114"
                        initialWatts="850W"
                        initialActive={true}
                    />
                    <DeviceCard
                        icon="📺"
                        title="Home Theater"
                        meta="Living Room • ID: FLX-044"
                        initialWatts="0W"
                        initialActive={false}
                    />
                    <DeviceCard
                        icon="🍽️"
                        title="Refrigerator"
                        meta="Kitchen • ID: FLX-201"
                        initialWatts="120W"
                        initialActive={true}
                    />

                    {/* Add Device Placeholder */}
                    <div className="add-device-card">
                        <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>+</span>
                        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Add New Flux Node</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DevicePage;

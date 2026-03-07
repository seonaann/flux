import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AlertsPage.css';

const AlertsPage = () => {
    const [activeTab, setActiveTab] = useState('all');

    const getAlerts = () => {
        const alerts = [
            { id: 1, type: 'warning', icon: '⚠️', title: 'Peak Hour Usage Detected', desc: 'Your AC is running during peak hours (2-6 PM). Consider adjusting usage to save $3.50 daily.', time: '2 hours ago' },
            { id: 2, type: 'success', icon: '✅', title: 'Monthly Goal Achieved', desc: 'Congratulations! You\'ve reduced your energy consumption by 15% this month.', time: '5 hours ago' },
            { id: 3, type: 'danger', icon: '🚨', title: 'Unusual Activity', desc: 'Water heater has been running continuously for 6 hours. Check for potential issues.', time: 'Yesterday' },
            { id: 4, type: 'warning', icon: '⚠️', title: 'High Voltage Detected', desc: 'Surge detected on line 2. System stabilized but monitoring.', time: '2 days ago' }
        ];

        if (activeTab === 'all') return alerts;
        return alerts.filter(a => a.type === activeTab);
    };

    return (
        <div className="alerts-wrapper">
            <div className="bg-animation"></div>

            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">Flux</div>
                <nav>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">
                                <span className="nav-icon">📊</span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/realtime" className="nav-link">
                                <span className="nav-icon">⚡</span>
                                <span>Real-Time</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/billing" className="nav-link">
                                <span className="nav-icon">💰</span>
                                <span>Billing</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/alerts" className="nav-link active">
                                <span className="nav-icon">🔔</span>
                                <span>Alerts</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/carbon" className="nav-link">
                                <span className="nav-icon">🌱</span>
                                <span>Carbon Impact</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/device" className="nav-link">
                                <span className="nav-icon">🔌</span>
                                <span>Devices</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="user-profile">
                    <div className="avatar">JD</div>
                    <div className="user-info">
                        <h4>John Doe</h4>
                        <p>Premium Plan</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <header className="dashboard-header">
                    <div className="header-left">
                        <h1>System Alerts 🔔</h1>
                        <p>Notifications, warnings and recommendations</p>
                    </div>
                </header>

                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Filter Alerts</h3>
                        <div className="month-selector" style={{ gap: '1rem' }}>
                            <button
                                className={`btn-secondary ${activeTab === 'all' ? 'btn-active' : ''}`}
                                onClick={() => setActiveTab('all')}
                            >All</button>
                            <button
                                className={`btn-secondary ${activeTab === 'warning' ? 'btn-active' : ''}`}
                                onClick={() => setActiveTab('warning')}
                            >Warnings</button>
                            <button
                                className={`btn-secondary ${activeTab === 'danger' ? 'btn-active' : ''}`}
                                onClick={() => setActiveTab('danger')}
                            >Critical</button>
                            <button
                                className={`btn-secondary ${activeTab === 'success' ? 'btn-active' : ''}`}
                                onClick={() => setActiveTab('success')}
                            >Success</button>
                        </div>
                    </div>

                    <div className="alerts-list">
                        {getAlerts().map((alert) => (
                            <div key={alert.id} className={`alert-item alert-${alert.type}`}>
                                <span className="alert-icon">{alert.icon}</span>
                                <div className="alert-content">
                                    <h4>{alert.title}</h4>
                                    <p>{alert.desc}</p>
                                    <div className="alert-time">{alert.time}</div>
                                </div>
                            </div>
                        ))}

                        {getAlerts().length === 0 && (
                            <p style={{ color: 'rgba(255,255,255,0.6)', padding: '2rem', textAlign: 'center' }}>
                                No alerts found for this category.
                            </p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AlertsPage;

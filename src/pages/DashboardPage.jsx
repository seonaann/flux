import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate('/');
    };

    useEffect(() => {
        const bars = document.querySelectorAll('.chart-bar');
        bars.forEach((bar, index) => {
            bar.style.animationDelay = `${index * 0.1}s`;
        });
    }, []);

    return (
        <div className="dashboard-wrapper">
            <div className="bg-animation"></div>

            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">Flux</div>
                <nav>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link active">
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
                            <Link to="/alerts" className="nav-link">
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
                <div className="sidebar-bottom">
                    <div className="user-profile">
                        <div className="avatar">JD</div>
                        <div className="user-info">
                            <h4>John Doe</h4>
                            <p>Premium Plan</p>
                        </div>
                    </div>
                    <button className="signout-btn" onClick={handleSignOut}>
                        <span className="signout-icon">🚪</span>
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Header */}
                <header className="dashboard-header">
                    <div className="header-left">
                        <h1>Welcome back, John! 👋</h1>
                        <p>Here's your energy overview for today</p>
                    </div>
                    <div className="header-right">
                        <div className="notification-btn" onClick={() => alert('You have 3 new alerts!')}>
                            🔔
                            <span className="notification-badge">3</span>
                        </div>
                    </div>
                </header>

                {/* Stats Overview */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-icon">⚡</span>
                            <span className="stat-trend trend-down">↓ 12%</span>
                        </div>
                        <div className="stat-value">24.7 kWh</div>
                        <div className="stat-label">Today's Usage</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-icon">💰</span>
                            <span className="stat-trend trend-down">↓ $8.40</span>
                        </div>
                        <div className="stat-value">$78.24</div>
                        <div className="stat-label">Estimated Bill</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-icon">🌱</span>
                            <span className="stat-trend trend-up">↑ 15%</span>
                        </div>
                        <div className="stat-value">18.3 kg</div>
                        <div className="stat-label">CO₂ Saved</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-icon">🔌</span>
                            <span className="stat-trend trend-up">↑ 8 Active</span>
                        </div>
                        <div className="stat-value">12</div>
                        <div className="stat-label">Connected Devices</div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="dashboard-grid">
                    {/* Real-Time Analysis */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Real-Time Energy Usage</h3>
                            <a href="#" className="card-action">View Details →</a>
                        </div>
                        <div className="chart-container">
                            <div className="chart-bar" style={{ height: '45%' }}></div>
                            <div className="chart-bar" style={{ height: '60%' }}></div>
                            <div className="chart-bar" style={{ height: '35%' }}></div>
                            <div className="chart-bar" style={{ height: '70%' }}></div>
                            <div className="chart-bar" style={{ height: '55%' }}></div>
                            <div className="chart-bar" style={{ height: '80%' }}></div>
                            <div className="chart-bar" style={{ height: '65%' }}></div>
                            <div className="chart-bar" style={{ height: '50%' }}></div>
                            <div className="chart-bar" style={{ height: '75%' }}></div>
                            <div className="chart-bar" style={{ height: '40%' }}></div>
                        </div>
                    </div>

                    {/* Bill Prediction */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Bill Prediction</h3>
                        </div>
                        <div className="bill-prediction">
                            <div className="bill-amount">$78.24</div>
                            <div className="bill-label">Estimated This Month</div>
                            <div className="bill-details">
                                <div className="bill-row">
                                    <span>Last Month</span>
                                    <span>$86.64</span>
                                </div>
                                <div className="bill-row">
                                    <span>Savings</span>
                                    <span style={{ color: 'var(--accent-green)' }}>$8.40</span>
                                </div>
                                <div className="bill-row">
                                    <span>Days Remaining</span>
                                    <span>15 days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alerts Section */}
                <div className="card" style={{ marginBottom: '2rem' }}>
                    <div className="card-header">
                        <h3 className="card-title">Recent Alerts</h3>
                        <a href="#" className="card-action">View All →</a>
                    </div>
                    <div className="alerts-list">
                        <div className="alert-item alert-warning">
                            <span className="alert-icon">⚠️</span>
                            <div className="alert-content">
                                <h4>Peak Hour Usage Detected</h4>
                                <p>Your AC is running during peak hours (2-6 PM). Consider adjusting usage to save $3.50 daily.</p>
                                <div className="alert-time">2 hours ago</div>
                            </div>
                        </div>
                        <div className="alert-item alert-success">
                            <span className="alert-icon">✅</span>
                            <div className="alert-content">
                                <h4>Monthly Goal Achieved</h4>
                                <p>Congratulations! You've reduced your energy consumption by 15% this month.</p>
                                <div className="alert-time">5 hours ago</div>
                            </div>
                        </div>
                        <div className="alert-item alert-danger">
                            <span className="alert-icon">🚨</span>
                            <div className="alert-content">
                                <h4>Unusual Activity</h4>
                                <p>Water heater has been running continuously for 6 hours. Check for potential issues.</p>
                                <div className="alert-time">Yesterday</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Grid */}
                <div className="bottom-grid">
                    {/* Carbon Footprint */}
                    <div className="card carbon-card">
                        <div className="card-header">
                            <h3 className="card-title">Carbon Footprint</h3>
                        </div>
                        <div className="carbon-visual">
                            <div className="carbon-circle">
                                <div className="carbon-inner">
                                    <div className="carbon-value">68%</div>
                                    <div className="carbon-label">Reduction</div>
                                </div>
                            </div>
                        </div>
                        <div className="carbon-stats">
                            <div className="carbon-stat">
                                <div className="carbon-stat-value">18.3 kg</div>
                                <div className="carbon-stat-label">CO₂ Saved</div>
                            </div>
                            <div className="carbon-stat">
                                <div className="carbon-stat-value">127</div>
                                <div className="carbon-stat-label">Trees Equivalent</div>
                            </div>
                        </div>
                    </div>

                    {/* Top Devices */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Top Energy Consumers</h3>
                            <a href="#" className="card-action">Manage →</a>
                        </div>
                        <div className="device-list">
                            <div className="device-item">
                                <div className="device-info">
                                    <div className="device-icon">❄️</div>
                                    <div className="device-details">
                                        <h4>Air Conditioner</h4>
                                        <p>Living Room</p>
                                    </div>
                                </div>
                                <div className="device-usage">
                                    <div className="device-power">3.2 kW</div>
                                    <div className="device-percentage">42% of total</div>
                                </div>
                            </div>
                            <div className="device-item">
                                <div className="device-info">
                                    <div className="device-icon">🔥</div>
                                    <div className="device-details">
                                        <h4>Water Heater</h4>
                                        <p>Bathroom</p>
                                    </div>
                                </div>
                                <div className="device-usage">
                                    <div className="device-power">2.1 kW</div>
                                    <div className="device-percentage">28% of total</div>
                                </div>
                            </div>
                            <div className="device-item">
                                <div className="device-info">
                                    <div className="device-icon">🧊</div>
                                    <div className="device-details">
                                        <h4>Refrigerator</h4>
                                        <p>Kitchen</p>
                                    </div>
                                </div>
                                <div className="device-usage">
                                    <div className="device-power">0.8 kW</div>
                                    <div className="device-percentage">11% of total</div>
                                </div>
                            </div>
                            <div className="device-item">
                                <div className="device-info">
                                    <div className="device-icon">💻</div>
                                    <div className="device-details">
                                        <h4>Home Office</h4>
                                        <p>Study Room</p>
                                    </div>
                                </div>
                                <div className="device-usage">
                                    <div className="device-power">0.5 kW</div>
                                    <div className="device-percentage">7% of total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;

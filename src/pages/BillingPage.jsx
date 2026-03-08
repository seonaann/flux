import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BillingPage.css';

const BillingPage = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate('/');
    };
    const [currentMonth, setCurrentMonth] = useState('February 2026');

    const downloadBill = () => {
        alert('Downloading bill...');
    };

    const payNow = () => {
        alert('Redirecting to payment gateway...');
    };

    const changeMonth = (direction) => {
        if (direction < 0) {
            setCurrentMonth('January 2026');
        } else {
            setCurrentMonth('March 2026');
        }
    };

    return (
        <div className="billing-wrapper">
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
                            <Link to="/billing" className="nav-link active">
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
                        <h1>Billing & Predictions 💰</h1>
                        <p>Track your energy costs and manage payments</p>
                    </div>
                    <div className="header-right">
                        <button className="btn-secondary" onClick={downloadBill}>Download Bill</button>
                        <button className="btn-primary" onClick={payNow}>Pay Now</button>
                    </div>
                </header>

                {/* Bill Prediction Hero */}
                <div className="bill-hero">
                    <div className="bill-hero-content">
                        <div className="bill-hero-grid">
                            <div className="bill-main">
                                <div className="bill-label">Predicted Bill for {currentMonth}</div>
                                <div className="bill-amount">$78.24</div>
                                <div className="bill-change">↓ $8.40 (9.7%) less than last month</div>
                            </div>
                            <div className="bill-stats">
                                <div className="bill-stat-item">
                                    <span className="bill-stat-label">Last Month</span>
                                    <span className="bill-stat-value">$86.64</span>
                                </div>
                                <div className="bill-stat-item">
                                    <span className="bill-stat-label">Average Daily Cost</span>
                                    <span className="bill-stat-value">$5.22</span>
                                </div>
                                <div className="bill-stat-item">
                                    <span className="bill-stat-label">Days Remaining</span>
                                    <span className="bill-stat-value">15 days</span>
                                </div>
                                <div className="bill-stat-item">
                                    <span className="bill-stat-label">Due Date</span>
                                    <span className="bill-stat-value">Mar 5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cost Breakdown */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Cost Breakdown by Category</h3>
                        <div className="month-selector">
                            <button className="month-btn" onClick={() => changeMonth(-1)}>←</button>
                            <span className="current-month">{currentMonth}</span>
                            <button className="month-btn" onClick={() => changeMonth(1)}>→</button>
                        </div>
                    </div>
                    <div className="cost-breakdown">
                        <div className="cost-item">
                            <div className="cost-icon">❄️</div>
                            <div className="cost-details">
                                <div className="cost-name">Cooling</div>
                                <div className="cost-usage">140 kWh (45%)</div>
                            </div>
                            <div className="cost-bar-wrapper">
                                <div className="cost-bar">
                                    <div className="cost-bar-fill" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                            <div className="cost-amount">$35.00</div>
                        </div>
                        <div className="cost-item">
                            <div className="cost-icon">🔥</div>
                            <div className="cost-details">
                                <div className="cost-name">Heating</div>
                                <div className="cost-usage">90 kWh (28%)</div>
                            </div>
                            <div className="cost-bar-wrapper">
                                <div className="cost-bar">
                                    <div className="cost-bar-fill" style={{ width: '28%' }}></div>
                                </div>
                            </div>
                            <div className="cost-amount">$22.00</div>
                        </div>
                        <div className="cost-item">
                            <div className="cost-icon">💡</div>
                            <div className="cost-details">
                                <div className="cost-name">Lighting</div>
                                <div className="cost-usage">40 kWh (12%)</div>
                            </div>
                            <div className="cost-bar-wrapper">
                                <div className="cost-bar">
                                    <div className="cost-bar-fill" style={{ width: '12%' }}></div>
                                </div>
                            </div>
                            <div className="cost-amount">$10.00</div>
                        </div>
                    </div>
                </div>

                {/* Payment History */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Recent Payments</h3>
                    </div>
                    <table className="payment-table">
                        <thead>
                            <tr>
                                <th>Invoice ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#INV-001</td>
                                <td>Jan 5, 2026</td>
                                <td>$86.64</td>
                                <td><span className="status-badge status-paid">Paid</span></td>
                                <td><button className="action-btn">Download</button></td>
                            </tr>
                            <tr>
                                <td>#INV-002</td>
                                <td>Dec 5, 2025</td>
                                <td>$92.10</td>
                                <td><span className="status-badge status-paid">Paid</span></td>
                                <td><button className="action-btn">Download</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default BillingPage;

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './RealtimePage.css';

const RealtimePage = () => {
    const [data, setData] = useState([]);
    const [liveKw, setLiveKw] = useState(1.82);
    const [totalKwh, setTotalKwh] = useState(24.7);
    const [deviceUsage, setDeviceUsage] = useState({ ac: 60, fridge: 40, light: 25, wm: 10 });

    useEffect(() => {
        const interval = setInterval(() => {
            const live = liveKw + (Math.random() - 0.5) * 0.25;
            const total = totalKwh + live / 120;

            setLiveKw(live);
            setTotalKwh(total);

            const time = new Date().toLocaleTimeString();
            setData(prev => {
                const newData = [...prev, { time, kw: Number(live.toFixed(2)) }];
                if (newData.length > 10) newData.shift();
                return newData;
            });

            setDeviceUsage({
                ac: 60 + Math.random() * 20,
                fridge: 40,
                light: 20 + Math.random() * 10,
                wm: Math.random() * 15
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [liveKw, totalKwh]);

    return (
        <div className="realtime-wrapper">
            <div className="bg-animation"></div>

            <nav>
                <div className="logo">Flux</div>
                <div>⚡ Live Monitoring</div>
            </nav>

            <div className="container">
                <div className="page-title">Real-Time Energy Dashboard</div>

                {/* KPI */}
                <div className="kpi-grid">
                    <div className="kpi">
                        <h3>Total Today</h3>
                        <div className="kpi-value">{totalKwh.toFixed(1)} kWh</div>
                    </div>
                    <div className="kpi">
                        <h3>Current Load</h3>
                        <div className="kpi-value">{liveKw.toFixed(2)} kW</div>
                    </div>
                    <div className="kpi">
                        <h3>Cost Today</h3>
                        <div className="kpi-value">₹284</div>
                    </div>
                    <div className="kpi">
                        <h3>Carbon Saved</h3>
                        <div className="kpi-value">-18%</div>
                    </div>
                </div>

                {/* Line Chart */}
                <div className="chart-card">
                    <h2>Live Power Consumption</h2>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <LineChart data={data}>
                                <XAxis dataKey="time" stroke="#aaa" />
                                <YAxis stroke="#aaa" />
                                <Tooltip contentStyle={{ backgroundColor: 'rgba(26,11,46,0.9)', border: '1px solid #00F0FF' }} />
                                <Line type="monotone" dataKey="kw" stroke="#00F0FF" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Devices */}
                <div className="usage-grid">
                    <div className="device">
                        <h4>Air Conditioner</h4>
                        <div className="bar"><div className="fill" style={{ width: `${deviceUsage.ac}%` }}></div></div>
                    </div>
                    <div className="device">
                        <h4>Refrigerator</h4>
                        <div className="bar"><div className="fill" style={{ width: `${deviceUsage.fridge}%` }}></div></div>
                    </div>
                    <div className="device">
                        <h4>Lighting</h4>
                        <div className="bar"><div className="fill" style={{ width: `${deviceUsage.light}%` }}></div></div>
                    </div>
                    <div className="device">
                        <h4>Washing Machine</h4>
                        <div className="bar"><div className="fill" style={{ width: `${deviceUsage.wm}%` }}></div></div>
                    </div>
                </div>
            </div>

            <footer>© 2026 Flux Energy Tracker</footer>
        </div>
    );
};

export default RealtimePage;

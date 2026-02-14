import React from "react";

export default function FluxDashboard({
  goToLanding,
  goToEnergy,
  goToBilling,
  goToAlerts,
  goToCarbon,
}) {
  const statsData = [
    { title: "⚡ Current Usage", value: "24.7 kWh", trend: "↓ 12%" },
    { title: "💰 Monthly Bill", value: "₹1,250", trend: "↓ ₹180" },
    { title: "🌱 Carbon Saved", value: "18.3 kg", trend: "↑ 15%" },
    { title: "🔌 Devices Active", value: "12", trend: "↑ 8 Online" },
  ];

  const alerts = [
    {
      icon: "⚠️",
      title: "Peak Hour Usage",
      msg: "AC running during peak hours. Save ₹120/day by adjusting.",
    },
    {
      icon: "✅",
      title: "Goal Achieved",
      msg: "You've reduced energy usage by 15% this month!",
    },
    {
      icon: "🚨",
      title: "Unusual Activity",
      msg: "Water heater running continuously for 6 hours.",
    },
  ];

  const devices = [
    { icon: "❄️", name: "Air Conditioner", power: "3.2 kW" },
    { icon: "🔥", name: "Water Heater", power: "2.1 kW" },
    { icon: "🧊", name: "Refrigerator", power: "0.8 kW" },
    { icon: "💻", name: "Home Office", power: "0.5 kW" },
  ];

  // ✅ Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={styles.container}>
      {/* Animated Background */}
      <div style={styles.bgGlow}></div>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>⚡ FLUX</h2>

        <div style={styles.menu}>
          <p style={styles.link} onClick={scrollToTop}>
            Dashboard
          </p>

          <p style={styles.link} onClick={goToEnergy}>
            Energy
          </p>

          <p style={styles.link} onClick={goToBilling}>
            Billing
          </p>

          <p style={styles.link} onClick={goToAlerts}>
            Alerts
          </p>

          <p style={styles.link} onClick={goToCarbon}>
            Carbonfootprint
          </p>
        </div>

        <button onClick={goToLanding} style={styles.logoutBtn}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        <h1 style={styles.heading}>Energy Overview</h1>
        <p style={styles.subheading}>
          Here's your smart energy summary for today ⚡
        </p>

        {/* Stats Cards */}
        <div style={styles.cardContainer}>
          {statsData.map((item, index) => (
            <div key={index} style={styles.card}>
              <h3>{item.title}</h3>
              <p style={styles.value}>{item.value}</p>
              <span style={styles.trend}>{item.trend}</span>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div style={styles.sectionBox}>
          <h2> Real-Time Usage Chart</h2>

          <div style={styles.chart}>
            {[45, 60, 35, 70, 55, 80, 65].map((h, i) => (
              <div
                key={i}
                style={{
                  ...styles.bar,
                  height: `${h}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Alerts Section */}
        <div style={styles.sectionBox}>
          <h2> Recent Alerts</h2>

          {alerts.map((alert, i) => (
            <div key={i} style={styles.alertCard}>
              <span style={{ fontSize: "1.5rem" }}>{alert.icon}</span>
              <div>
                <h4>{alert.title}</h4>
                <p style={styles.alertText}>{alert.msg}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Devices Section */}
        <div style={styles.sectionBox}>
          <h2>🔌 Top Energy Consumers</h2>

          <div style={styles.deviceGrid}>
            {devices.map((d, i) => (
              <div key={i} style={styles.deviceCard}>
                <span style={{ fontSize: "2rem" }}>{d.icon}</span>
                <h4>{d.name}</h4>
                <p style={styles.devicePower}>{d.power}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Carbon Footprint Ring */}
        <div style={styles.sectionBox}>
          <h2>🌍 Carbon Footprint</h2>

          <div style={styles.ring}>
            <div style={styles.ringInner}>
              <h2 style={{ margin: 0 }}>68%</h2>
              <p style={{ margin: 0 }}>Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ✅ Styles */
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#0f2027",
    color: "white",
    fontFamily: "sans-serif",
    overflow: "hidden",
    position: "relative",
  },

  bgGlow: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 20% 50%, rgba(0,240,255,0.12), transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255,245,0,0.10), transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(0,255,135,0.10), transparent 50%)
    `,
    zIndex: 0,
  },

  sidebar: {
    width: "250px",
    background: "rgba(17,24,39,0.9)",
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 2,
  },

  logo: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#00F0FF",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "2rem",
    fontSize: "1.1rem",
  },

  link: {
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "10px",
    transition: "0.3s",
  },

  logoutBtn: {
    padding: "0.8rem",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "#ff4d4d",
    color: "white",
    fontWeight: "600",
  },

  main: {
    flex: 1,
    padding: "2rem",
    overflowY: "auto",
    zIndex: 2,
  },

  heading: {
    fontSize: "2.5rem",
    marginBottom: "0.3rem",
  },

  subheading: {
    color: "rgba(255,255,255,0.6)",
    marginBottom: "2rem",
  },

  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
  },

  card: {
    padding: "1.5rem",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.08)",
  },

  value: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginTop: "0.5rem",
  },

  trend: {
    fontSize: "0.9rem",
    color: "#00FF87",
  },

  sectionBox: {
    marginTop: "2rem",
    padding: "1.5rem",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
  },

  chart: {
    display: "flex",
    alignItems: "flex-end",
    gap: "10px",
    height: "200px",
    marginTop: "1.5rem",
  },

  bar: {
    flex: 1,
    background: "linear-gradient(to top,#00F0FF,#00FF87)",
    borderRadius: "8px",
  },

  alertCard: {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    borderRadius: "15px",
    background: "rgba(0,0,0,0.3)",
    marginTop: "1rem",
  },

  alertText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.9rem",
  },

  deviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },

  deviceCard: {
    padding: "1rem",
    borderRadius: "15px",
    background: "rgba(0,0,0,0.3)",
    textAlign: "center",
  },

  devicePower: {
    color: "#00F0FF",
    fontWeight: "bold",
  },

  ring: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    margin: "2rem auto",
    background:
      "conic-gradient(#00FF87 0% 68%, rgba(255,255,255,0.1) 68% 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ringInner: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    background: "#0f2027",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

import { useState } from "react";

export default function Login({ goToDashboard }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simple fake login validation (UNCHANGED)
    if (email && password) {
      goToDashboard();
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={styles.container}>
      {/* Animated Background Glow */}
      <div style={styles.bgGlow}></div>

      <div style={styles.card}>
        {/* Flux Logo */}
        <h2 style={styles.logo}>Flux</h2>

        {/* Subtitle */}
        <p style={styles.subtitle}>Smart Energy Usage Tracker</p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {/* Login Button */}
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        {/* Footer */}
        <p style={styles.footer}>© 2026 Flux Energy Tracker</p>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

/* ✅ Styles Updated Only */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#1A0B2E",
    fontFamily: "'DM Sans', sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  /* Background Glow */
  bgGlow: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 20% 30%, rgba(0,240,255,0.15), transparent 45%),
      radial-gradient(circle at 80% 70%, rgba(0,255,135,0.15), transparent 45%)
    `,
    zIndex: 0,
  },

  card: {
    width: "380px",
    padding: "3rem 2.5rem",
    borderRadius: "30px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(0,240,255,0.25)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    zIndex: 2,
    animation: "fadeInUp 0.8s ease",
  },

  /* Flux Logo */
  logo: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "2.6rem",
    fontWeight: "800",
    textAlign: "center",
    background: "linear-gradient(135deg, #00F0FF, #00FF87)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "0.2rem",
  },

  subtitle: {
    textAlign: "center",
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.65)",
    marginBottom: "1.5rem",
  },

  input: {
    padding: "0.9rem 1.1rem",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    fontSize: "1rem",
    outline: "none",
    transition: "0.3s ease",
  },

  button: {
    padding: "1rem",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "1rem",
    background: "linear-gradient(135deg, #00F0FF, #00FF87)",
    color: "#1A0B2E",
    boxShadow: "0 15px 40px rgba(0,240,255,0.4)",
    transition: "transform 0.2s ease",
  },

  footer: {
    textAlign: "center",
    fontSize: "0.8rem",
    marginTop: "1.2rem",
    color: "rgba(255,255,255,0.4)",
  },
};

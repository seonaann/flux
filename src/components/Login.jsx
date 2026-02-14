import { useState } from "react";

export default function Login({ goToDashboard }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Modal state
  const [showSignup, setShowSignup] = useState(false);

  // Signup form states
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // Login Logic
  const handleLogin = () => {
    if (email && password) {
      goToDashboard();
    } else {
      alert("Please enter email and password");
    }
  };

  // Signup Logic
  const handleSignup = () => {
    if (signupName && signupEmail && signupPassword) {
      alert("Account Created Successfully ✅");
      setShowSignup(false); // Close modal after signup
    } else {
      alert("Please fill all signup fields");
    }
  };

  return (
    <div style={styles.container}>
      {/* Background Glow */}
      <div style={styles.bgGlow}></div>

      {/* Login Card */}
      <div style={styles.card}>
        <h2 style={styles.logo}>Flux</h2>
        <p style={styles.subtitle}>Smart Energy Usage Tracker</p>

        {/* Login Inputs */}
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

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

        {/* Signup Link */}
        <p style={styles.signupText}>
          Don’t have an account?{" "}
          <span
            onClick={() => setShowSignup(true)}
            style={styles.signupLink}
          >
            Sign Up
          </span>
        </p>

        <p style={styles.footer}>© 2026 Flux Energy Tracker</p>
      </div>

      {/* ✅ Signup Popup Modal */}
      {showSignup && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalCard}>
            {/* Close Button */}
            <span
              style={styles.closeBtn}
              onClick={() => setShowSignup(false)}
            >
              ✖
            </span>

            <h2 style={styles.modalTitle}>Create Account</h2>

            {/* Signup Inputs */}
            <input
              type="text"
              placeholder="Full Name"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              style={styles.input}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Create Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              style={styles.input}
            />

            {/* Signup Button */}
            <button onClick={handleSignup} style={styles.button}>
              Sign Up
            </button>
          </div>
        </div>
      )}

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

        @keyframes popUp {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

/* ✅ Premium Flux Styles */
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

  logo: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "2.6rem",
    fontWeight: "800",
    textAlign: "center",
    background: "linear-gradient(135deg, #00F0FF, #00FF87)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
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
  },

  signupText: {
    textAlign: "center",
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.65)",
  },

  signupLink: {
    color: "#00FF87",
    fontWeight: "700",
    cursor: "pointer",
    textDecoration: "underline",
  },

  footer: {
    textAlign: "center",
    fontSize: "0.8rem",
    marginTop: "1.2rem",
    color: "rgba(255,255,255,0.4)",
  },

  /* ✅ Modal Popup */
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },

  modalCard: {
    width: "420px",
    padding: "2.8rem",
    borderRadius: "25px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(25px)",
    border: "1px solid rgba(0,240,255,0.3)",
    boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    position: "relative",
    animation: "popUp 0.3s ease",
  },

  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "20px",
    cursor: "pointer",
    fontSize: "1.2rem",
    color: "white",
  },

  modalTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.8rem",
    textAlign: "center",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #00F0FF, #00FF87)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

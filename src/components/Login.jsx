import React, { useState } from "react";

export default function FluxAuth() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div style={styles.wrapper}>
      {/* Background Glow */}
      <div style={styles.backgroundGlow} />

      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logo}>Flux</div>
        <div style={styles.subtitle}>Smart Energy Usage Tracker</div>

        {/* Toggle Buttons */}
        <div style={styles.toggleWrapper}>
          <button
            onClick={() => setIsSignIn(true)}
            style={{
              ...styles.toggleButton,
              ...(isSignIn ? styles.activeToggle : {})
            }}
          >
            Sign In
          </button>

          <button
            onClick={() => setIsSignIn(false)}
            style={{
              ...styles.toggleButton,
              ...(!isSignIn ? styles.activeToggle : {})
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Forms */}
        {isSignIn ? <SignInForm /> : <SignUpForm />}

        <div style={styles.footer}>
          © 2026 Flux Energy Tracker
        </div>
      </div>
    </div>
  );
}

/* ========================= */
/* ======= SIGN IN ========= */
/* ========================= */

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />

      <InputGroup
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
      />

      <SubmitButton>Sign In</SubmitButton>
    </form>
  );
}

/* ========================= */
/* ======= SIGN UP ========= */
/* ========================= */

function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up:", { fullName, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        label="Full Name"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="John Doe"
      />

      <InputGroup
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />

      <InputGroup
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Create a password"
      />

      <SubmitButton>Create Account</SubmitButton>
    </form>
  );
}

/* ========================= */
/* ===== INPUT FIELD ======= */
/* ========================= */

function InputGroup({ label, type, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: "1.4rem" }}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={styles.input}
      />
    </div>
  );
}

/* ========================= */
/* ===== BUTTON STYLE ====== */
/* ========================= */

function SubmitButton({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="submit"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...styles.submitButton,
        transform: hover ? "translateY(-3px)" : "translateY(0)"
      }}
    >
      {children}
    </button>
  );
}

/* ========================= */
/* ========= STYLES ======== */
/* ========================= */

const styles = {
  wrapper: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#1A0B2E",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "white"
  },

  backgroundGlow: {
    position: "fixed",
    inset: 0,
    background: `
      radial-gradient(circle at 20% 30%, rgba(0,240,255,0.15), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(0,255,135,0.15), transparent 40%)
    `,
    zIndex: -1
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(0,240,255,0.25)",
    borderRadius: "30px",
    padding: "3rem 2.5rem",
    boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
    margin: "1rem"
  },

  logo: {
    fontSize: "2.5rem",
    fontWeight: 800,
    textAlign: "center",
    background: "linear-gradient(135deg, #00F0FF, #00FF87)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "0.5rem"
  },

  subtitle: {
    textAlign: "center",
    color: "rgba(255,255,255,0.7)",
    marginBottom: "2.5rem"
  },

  toggleWrapper: {
    display: "flex",
    background: "rgba(0,0,0,0.3)",
    borderRadius: "50px",
    marginBottom: "2rem"
  },

  toggleButton: {
    flex: 1,
    padding: "0.8rem",
    border: "none",
    background: "transparent",
    color: "rgba(255,255,255,0.7)",
    fontWeight: 600,
    cursor: "pointer",
    borderRadius: "50px",
    transition: "all 0.3s ease"
  },

  activeToggle: {
    background: "linear-gradient(135deg, #00F0FF, #00FF87)",
    color: "#1A0B2E"
  },

  label: {
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.6)",
    marginBottom: "0.4rem",
    display: "block"
  },

  input: {
    width: "100%",
    padding: "0.9rem 1.1rem",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    fontSize: "0.95rem",
    outline: "none"
  },

  submitButton: {
    width: "100%",
    padding: "1rem",
    borderRadius: "50px",
    border: "none",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
    background: "linear-gradient(135deg, #00F0FF, #00FF87)",
    color: "#1A0B2E",
    boxShadow: "0 15px 40px rgba(0,240,255,0.4)",
    marginTop: "1rem",
    transition: "transform 0.2s ease"
  },

  footer: {
    marginTop: "1.8rem",
    textAlign: "center",
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.5)"
  }
};

import { useState } from 'react';

export default function FluxAuth() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: '#1A0B2E',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      {/* Background Animation */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: `
          radial-gradient(circle at 20% 30%, rgba(0,240,255,0.15), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(0,255,135,0.15), transparent 40%)
        `,
        zIndex: -1
      }} />

      {/* Auth Box */}
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0,240,255,0.25)',
        borderRadius: '30px',
        padding: '3rem 2.5rem',
        boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
        animation: 'fadeInUp 0.8s ease',
        margin: '1rem'
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '2.5rem',
          fontWeight: 800,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #00F0FF, #00FF87)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.5rem'
        }}>
          Flux
        </div>

        {/* Subtitle */}
        <div style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '2.5rem'
        }}>
          Smart Energy Usage Tracker
        </div>

        {/* Toggle */}
        <div style={{
          display: 'flex',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '50px',
          marginBottom: '2rem'
        }}>
          <button
            onClick={() => setIsSignIn(true)}
            style={{
              flex: 1,
              padding: '0.8rem',
              border: 'none',
              background: isSignIn 
                ? 'linear-gradient(135deg, #00F0FF, #00FF87)' 
                : 'transparent',
              color: isSignIn ? '#1A0B2E' : 'rgba(255,255,255,0.7)',
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '50px',
              transition: 'all 0.3s ease'
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            style={{
              flex: 1,
              padding: '0.8rem',
              border: 'none',
              background: !isSignIn 
                ? 'linear-gradient(135deg, #00F0FF, #00FF87)' 
                : 'transparent',
              color: !isSignIn ? '#1A0B2E' : 'rgba(255,255,255,0.7)',
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '50px',
              transition: 'all 0.3s ease'
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Forms */}
        {isSignIn ? (
          <SignInForm />
        ) : (
          <SignUpForm />
        )}

        {/* Footer */}
        <div style={{
          marginTop: '1.8rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)'
        }}>
          © 2026 Flux Energy Tracker
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
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

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', { email, password });
    // Add your sign-in logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputGroup
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton>Sign In</SubmitButton>
    </form>
  );
}

function SignUpForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up:', { fullName, email, password });
    // Add your sign-up logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        label="Full Name"
        type="text"
        placeholder="John Doe"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <InputGroup
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputGroup
        label="Password"
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton>Create Account</SubmitButton>
    </form>
  );
}

function InputGroup({ label, type, placeholder, value, onChange }) {
  return (
    <div style={{ marginBottom: '1.4rem' }}>
      <label style={{
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.6)',
        marginBottom: '0.4rem',
        display: 'block'
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '0.9rem 1.1rem',
          borderRadius: '14px',
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          fontSize: '0.95rem'
        }}
        onFocus={(e) => e.target.style.borderColor = '#00F0FF'}
        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
      />
    </div>
  );
}

function SubmitButton({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="submit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        padding: '1rem',
        borderRadius: '50px',
        border: 'none',
        fontWeight: 700,
        fontSize: '1rem',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #00F0FF, #00FF87)',
        color: '#1A0B2E',
        boxShadow: '0 15px 40px rgba(0,240,255,0.4)',
        marginTop: '1rem',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'transform 0.2s ease'
      }}
    >
      {children}
    </button>
  );
}
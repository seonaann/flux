import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
    e.preventDefault();

    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
    } catch (error) {
        alert(error.message);
    }
};

   const handleSignUp = async (e) => {
    e.preventDefault();

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
    } catch (error) {
        alert(error.message);
    }
};

    return (
        <div className="signup-wrapper">
            <div className="bg-animation"></div>

            <div className="auth-box">
                <div className="logo">Flux</div>
                <div className="subtitle">Smart Energy Usage Tracker</div>

                {/* Toggle */}
                <div className="toggle">
                    <button
                        className={isSignIn ? 'active' : ''}
                        onClick={() => setIsSignIn(true)}
                    >
                        Sign In
                    </button>
                    <button
                        className={!isSignIn ? 'active' : ''}
                        onClick={() => setIsSignIn(false)}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Sign In */}
                <form
                    id="signin"
                    onSubmit={handleSignIn}
                    className={isSignIn ? 'active' : ''}
                    style={{ display: isSignIn ? 'block' : 'none' }}
                >
                    <div className="input-group">
                        <label>Email</label>
                        <input
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
  type="password"
  placeholder="••••••••"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
                    </div>
                    <button type="submit" className="submit-btn">Sign In</button>
                </form>

                {/* Sign Up */}
                <form
                    id="signup"
                    onSubmit={handleSignUp}
                    className={!isSignIn ? 'active' : ''}
                    style={{ display: !isSignIn ? 'block' : 'none' }}
                >
                    <div className="input-group">
                        <label>Full Name</label>
                        <input
  type="text"
  placeholder="John Doe"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
  type="password"
  placeholder="••••••••"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
                    </div>
                    <button type="submit" className="submit-btn" id="signupBtn">Create Account</button>
                </form>

                <div className="footer-text">
                    © 2026 Flux Energy Tracker
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

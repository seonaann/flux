import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        navigate('/dashboard');
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
                        <input type="email" placeholder="you@example.com" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" />
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
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="you@example.com" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Create a password" />
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

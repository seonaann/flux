import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroPage.css';

const IntroPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Create floating particles
        const container = document.getElementById('introContainer');
        if (!container) return;
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const startX = Math.random() * window.innerWidth;
            const endX = (Math.random() - 0.5) * 200;
            const delay = Math.random() * 2;

            particle.style.left = startX + 'px';
            particle.style.bottom = '0';
            particle.style.setProperty('--tx', endX + 'px');
            particle.style.animationDelay = delay + 's';

            container.appendChild(particle);
        }

        const timer1 = setTimeout(() => {
            const c = document.getElementById('introContainer');
            if (c) c.classList.add('fade-out');

            setTimeout(() => {
                navigate('/home');
            }, 800);

        }, 4000);

        return () => clearTimeout(timer1);
    }, [navigate]);

    return (
        <div className="intro-container" id="introContainer">
            <div className="energy-pulse"></div>
            <div className="lightning-bg"></div>
            <div className="lightning-bolt"></div>
            <div className="lightning-bolt"></div>
            <div className="lightning-bolt"></div>

            <div className="logo-container">
                <div className="glow-effect"></div>
                <div className="flux-text">
                    <span>F</span><span>L</span><span>U</span><span>X</span>
                </div>
                <div className="tagline">Smart Energy Tracking</div>
            </div>

            <svg className="progress-ring" width="100" height="100">
                <circle cx="50" cy="50" r="45" />
            </svg>
        </div>
    );
};

export default IntroPage;

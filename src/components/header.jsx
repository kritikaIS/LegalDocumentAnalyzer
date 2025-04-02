import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <div className="logo">
          <span className="logo-icon">
            <img 
              src="https://img.freepik.com/free-vector/golden-scales-justice-emblem_1308-169438.jpg" 
              alt="Scales of Justice" 
            />
          </span>
          <Link to="/" className="logo-text">
            <h1>Clarity Council</h1>
            <span className="logo-subtitle">Legal AI Solutions</span>
          </Link>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                <span className="link-text">Home</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link to="/features" className="nav-link">
                <span className="link-text">Features</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="nav-link">
                <span className="link-text">How It Works</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link to="/upload" className="nav-link">
                <span className="link-text">Upload</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                <span className="link-text">Contact</span>
                <span className="link-underline"></span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <Link to="/login" className="btn btn-login">
            <span>Login</span>
            <div className="hover-bg"></div>
          </Link>
          <Link to="/signup" className="btn btn-primary">
            <span>Sign Up</span>
            <div className="ink-trail"></div>
          </Link>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
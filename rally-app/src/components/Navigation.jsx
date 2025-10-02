import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Rally</span>
          <span className="logo-subtitle">Sports Events</span>
        </Link>
        
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#partner" className="nav-link">Partner with us</a>
          <a href="#signup" className="nav-link">Sign up or log in</a>
          <a href="#account" className="nav-link">Account</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

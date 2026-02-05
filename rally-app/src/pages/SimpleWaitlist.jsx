import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';
import './SimpleWaitlist.css';

const SimpleWaitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <div className="creative-waitlist">
      {/* Top navigation buttons */}
      <div className="top-navigation">
        <button
          onClick={() => setIsContactModalOpen(true)}
          className="contact-button"
        >
          Contact Us
        </button>
        <Link to="/privacy" className="privacy-link">
          Privacy Policy
        </Link>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>

      {/* Main content */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="title-section">
            <h1 className="main-title">
              <span className="title-line-1">Join</span>
              <span className="title-line-2">Rally</span>
            </h1>
            <div className="title-accent"></div>
          </div>
          
          <p className="hero-description">
            Turn <span className="highlight-text">free time</span> into <span className="highlight-text">game time</span>
            <br />
            Find and organise local sports games in minutes.
            Join the waitlist for early access
          </p>
          
          
          
        </div>
      </div>


      {/* Email row (full-width, centered) */}
      <div className="email-row">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="inline-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="email-input-inline"
            />
            <button 
              type="submit" 
              className="join-button-inline"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : 'Join'}
            </button>
          </form>
        ) : (
          <div className="success-message-inline">
            <span className="success-icon">🎉</span>
            You're on the waitlist!
          </div>
        )}
      </div>


      {/* Decorative elements */}
      <div className="decorative-elements">
        <div className="sport-icons">
          <div className="sport-icon">⚽</div>
          <div className="sport-icon">🏀</div>
          <div className="sport-icon">🎾</div>
          <div className="sport-icon">🏐</div>
        </div>
      </div>
    </div>
  );
};

export default SimpleWaitlist;

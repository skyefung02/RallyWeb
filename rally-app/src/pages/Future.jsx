import { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import './WaitingList.css';

const Future = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="waiting-list">
      {/* Hero Section - Deliveroo Style */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                # Join the wait list for early access
              </h1>
              <p className="hero-subtitle">
                Be the first to know when Rally launches in your area:
              </p>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="waitlist-form">
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="email-input"
                    />
                    <button 
                      type="submit" 
                      className="join-button"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Joining...' : 'Join Wait List'}
                    </button>
                  </div>
                  <p className="login-hint">
                    <Link to="/login">Log in</Link> for your recent locations.
                  </p>
                </form>
              ) : (
                <div className="success-message">
                  <h3>🎉 You're on the wait list!</h3>
                  <p>We'll notify you as soon as Rally is ready in your area.</p>
                </div>
              )}
            </div>
            
            <div className="hero-image">
              <div className="tracking-demo">
                <h3>Track games to your court</h3>
                <p>Get your favorite sports games organized in a flash. You'll see when your game organizer has confirmed your spot, and be able to follow the game details along the way. You'll get a notification when it's time to play, too.</p>
                <div className="demo-buttons">
                  <div className="app-store-button coming-soon">
                    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" />
                    <span className="coming-soon-text">Coming Soon</span>
                  </div>
                  <div className="google-play-button coming-soon">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" style={{height: '50px', width: '150px', objectFit: 'contain'}} />
                    <span className="coming-soon-text">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section">
        <div className="container">
          <div className="carousel-header">
            <h2>Join the Game</h2>
            <p>Connect with fellow athletes, create your own games, and join exciting sports activities in your area</p>
          </div>
          <Carousel />
        </div>
      </div>

      {/* Feature Section */}
      <div className="feature-section">
        <div className="container">
          <div className="feature-content">
            <h2>Join the community</h2>
            <p>Need a midweek pick-me-up, a break from solo training or just fancy your favorite sport?</p>
            <p className="disclaimer">Connect with local players and discover games in your area.</p>
          </div>
        </div>
      </div>

      {/* Partnership Sections */}
      <div className="partnerships-section">
        <div className="container">
          <div className="partnerships-grid">
            <div className="partnership-card">
              <h3>Partner with us</h3>
              <p>Join Rally and reach more athletes than ever. We handle game management, so you can focus on the sports.</p>
              <button className="partnership-button">Get started</button>
            </div>
            
            <div className="partnership-card">
              <h3>Coach with us</h3>
              <p>The freedom to fit coaching around your life. Plus great perks and community recognition.</p>
              <button className="partnership-button">Get started</button>
            </div>
            
            <div className="partnership-card">
              <h3>Rally for Teams</h3>
              <p>From team building to corporate sports games, we've got your workplace activities covered.</p>
              <button className="partnership-button">Get started</button>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default Future;



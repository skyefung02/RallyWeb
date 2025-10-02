import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <span className="logo-text">Rally</span>
          </Link>
        </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/data-collection">Data Collection</Link></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Rally Sports, Inc. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy</Link>
              <span>•</span>
              <Link to="/data-collection">Data</Link>
              <span>•</span>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa';
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
          <div style={{ marginTop: '20px' }}>
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a
                href="https://instagram.com/rallygames.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
              >
                <FaTiktok />
              </a>
            </div>
          </div>
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

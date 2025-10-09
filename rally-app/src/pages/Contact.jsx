import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>

      {/* Main content */}
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">
            <span className="title-line-1">Get in</span>
            <span className="title-line-2">Touch</span>
          </h1>
          <div className="title-accent"></div>
          <p className="contact-subtitle">
            Have a question or want to partner with us? We'd love to hear from you.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject Line</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Brief description of your inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder="Tell us more about your question, feedback, or partnership inquiry..."
                rows="5"
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
              <span className="button-text">
                {isLoading ? 'Sending...' : 'Send Message'}
              </span>
              <div className="button-shine"></div>
            </button>
          </form>
        ) : (
          <div className="success-container">
            <div className="success-icon">✉️</div>
            <h3 className="success-title">Message Sent!</h3>
            <p className="success-message">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="send-another-button"
            >
              Send Another Message
            </button>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="decorative-elements">
        <div className="contact-icons">
          <div className="contact-icon">📧</div>
          <div className="contact-icon">💬</div>
          <div className="contact-icon">🤝</div>
          <div className="contact-icon">💡</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

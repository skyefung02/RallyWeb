import { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
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

    // Simulate API call (message not actually delivered yet)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          ×
        </button>

        <div className="modal-header">
          <h2 className="modal-title">Get in Touch</h2>
          <p className="modal-subtitle">
            Have a question or want to partner with us? We'd love to hear from you.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label htmlFor="modal-name" className="form-label">Name</label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-email" className="form-label">Email</label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-subject" className="form-label">Subject</label>
              <input
                type="text"
                id="modal-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-message" className="form-label">Message</label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder="Tell us more..."
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        ) : (
          <div className="success-container">
            <div className="success-icon">
              <svg className="checkmark" viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            <h3 className="success-title">Message Sent!</h3>
            <p className="success-message">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="close-success-button"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2>1. Information We Collect</h2>
            <p>Rally collects information you provide directly to us, such as when you:</p>
            <ul>
              <li>Create an account or profile</li>
              <li>Join our waiting list</li>
              <li>Create or join sports events</li>
              <li>Communicate with us</li>
              <li>Use our services</li>
            </ul>
            
            <h3>Personal Information</h3>
            <p>We may collect personal information including:</p>
            <ul>
              <li>Name and email address</li>
              <li>Profile information (sports preferences, skill level)</li>
              <li>Location data (with your permission)</li>
              <li>Event participation history</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Communicate about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Personalize your experience</li>
            </ul>
          </section>

          <section>
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
            <ul>
              <li>With service providers who assist us in operating our platform</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2>6. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.</p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>
            <p>Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information.</p>
          </section>

          <section>
            <h2>9. International Users</h2>
            <p>If you are accessing our service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located.</p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@rallyapp.com</p>
              <p><strong>Address:</strong> Rally Sports, Inc.<br />
              123 Sports Avenue<br />
              San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

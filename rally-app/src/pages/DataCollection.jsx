import './LegalPages.css';

const DataCollection = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Data Collection & Usage</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2>What Data We Collect</h2>
            <p>At Rally, we collect data to provide you with the best sports event experience. Here's what we gather and why:</p>
            
            <h3>Account Information</h3>
            <ul>
              <li><strong>Email Address:</strong> To create your account and send important updates</li>
              <li><strong>Name:</strong> To personalize your experience and identify you in events</li>
              <li><strong>Profile Details:</strong> Sports preferences, skill level, and interests</li>
            </ul>

            <h3>Event Data</h3>
            <ul>
              <li><strong>Event Participation:</strong> Which events you create, join, or show interest in</li>
              <li><strong>Location Data:</strong> Your general location to suggest nearby events (with permission)</li>
              <li><strong>Event History:</strong> Past events you've participated in for recommendations</li>
            </ul>

            <h3>Usage Analytics</h3>
            <ul>
              <li><strong>App Usage:</strong> How you interact with our platform to improve user experience</li>
              <li><strong>Performance Data:</strong> App crashes and technical issues to fix bugs</li>
              <li><strong>Feature Usage:</strong> Which features you use most to prioritize development</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Data</h2>
            
            <h3>Core Functionality</h3>
            <ul>
              <li><strong>Event Matching:</strong> Connect you with relevant sports events in your area</li>
              <li><strong>Personalization:</strong> Show you events that match your interests and skill level</li>
              <li><strong>Communication:</strong> Send event updates, reminders, and important notifications</li>
              <li><strong>Community Building:</strong> Help you connect with other sports enthusiasts</li>
            </ul>

            <h3>Service Improvement</h3>
            <ul>
              <li><strong>Analytics:</strong> Understand how users interact with our platform</li>
              <li><strong>Feature Development:</strong> Build new features based on user needs</li>
              <li><strong>Bug Fixes:</strong> Identify and resolve technical issues</li>
              <li><strong>Performance Optimization:</strong> Make the app faster and more reliable</li>
            </ul>

            <h3>Safety & Security</h3>
            <ul>
              <li><strong>Account Security:</strong> Protect your account from unauthorized access</li>
              <li><strong>Event Safety:</strong> Monitor for inappropriate behavior or content</li>
              <li><strong>Community Guidelines:</strong> Ensure all users follow our community standards</li>
            </ul>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>We are committed to protecting your privacy. Here's when and how we share your data:</p>
            
            <h3>With Other Users</h3>
            <ul>
              <li><strong>Event Participants:</strong> Your name and profile (as you choose to share it)</li>
              <li><strong>Event Organizers:</strong> Basic information needed for event management</li>
              <li><strong>Community Features:</strong> Public profile information you choose to display</li>
            </ul>

            <h3>With Service Providers</h3>
            <ul>
              <li><strong>Analytics Services:</strong> Anonymous usage data to improve our app</li>
              <li><strong>Email Services:</strong> To send you important notifications</li>
              <li><strong>Cloud Storage:</strong> To securely store your data</li>
            </ul>

            <h3>Legal Requirements</h3>
            <ul>
              <li><strong>Law Enforcement:</strong> Only when required by law or court order</li>
              <li><strong>Safety Concerns:</strong> To protect users from harm</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2>Your Data Rights</h2>
            <p>You have full control over your data. Here are your rights:</p>
            
            <h3>Access & Control</h3>
            <ul>
              <li><strong>View Your Data:</strong> See all information we have about you</li>
              <li><strong>Update Information:</strong> Correct or update your profile anytime</li>
              <li><strong>Download Data:</strong> Get a copy of your data in a portable format</li>
              <li><strong>Delete Account:</strong> Remove your account and all associated data</li>
            </ul>

            <h3>Privacy Settings</h3>
            <ul>
              <li><strong>Profile Visibility:</strong> Control who can see your information</li>
              <li><strong>Event Participation:</strong> Choose how much to share in events</li>
              <li><strong>Communication Preferences:</strong> Control what emails you receive</li>
              <li><strong>Location Sharing:</strong> Decide whether to share your location</li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>We take data security seriously and implement multiple layers of protection:</p>
            
            <h3>Technical Safeguards</h3>
            <ul>
              <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
              <li><strong>Secure Servers:</strong> Data stored on secure, monitored servers</li>
              <li><strong>Access Controls:</strong> Limited access to authorized personnel only</li>
              <li><strong>Regular Audits:</strong> Ongoing security assessments and updates</li>
            </ul>

            <h3>Operational Safeguards</h3>
            <ul>
              <li><strong>Staff Training:</strong> All team members trained on data protection</li>
              <li><strong>Privacy by Design:</strong> Privacy considerations built into all features</li>
              <li><strong>Incident Response:</strong> Rapid response plan for any security issues</li>
            </ul>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>We keep your data only as long as necessary:</p>
            <ul>
              <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
              <li><strong>Inactive Accounts:</strong> Data deleted after 2 years of inactivity</li>
              <li><strong>Legal Requirements:</strong> Some data may be retained for legal compliance</li>
              <li><strong>Anonymized Data:</strong> Usage analytics may be kept in anonymous form</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Integrations</h2>
            <p>We may integrate with third-party services to enhance your experience:</p>
            <ul>
              <li><strong>Social Media:</strong> Optional integration with social platforms</li>
              <li><strong>Payment Processors:</strong> Secure payment processing for premium features</li>
              <li><strong>Maps Services:</strong> Location services for event discovery</li>
              <li><strong>Analytics Tools:</strong> Anonymous usage analytics</li>
            </ul>
            <p>These services have their own privacy policies, which we encourage you to review.</p>
          </section>

          <section>
            <h2>Updates to This Policy</h2>
            <p>We may update this data collection policy to reflect changes in our practices or legal requirements. We will:</p>
            <ul>
              <li>Notify you of significant changes via email or in-app notification</li>
              <li>Post the updated policy on our website</li>
              <li>Update the "Last updated" date at the top of this page</li>
            </ul>
          </section>

          <section>
            <h2>Contact Us About Your Data</h2>
            <p>If you have questions about how we collect, use, or protect your data, please contact us:</p>
            <div className="contact-info">
              <p><strong>Data Protection Officer:</strong> privacy@rallyapp.com</p>
              <p><strong>General Inquiries:</strong> support@rallyapp.com</p>
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

export default DataCollection;

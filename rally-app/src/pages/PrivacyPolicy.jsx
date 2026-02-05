import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-slate-900">Rally</span>
            <span className="text-orange-500">.</span>
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg text-sm"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              <strong>Last updated: November 4th, 2025</strong>
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Rally ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, and share information when you use our mobile application ("App") and related services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-500">
              1. Information We Collect
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              We collect the following types of information when you use Rally:
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">a. Information You Provide</h3>

              <div className="space-y-4 pl-4">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Account information:</strong> When you create an account, we collect your name, email address, username, and password.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Profile details:</strong> You may optionally add information such as a profile photo, location, or preferred sports.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Game information:</strong> When you create or join a game, we collect game details (e.g., location, time, and participants).
                </p>

                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Communications:</strong> We may collect messages or other content you share with other users through the app.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">b. Automatically Collected Information</h3>

              <div className="space-y-4 pl-4">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Device information:</strong> We collect information such as device type, operating system, and app version.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Usage data:</strong> We collect data about how you interact with the app (e.g., pages viewed, features used).
                </p>

                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Location data:</strong> With your permission, we may collect your approximate or precise location to help you find and join nearby games.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  You can disable location access at any time via your device settings.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-500">
              2. How We Use Your Information
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">We use your information to:</p>

            <ul className="space-y-3 pl-6">
              <li className="text-slate-700 leading-relaxed list-disc">Provide and improve the Rally app and its features.</li>
              <li className="text-slate-700 leading-relaxed list-disc">Help users create, join, and manage local sports games.</li>
              <li className="text-slate-700 leading-relaxed list-disc">Enable social interactions between players.</li>
              <li className="text-slate-700 leading-relaxed list-disc">Communicate important updates or changes to our service.</li>
              <li className="text-slate-700 leading-relaxed list-disc">Ensure safety, security, and fraud prevention.</li>
              <li className="text-slate-700 leading-relaxed list-disc">Comply with legal obligations.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-500">
              3. How We Share Your Information
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">We may share your data in the following situations:</p>

            <div className="space-y-4 pl-4">
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">With other users:</strong> When you create or join a game, your name, profile, and relevant game details may be visible to other players.
              </p>

              <p className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">With service providers:</strong> We work with trusted third parties who assist us in operating and maintaining the app
                (e.g., hosting, analytics, or communication tools).
              </p>

              <p className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">For legal reasons:</strong> We may disclose information if required by law or to protect the safety, rights, or property
                of Rally or its users.
              </p>

              <p className="text-slate-700 leading-relaxed font-semibold text-slate-900">
                We do not sell your personal data.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-500">
              4. Data Retention
            </h2>

            <p className="text-slate-700 leading-relaxed">
              We retain your personal data only as long as necessary to provide our services or comply with legal obligations.
              You can request account deletion at any time by contacting us (see Section 8).
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-500">
              5. Your Privacy Rights
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">Depending on your location, you may have rights to:</p>

            <ul className="space-y-3 pl-6 mb-6">
              <li className="text-slate-700 leading-relaxed list-disc">Access, correct, or delete your personal data.</li>
              <li className="text-slate-700 leading-relaxed list-disc">Withdraw consent for location or other optional data.</li>
              <li className="text-slate-700 leading-relaxed list-disc">Request a copy of your information in a portable format.</li>
            </ul>

            <p className="text-slate-700 leading-relaxed">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:rally.soloq@gmail.com" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                rally.soloq@gmail.com
              </a>.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-500">
              6. Security
            </h2>

            <p className="text-slate-700 leading-relaxed">
              We use reasonable technical and organizational measures to protect your information. However, no online service can be completely secure,
              and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-500">
              7. Children's Privacy
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Rally is not intended for children under 13 (or the applicable age in your country). We do not knowingly collect personal information
              from children. If you believe we have done so, please contact us to have it deleted.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-500">
              8. Contact Us
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              If you have any questions or concerns about this Privacy Policy or your personal data, contact us at:
            </p>

            <div className="bg-slate-50 rounded-xl p-6 space-y-3">
              <p className="text-slate-700 leading-relaxed">
                📧 <a href="mailto:rally.soloq@gmail.com" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                  rally.soloq@gmail.com
                </a>
              </p>
              <p className="text-slate-700 leading-relaxed">📍 Rally, Edinburgh, UK</p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-orange-500">
              9. Changes to This Policy
            </h2>

            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify users of significant changes through the app or by email.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-white">Rally</span>
            <span className="text-orange-500">.</span>
          </div>
          <p className="text-slate-400 mb-6">
            Turn free time into game time.
          </p>
          <Link
            to="/"
            className="inline-block text-orange-500 hover:text-orange-400 font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
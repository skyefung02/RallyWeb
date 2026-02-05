import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';

const ModernLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1200; // Slower scroll duration in ms
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  const howItWorksSteps = [
    {
      number: "1",
      title: "Browse Games",
      description: "Find sports activities near you based on your location, skill level, and interests.",
      icon: "🔍"
    },
    {
      number: "2",
      title: "Join or Create",
      description: "Reserve your spot in existing games or start a new one and invite players.",
      icon: "➕"
    },
    {
      number: "3",
      title: "Show Up & Play",
      description: "Get notifications, directions, and connect with your teammates before game time.",
      icon: "🏃"
    },
    {
      number: "4",
      title: "Track & Share",
      description: "Log your games, track your stats, and build your sports profile in the community.",
      icon: "📊"
    }
  ];

  const features = [
    {
      title: "Real-Time Updates",
      description: "Get instant notifications when games are posted or spots open up in your area.",
      icon: "⚡",
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Skill Matching",
      description: "Find games that match your skill level, from casual pickup to competitive play.",
      icon: "🎯",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "In-App Messaging",
      description: "Coordinate with teammates, discuss game details, and build your sports network.",
      icon: "💬",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Easy Payments",
      description: "Split court fees, pay for equipment rentals, all handled securely in the app.",
      icon: "💳",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Multiple Sports",
      description: "Basketball, soccer, tennis, volleyball, and more. All your sports in one place.",
      icon: "⚽",
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Verified Players",
      description: "Build trust with player ratings, reviews, and verified profiles in your community.",
      icon: "✓",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const faqs = [
    {
      question: "How much does Rally cost?",
      answer: "Rally is free to download and use. Some premium features and organized games may have associated fees, but finding and joining most pickup games is completely free."
    },
    {
      question: "What sports are available?",
      answer: "We support basketball, soccer, tennis, volleyball, pickleball, ultimate frisbee, and many more. New sports are added regularly based on community demand."
    },
    {
      question: "How do I organize a game?",
      answer: "Simply tap 'Create Game', choose your sport, set the location, time, and skill level, then invite players or make it public. We'll help you fill the roster and send reminders to everyone."
    },
    {
      question: "Is it safe to meet new players?",
      answer: "Safety is our top priority. All users verify their accounts, and our community rating system helps build trust. Games often happen at public facilities, and you can bring friends along."
    },
    {
      question: "When will Rally be available?",
      answer: "We're currently in development and will be launching soon! Join our waitlist to get early access and be notified as soon as we launch in your area."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-slate-900">Rally</span>
            <span className="text-orange-500">.</span>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-600 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-slate-600 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              FAQ
            </button>
          </div>

          {/* Right Side CTAs */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => scrollToSection('signup')}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg text-sm"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Find Your Next{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Game
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Turn free time into game time. Connect with local players, join pickup sports,
                  and never miss a chance to play your favorite sport.
                </p>
              </div>

              {/* Email Signup Form */}
              <div id="signup" className="scroll-mt-24">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-base"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                    >
                      {isLoading ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 px-6 py-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <span className="text-2xl">✓</span>
                    <span className="text-emerald-700 font-medium">You're on the waitlist! Check your email.</span>
                  </div>
                )}
                <p className="text-sm text-slate-500 mt-3">
                  Join <span className="font-semibold text-orange-600">2,847</span> athletes waiting for early access
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  <span>Free to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  <span>iOS & Android</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  <span>No credit card</span>
                </div>
              </div>
            </div>

            {/* Right: App Mockup Placeholder */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-50 to-slate-100 rounded-3xl p-12 aspect-square flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-8xl">📱</div>
                  <p className="text-slate-400 font-medium">App Mockup</p>
                  <p className="text-sm text-slate-400">Coming Soon</p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Getting started with Rally is simple. Find games, connect with players, and get playing in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 mt-2">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Rally brings together all the tools you need to organize, join, and enjoy pickup sports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-slate-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-orange-200 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 text-lg pr-8">{faq.question}</span>
                  <span className={`text-orange-500 text-2xl transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Download Rally
              </h2>
              <p className="text-xl text-orange-50 mb-12 max-w-2xl mx-auto">
                Get ready to transform your free time into game time. Sign up for early access.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* App Store Badge */}
                <div className="relative group">
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83"
                    alt="Download on the App Store"
                    className="h-14 opacity-50 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 px-4 py-2 rounded-lg text-orange-600 font-semibold text-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>

                {/* Google Play Badge */}
                <div className="relative group">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-20 opacity-50 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 px-4 py-2 rounded-lg text-orange-600 font-semibold text-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Rally</span>
                <span className="text-orange-500">.</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Connecting athletes and sports enthusiasts through pickup games and local sports communities.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-lg">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-lg">IG</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-lg">FB</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                <li>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="hover:text-orange-500 transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Rally. All rights reserved. Turn free time into game time.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default ModernLanding;

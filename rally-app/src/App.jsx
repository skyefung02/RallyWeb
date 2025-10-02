import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import WaitingList from './pages/WaitingList';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataCollection from './pages/DataCollection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<WaitingList />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/data-collection" element={<DataCollection />} />
            {/* Future routes will be added here */}
            {/* <Route path="/events" element={<Events />} /> */}
            {/* <Route path="/create" element={<CreateEvent />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleWaitlist from './pages/SimpleWaitlist';
import Contact from './pages/Contact';
import Future from './pages/Future';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataCollection from './pages/DataCollection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SimpleWaitlist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/future" element={<Future />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/data-collection" element={<DataCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
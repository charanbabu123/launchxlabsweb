import { AnimatePresence } from 'framer-motion';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AwardBanner from './components/AwardBanner';
import Navbar from './components/Navbar';
import Home from './Home';
import Careers from './pages/about/Careers';
import Team1 from './pages/about/Team1';
import AnomalyDetection from './pages/case-studies/AnomalyDetection';
import SocialReviews from './pages/case-studies/SocialReviews';
import SpotifyBooks from './pages/case-studies/SpotifyBooks';
import Contact from './pages/Contact';
import Services from './pages/Services';
import VectorX from './pages/VectorX';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <Router>
  
      <ScrollToTop />
      <div className="min-h-screen">
    
        <AwardBanner />

        
        <div className="relative z-40">
          <Navbar />
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vectorx" element={<VectorX />} />
            <Route path="/services/*" element={<Services />} />
            <Route path="/case-studies/*" element={<SpotifyBooks />} />
            <Route path="/case-studies/spotify-books" element={<SpotifyBooks />} />
            <Route path="/case-studies/social-reviews" element={<SocialReviews />} />
            <Route path="/case-studies/anomaly-detection" element={<AnomalyDetection />} />
            <Route path="/about/*" element={<Team1 />} />
            <Route path="/about/team" element={<Team1 />} />
            <Route path="/about/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vector" element={<VectorX />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/social-reviews" element={<SocialReviews />} />
            <Route path="/real" element={<AnomalyDetection/>} />
            <Route path="/spotify-books" element={<SpotifyBooks/>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;

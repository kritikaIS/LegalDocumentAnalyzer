import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpaceContactPage from './components/contactPage';
import HeroSection from './components/heroSection';
import Header from './components/header';
import HowItWorks from './components/howItWorks';
import Testimonials from './components/testimonials';
import DocumentUpload from './components/documentUpload';
import Footer from './components/footer';
import Landing from './components/landing';
import Login from './components/login';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>

          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<SpaceContactPage />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/howItWorks" element={<HowItWorks />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/upload" element={<DocumentUpload/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/landing" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Reviews from './pages/Reviews';
import FAQs from './pages/FAQs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div id="website">
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </Header>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
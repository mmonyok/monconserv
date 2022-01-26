import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Reviews from './pages/Reviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
          </Routes>
        </Header>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
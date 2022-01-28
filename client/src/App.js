import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import FAQs from './pages/FAQs';
// These are our service pages.
import Concrete from './pages/Concrete';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div id="website">
        <Header>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about_us" element={<AboutUs />} />
              <Route path="services" element={<Services />} >
                <Route path="concrete" element={<Concrete />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
              <Route path="faqs" element={<FAQs />} />
            </Route>
          </Routes>
        </Header>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
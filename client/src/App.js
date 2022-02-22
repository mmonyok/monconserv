import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import ServiceLayout from './components/ServiceLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import FAQs from './pages/FAQs';
// These are our service pages.
import Concrete from './pages/Concrete';
import Block from './pages/Block';
import Brick from './pages/Brick';
import Excavate from './pages/Excavate';
import Demolish from './pages/Demolish';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div id="website">
        <Header>
          <Routes>
            <Route element={<Layout />} />
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about_us" element={<AboutUs />} />
            <Route path="services" element={<ServiceLayout />} >
              <Route index element={<Services />} />
              <Route path="concrete" element={<Concrete />} />
              <Route path="block" element={<Block />} />
              <Route path="brick" element={<Brick />} />
              <Route path="excavate" element={<Excavate />} />
              <Route path="demolish" element={<Demolish />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Header>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
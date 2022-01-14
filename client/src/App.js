import React from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
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
          </Routes>
        </Header>
      </div>
    </BrowserRouter>
  );
}

export default App;
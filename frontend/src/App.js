import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
// MORE IMPORTS WILL GO HERE.

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* ADD MORE ROUTES HERE */}  
        {/* Example: <Route path="/mens" element={<Mens />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

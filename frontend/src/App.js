import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
// MORE IMPORTS WILL GO HERE.

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* ADD MORE ROUTES HERE -Men, Women,Kids,Login,Cart */}  
        {/* Example: <Route path="/men" element={<Men />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

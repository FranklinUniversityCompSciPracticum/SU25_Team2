import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
// MORE IMPORTS WILL GO HERE.

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        {/* Add your routes here, example: <Route path="/about" element={<About />} /> */}
        {/*<Route path="/cart"
        {/*<Route path="/login" 
        {/*<Route path="/register"
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

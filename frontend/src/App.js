import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
// MORE IMPORTS WILL GO HERE.

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        {/* Add your routes here, example: <Route path="/about" element={<About />} /> */}
        {/*<Route path="/register"
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

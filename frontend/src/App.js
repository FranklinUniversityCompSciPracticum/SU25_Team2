import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Register from './Pages/Register'

// MORE IMPORTS WILL GO HERE.

import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/register" element={<Register />} />  
          {/* Add your routes here, example: <Route path="/about" element={<About />} /> */}
          {/*<Route path="/register"
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

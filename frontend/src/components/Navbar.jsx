// Navbar sits above routes will be used to navigate between pages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

// Need to import images for logo and cart icon
// import logo from '../Assets/logo.png'; // logo img 
// import cart_icon from '../Assets/cart-icon.png'; // cart icon img

// Navbar component
// This component will be used to navigate between different pages of the application

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                {/* <img src={logo} alt="" /> */}
                <p>Paradise</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link to="/" className="nav-link">Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => setMenu("mens")}>
                    <Link to="/men" className="nav-link">Men</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li onClick={() => setMenu("womens")}>
                    <Link to="/women" className="nav-link">Women</Link>
                    {menu === "womens" && <hr />}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link to="/kids" className="nav-link">Kids</Link>
                    {menu === "kids" && <hr />}
                </li>
            </ul>
            {/* <img src={cart_icon} alt="Cart" className="nav-cart" /> */}
        </div>
    );
};

export default Navbar;
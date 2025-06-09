// Navbar sits above routes will be used to navigate between pages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

import logo from '../Assets/palm_tree.png';
import cart_icon from '../Assets/cart_icon.png';

// Navbar component
// This component will be used to navigate between different pages of the application

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link to="/" className="nav-logo-link">
                    <img src={logo} alt="" />
                    <p>Case's Store</p>
                </Link>
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
            <div className="nav-login-cart">
                <Link to='/login' className="nav-login"><button>Login</button></Link>
                <Link to='/cart'></Link><img src={cart_icon} alt="Cart" className="nav-cart" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
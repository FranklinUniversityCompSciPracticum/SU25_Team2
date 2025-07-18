// Navbar sits above routes will be used to navigate between pages
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { ShopContext } from '../../Context/ShopContext';
import logo from '../Assets/palm_tree.png';
import cart_icon from '../Assets/cart_icon.png';

// Navbar component
// This component will be used to navigate between different pages of the application

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)

    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link to="/" className="nav-logo-link">
                    <img src={logo} alt="" />
                    <p>Paradise</p>
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
                {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login' className="nav-login"><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="Cart" className="nav-cart" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
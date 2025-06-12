import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import footer_logo from '../Assets/palm_tree.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintrest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className="footer-logo">
                <Link to="/" className="footer-logo-link">
                <img src={footer_logo} alt="" />
                <p>Paradise</p>
                </Link>
            </div>
            <ul className="footer-links">
                <li>Links TBD</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintrest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Right Reserved.</p>
            </div>
        </div>
    );
}
export default Footer;
                
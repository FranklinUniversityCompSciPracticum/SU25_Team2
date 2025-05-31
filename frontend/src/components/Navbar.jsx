// Navbar sits above routes will be used to navigate between pages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState('/');

    // when user clicks nav link update state
    const handleClick = (path) => {
        setIsOpen(path);
    };

    const linkStyle = (path) => ({
        color: isOpen === path ? 'blue' : 'black',
        textDecoration: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        backgroundColor: isOpen === path ? '#f0f0f0' : 'transparent',
    });

    return (
        <nav style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8f8f8' }}>
            {/* Definine four main links */}
            <div style={{ flexGrow: 1 }}>
                <Link to="/"
                    style={linkStyle('/')}
                    onClick={() => handleClick('/')}
                >
                    Shop
                </Link>
                <Link to="/mens"
                    style={linkStyle('/men')}
                    onClick={() => handleClick('/men')}
                >
                    Men
                </Link>
                <Link to="/women"
                    style={linkStyle('/women')}
                    onClick={() => handleClick('/women')}
                >
                    Women
                </Link>
                <Link to="/kids"
                    style={linkStyle('/kids')}
                    onClick={() => handleClick('/kids')}
                >
                    Kids
                </Link>
                
                {/* ADDD MORE LINKS HERE */}
                </div>
                </nav>

    )
}
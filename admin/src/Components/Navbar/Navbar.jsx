import React from 'react'
import './Navbar.css'
import logo from '../../assets/palm_tree.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo-section">
            <img src={logo} alt="" className="nav-logo-img" />
            <p className="nav-logo-text">Paradise</p>
        </div>
        <div className="nav-welcome">
            <h2>Welcome to your Product Management Dashboard</h2>
        </div>
        <div className="nav-profile">
            <span className="admin-text">Admin</span>
        </div>
    </div>
  )
}

export default Navbar
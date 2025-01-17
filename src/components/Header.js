import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Py's Tacos Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/menu">Menu</Link></li>
          <li className="nav-item"><Link to="/customize">Customize</Link></li>
          <li className="nav-item"><Link to="/order">My Order</Link></li>
          <li className="nav-item"><Link to="/aboutus">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

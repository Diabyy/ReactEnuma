import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Profil', href: '#profil' },
    { name: 'Projek', href: '#projek' },
    { name: 'About', href: '#about' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={() => setActiveLink('Home')}>
          <span className="logo-dot">●</span> Logo
        </a>

        <button 
          className={`navbar-toggle ${isOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={activeLink === item.name ? 'active' : ''}
                onClick={() => {
                  setActiveLink(item.name);
                  setIsOpen(false); // Close mobile menu on click
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

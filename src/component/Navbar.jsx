import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ activeSection = 'Home', onSectionChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home', icon: 'home' },
    { name: 'Profil', href: '#profil', icon: 'person' },
    { name: 'Projek', href: '#projek', icon: 'folder_open' },
    { name: 'About', href: '#about', icon: 'info' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (name) => {
    onSectionChange(name);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a 
          href="#home" 
          className="navbar-logo" 
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('Home');
          }}
        >
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
                className={activeSection === item.name ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.name);
                }}
              >
                <span className="material-symbols-outlined nav-item-icon">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

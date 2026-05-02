import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Atote Tech Solution Logo" />
          <span className="logo-text">ATOTE</span>
        </Link>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-item mobile-btn">
             <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
        
        <div className="navbar-actions">
           <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

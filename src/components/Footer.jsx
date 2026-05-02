import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Send, Camera } from 'lucide-react';
import logo from '../assets/logo.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container footer-container">

                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img src={logo} alt="Atote Tech Solution Logo" />
                        <span className="logo-text">ATOTE</span>
                    </Link>
                    <p className="footer-desc">
                        Empowering Your Ideas with Technology. We build powerful digital solutions for businesses, startups, and individuals.
                    </p>
                    <div className="social-links">
                        <a href="https://t.me/AtoteTechDm" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram">
                            <Send size={20} />
                        </a>
                        <a href="https://www.instagram.com/atotetechsolution?igsh=aWp5OHEzOWo0MHFi" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <Camera size={20} />
                        </a>
                        <a href="mailto:atotetechsolution@gmail.com" className="social-icon" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-title">Contact Us</h4>
                    <div className="contact-item">
                        <Mail size={18} />
                        <span>atotetechsolution@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} />
                        <span>0901552962 / 0722936748</span>
                    </div>
                    <div className="contact-item">
                        <MessageCircle size={18} />
                        <span>Telegram: @AtoteTechDm</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Atote Tech Solution. All rights reserved.</p>
                <p>Built by Abate Alemu</p>
            </div>
        </footer>
    );
};

export default Footer;

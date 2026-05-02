import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Code, MonitorSmartphone, TrendingUp, Cpu, Award } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-bg-animation"></div>
                <div className="container hero-container animate-fade-in">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Empowering Your Ideas <br />
                            <span className="text-gradient">with Technology</span>
                        </h1>
                        <p className="hero-subtitle">
                            Modern Websites & Smart Systems for Serious Brands. We build powerful digital solutions for businesses, startups, and individuals.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
                            <Link to="/portfolio" className="btn btn-outline">View Our Work</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK INTRO & FEATURES */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text" data-aos="fade-right">
                            <h2 className="section-title" style={{ textAlign: 'left' }}>We Specialize <span>In</span></h2>
                            <ul className="specialty-list">
                                <li><CheckCircle className="icon" /> Website Development</li>
                                <li><CheckCircle className="icon" /> Full-Stack Systems</li>
                                <li><CheckCircle className="icon" /> Telegram Bots & Mini Apps</li>
                                <li><CheckCircle className="icon" /> Branding Solutions</li>
                                <li><CheckCircle className="icon" /> Social Media Growth</li>
                            </ul>
                        </div>

                        <div className="why-choose-us" data-aos="fade-left">
                            <div className="glass-card">
                                <h3>Why Choose Us</h3>
                                <ul className="benefit-list mt-3">
                                    <li><strong>Affordable</strong> & Negotiable Pricing</li>
                                    <li><strong>Modern</strong> Professional Design</li>
                                    <li><strong>Fast Delivery</strong> & Reliable Support</li>
                                    <li><strong>Business Growth</strong> Focused</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED SERVICES */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="section-title">Featured <span>Services</span></h2>
                    <div className="services-grid">
                        <div className="glass-card service-card">
                            <MonitorSmartphone className="service-icon" />
                            <h3>Website Development</h3>
                            <p>Business websites, portfolios, eCommerce solutions tailored to your brand.</p>
                        </div>
                        <div className="glass-card service-card">
                            <Code className="service-icon" />
                            <h3>Full Stack Solutions</h3>
                            <p>Custom dashboards, systems, and administrative panels built to scale.</p>
                        </div>
                        <div className="glass-card service-card">
                            <Cpu className="service-icon" />
                            <h3>Telegram Bots & Mini Apps</h3>
                            <p>Smart automation and customer service bots inside Telegram.</p>
                        </div>
                        <div className="glass-card service-card">
                            <Award className="service-icon" />
                            <h3>Branding & Promotion</h3>
                            <p>Logos, digital presence setup, and media support for solid identity.</p>
                        </div>
                        <div className="glass-card service-card">
                            <TrendingUp className="service-icon" />
                            <h3>IT Consultation</h3>
                            <p>Expert business tech advice to help you navigate digital transformation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT THE FOUNDER & TEAM */}
            <section className="section bg-secondary">
                <div className="container">
                    <h2 className="section-title">Meet The <span>Team</span></h2>
                    <div className="team-grid">
                        <div className="glass-card team-card">
                            <img src="/src/assets/abate.jpg" className="team-avatar ab" style={{ objectFit: "cover", objectPosition: "top", width: "100px", height: "100px", borderRadius: "50%", marginBottom: "1.5rem" }} alt="Abate Alemu" />
                            <h3>Abate Alemu</h3>
                            <p className="team-role">Founder & CEO / Lead Developer</p>
                            <p className="team-bio">Web developer passionate about helping companies grow digitally through modern websites and smart technology.</p>
                        </div>

                        <div className="glass-card team-card">
                            <div className="team-avatar be">B</div>
                            <h3>Bezawit Haile</h3>
                            <p className="team-role">Social Media & Operations Manager</p>
                            <p className="team-bio">Handles communication, brand growth, and social presence. Ensures smooth operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS (Placeholder) */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="section-title">Client <span>Testimonials</span></h2>
                    <div className="testimonial-grid">
                        <div className="glass-card testimonial-card">
                            <p className="quote">"Professional and fast service. The team delivered beyond expectations!"</p>
                            <h4 className="mt-3">- Happy Client</h4>
                        </div>
                        <div className="glass-card testimonial-card">
                            <p className="quote">"Very modern website design, absolutely loved the final outcome."</p>
                            <h4 className="mt-3">- Business Owner</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section cta-section">
                <div className="container text-center cta-container animate-fade-in">
                    <h2>Ready to grow your business online?</h2>
                    <p>Let’s build something amazing together.</p>
                    <Link to="/contact" className="btn btn-primary mt-4">Start Project Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

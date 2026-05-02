import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';
import abateImg from '../assets/abate.jpg';

const AboutUs = () => {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '80px' }}>
            {/* HEADER BANNER */}
            <section className="section bg-secondary text-center">
                <div className="container">
                    <h1 className="section-title" style={{ marginBottom: '1rem' }}>About <span>Us</span></h1>
                    <p style={{ color: 'var(--color-light-gray)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Who We Are & What Drives Us.
                    </p>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Empowering Growth Through <span style={{ color: 'var(--color-purple-light)' }}>Innovation</span></h2>
                            <p style={{ color: 'var(--color-light-gray)', marginBottom: '1rem' }}>
                                Atote Tech Solution is a growing technology company focused on practical digital solutions.
                            </p>
                            <p style={{ color: 'var(--color-light-gray)' }}>
                                Our story began with a simple mission: to help businesses modernize and succeed online. Founded by Abate Alemu, we combine our passion for coding with a deep understanding of business strategy to deliver tools that not only look good, but produce real results.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                            <div className="glass-card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Target size={40} style={{ color: 'var(--color-purple-light)' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.2rem' }}>Our Mission</h4>
                                    <p style={{ color: 'var(--color-light-gray)', fontSize: '0.9rem' }}>To deliver impactful web and software solutions.</p>
                                </div>
                            </div>
                            <div className="glass-card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Lightbulb size={40} style={{ color: 'var(--color-purple-light)' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.2rem' }}>Our Vision</h4>
                                    <p style={{ color: 'var(--color-light-gray)', fontSize: '0.9rem' }}>To become a trusted technology brand locally and globally.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR TEAM */}
            <section className="section bg-secondary text-center">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="section-title">Our <span>Team</span></h2>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
                        <div className="glass-card" style={{ flex: '1 1 300px', minWidth: '300px' }}>
                            <img src={abateImg} alt="Abate Alemu" style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", objectPosition: "top", marginBottom: "1rem" }} />
                            <h3>Abate Alemu</h3>
                            <p style={{ color: 'var(--color-purple-light)', marginBottom: '1rem', fontWeight: '500' }}>Founder & CEO / Lead Developer</p>
                            <p style={{ color: 'var(--color-light-gray)', fontSize: '0.95rem' }}>A passionate web developer helping companies grow digitally.</p>
                        </div>
                        <div className="glass-card" style={{ flex: '1 1 300px', minWidth: '300px' }}>
                            <img src={abateImg} alt="Abate Alemu" style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", objectPosition: "top", marginBottom: "1rem" }} />
                            <h3>Bezawit Haile</h3>
                            <p style={{ color: 'var(--color-purple-light)', marginBottom: '1rem', fontWeight: '500' }}>Social Media & Operations Manager</p>
                            <p style={{ color: 'var(--color-light-gray)', fontSize: '0.95rem' }}>The driving force behind communication, brand growth, and operations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;

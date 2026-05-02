import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <section className="section bg-secondary text-center">
                <div className="container">
                    <h1 className="section-title" style={{ marginBottom: '1rem' }}>Transparent <span>Pricing</span></h1>
                    <p style={{ color: 'var(--color-light-gray)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Affordable web and app solutions designed to scale your business. Choose a plan that works best for you.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>

                        {/* Starter Plan */}
                        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-pure-white)' }}>Starter Website</h3>
                            <p style={{ color: 'var(--color-light-gray)', marginTop: '0.5rem' }}>Perfect for individuals and small startups.</p>
                            <div style={{ margin: '2rem 0', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-purple-light)' }}>15,000</span>
                                <span style={{ fontSize: '1.2rem', color: 'var(--color-light-gray)', marginLeft: '10px' }}>ETB+</span>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1' }}>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Up to 5 Pages</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Mobile Responsive</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Basic SEO Setup</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Content Upload</li>
                            </ul>
                            <Link to="/contact" className="btn btn-outline" style={{ marginTop: '2rem', width: '100%' }}>Get Started</Link>
                        </div>

                        {/* Business Plan (Highlighted) */}
                        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderColor: 'var(--color-purple-light)', background: 'rgba(157, 78, 221, 0.1)', transform: 'scale(1.05)' }}>
                            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-purple)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>MOST POPULAR</div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-pure-white)' }}>Business Website</h3>
                            <p style={{ color: 'var(--color-light-gray)', marginTop: '0.5rem' }}>For growing organizations requiring more power.</p>
                            <div style={{ margin: '2rem 0', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-pure-white)' }}>30,000</span>
                                <span style={{ fontSize: '1.2rem', color: 'var(--color-light-gray)', marginLeft: '10px' }}>ETB+</span>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1' }}>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Advanced UI/UX Design</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Up to 15 Pages</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Functional Forms / DB</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Admin Dashboard Control</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Premium 24/7 Support</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>Choose Business</Link>
                        </div>

                        {/* Premium Custom Plan */}
                        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-pure-white)' }}>Premium Custom</h3>
                            <p style={{ color: 'var(--color-light-gray)', marginTop: '0.5rem' }}>Large systems, eCommerce, or Telegram integrations.</p>
                            <div style={{ margin: '2rem 0', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <span style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--color-purple-light)' }}>Negotiable</span>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1' }}>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Fully Custom Architecture</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> eCommerce Capabilities</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> Intelligent Bots</li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><Check size={20} style={{ color: 'var(--color-purple-light)' }} /> 3rd Party API Integrations</li>
                            </ul>
                            <Link to="/contact" className="btn btn-outline" style={{ marginTop: '2rem', width: '100%' }}>Contact Sales</Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mobile Adjustment for the highlighted plan */}
            <style>{`
        @media (max-width: 900px) {
          .glass-card {
            transform: scale(1) !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Pricing;

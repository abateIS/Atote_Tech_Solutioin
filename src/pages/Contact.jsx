import React from 'react';
import { Mail, Phone, ExternalLink, MapPin } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for getting in touch! This is a demo form.');
    };

    return (
        <div className="animate-fade-in" style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <section className="section text-center">
                <div className="container">
                    <h1 className="section-title">Get In <span>Touch</span></h1>
                    <p style={{ color: 'var(--color-light-gray)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        We'd love to hear from you. Drop us a message, or connect with us on our socials.
                    </p>
                </div>
            </section>

            <section className="section pt-0">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'stretch' }}>

                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass-card" style={{ flex: '1' }}>
                                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Contact Information</h3>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                    <Mail style={{ color: 'var(--color-gold)', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email</h4>
                                        <p style={{ color: 'var(--color-light-gray)' }}>atotetechsolution@gmail.com</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                    <ExternalLink style={{ color: 'var(--color-gold)', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Instagram</h4>
                                        <a href="https://www.instagram.com/atotetechsolution?igsh=aWp5OHEzOWo0MHFi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-light-gray)' }}>
                                            @atotetechsolution
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                    <ExternalLink style={{ color: 'var(--color-gold)', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Telegram</h4>
                                        <a href="https://t.me/AtoteTechDm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-light-gray)' }}>
                                            @AtoteTechDm
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                    <Phone style={{ color: 'var(--color-gold)', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Phone</h4>
                                        <p style={{ color: 'var(--color-light-gray)' }}>0901552962 / 0722936748</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <MapPin style={{ color: 'var(--color-gold)', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Located</h4>
                                        <p style={{ color: 'var(--color-light-gray)' }}>Addis Ababa, Ethiopia (Local + Global Vision)</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-card">
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send Us a Message</h3>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', color: 'var(--color-light-gray)' }}>Full Name</label>
                                        <input type="text" required placeholder="John Doe" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(10, 25, 47, 0.5)', color: 'white', outline: 'none' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', color: 'var(--color-light-gray)' }}>Phone</label>
                                        <input type="tel" required placeholder="+251 911 000000" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(10, 25, 47, 0.5)', color: 'white', outline: 'none' }} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--color-light-gray)' }}>Company</label>
                                    <input type="text" placeholder="Your Company Ltd." style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(10, 25, 47, 0.5)', color: 'white', outline: 'none' }} />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--color-light-gray)' }}>Message</label>
                                    <textarea rows="6" required placeholder="How can we help you..." style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(10, 25, 47, 0.5)', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        input:focus, textarea:focus {
          border-color: var(--color-gold) !important;
        }
        .pt-0 { padding-top: 0 !important; }
        @media(max-width: 768px) {
          form > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
};

export default Contact;

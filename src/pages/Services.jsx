import React from 'react';
import { Layers, MonitorSmartphone, LayoutGrid, Megaphone, Server, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: <LayoutGrid size={48} />,
            title: 'Website Design',
            desc: 'Creating visually stunning, modern templates and mockups tailored to your brand.'
        },
        {
            icon: <MonitorSmartphone size={48} />,
            title: 'Web & eCommerce',
            desc: 'Robust full-stack development, dynamic functional sites, and robust online stores.'
        },
        {
            icon: <Layers size={48} />,
            title: 'Telegram Bot & Mini Apps',
            desc: 'Specialized in customer support bots, admin automation, and Telegram-native WebApps.'
        },
        {
            icon: <Megaphone size={48} />,
            title: 'Branding & Social Media',
            desc: 'Logos, digital assets, social media growth strategies, and brand presence.'
        },
        {
            icon: <Server size={48} />,
            title: 'Hosting & Maintenance',
            desc: 'Providing fast and secure deployment, along with long-term maintenance and updates.'
        },
        {
            icon: <Search size={48} />,
            title: 'SEO Basics',
            desc: 'Setting up optimal on-page SEO, valid meta tags, and structured data so you rank higher.'
        }
    ];

    return (
        <div className="animate-fade-in" style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <section className="section text-center">
                <div className="container">
                    <h1 className="section-title">Our Detailed <span>Services</span></h1>
                    <p style={{ color: 'var(--color-light-gray)', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.2rem' }}>
                        We offer end-to-end IT solutions. From simple landing pages to advanced systems, we have got you covered.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {services.map((service, idx) => (
                            <div key={idx} className="glass-card" style={{ textAlign: 'left', padding: '2.5rem' }}>
                                <div style={{ color: 'var(--color-purple-light)', marginBottom: '1.5rem' }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--color-light-gray)', lineHeight: '1.6' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4" style={{ marginTop: '4rem' }}>
                        <Link to="/contact" className="btn btn-primary">Start a Project With Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            category: 'Advance Website (Upcoming)',
            title: 'Walk-Addis',
            desc: 'A comprehensive touring and event website for discovering Ethiopia. Currently in active development and launching soon.',
            image: 'https://images.unsplash.com/photo-1534430252179-c5c2fc95f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            category: 'Portal System',
            title: 'Scripture Union of Ethiopia',
            desc: 'A robust and secure portal system developed to streamline internal operations and data management.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            category: 'Full Stack Website',
            title: 'Arada Multimedia Company',
            desc: 'An advanced, high-performance marketing website and integrated admin dashboard for an emerging media agency.',
            image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            category: 'Advance Website',
            title: 'Power Plan Development Organization',
            desc: 'A professional and dynamic website showcasing their strategic initiatives and comprehensive services.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
    ];

    return (
        <div className="animate-fade-in" style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <section className="section bg-secondary text-center">
                <div className="container">
                    <h1 className="section-title" style={{ marginBottom: '1rem' }}>Our <span>Portfolio</span></h1>
                    <p style={{ color: 'var(--color-light-gray)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        A showcase of our recent projects across web development, bots, and branding.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {projects.map((proj, idx) => (
                            <div key={idx} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
                                    {/* Using standard Unsplash placeholders scaled appropriately to fit tech aesthetic */}
                                    <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="portfolio-img" />
                                </div>
                                <div style={{ padding: '2rem', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {proj.category}
                                    </span>
                                    <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.4rem' }}>{proj.title}</h3>
                                    <p style={{ color: 'var(--color-light-gray)', marginBottom: '1.5rem', flex: '1' }}>{proj.desc}</p>
                                    <button className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', gap: '8px' }}>
                                        View Case <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Small inline style for portfolio image hover because we don't have Portfolio.css yet */}
            <style>{`
        .glass-card:hover .portfolio-img {
          transform: scale(1.05);
        }
      `}</style>
        </div>
    );
};

export default Portfolio;

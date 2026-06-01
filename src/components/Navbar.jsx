import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { label: 'Approach', href: '#system', number: '01' },
    { label: 'Work', href: '#projects', number: '02' },
    { label: 'About', href: '#about', number: '03' },
    { label: 'Experience', href: '#experience', number: '04' },
    { label: 'Contact', href: '#contact', number: '05' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMobileOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    SF
                </div>
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={mobileOpen}
                    aria-controls="primary-navigation"
                >
                    {mobileOpen ? '✕' : '☰'}
                </button>
                <ul id="primary-navigation" className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setMobileOpen(false)}>
                                <span>{link.number}</span>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

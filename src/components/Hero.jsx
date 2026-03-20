import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
    'Full-Stack Developer',
    'Data-Driven Builder',
    'AI Integrations',
    'Problem Solver',
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting) {
            if (displayText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 40);
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="hero-badge-dot" />
                    Open to Internship Opportunities
                </motion.div>

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Hi, I'm{' '}
                    <span className="hero-name-gradient">Salim Fraj</span>
                </motion.h1>

                <motion.div
                    className="hero-typing"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <span className="typing-text">{displayText}</span>
                    <span className="typing-cursor">|</span>
                </motion.div>

                <motion.p
                    className="hero-tagline"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    Software Development student at Bow Valley College (Dean's List, graduating April 2026).
                    I build and ship full-stack web apps, from AI-powered PWAs to ERP systems for real clients.
                    Open to internship roles in software, data, or product engineering.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <a href="#projects" className="btn btn-primary">
                        View Projects ↓
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Get In Touch
                    </a>
                </motion.div>
            </div>

            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}

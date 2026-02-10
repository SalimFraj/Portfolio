import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import './About.css';

const skills = [
    {
        category: 'Languages',
        tags: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    },
    {
        category: 'Frameworks & Tools',
        tags: ['React', 'Node.js', 'Firebase', 'Docker', 'Vite', 'Git'],
    },
    {
        category: 'AI & Data',
        tags: ['Groq API', 'Data Pipelines', 'ETL', 'Recharts', 'REST APIs'],
    },
    {
        category: 'Security',
        tags: ['Firewalls', 'IDS/IPS', 'Active Directory', 'JWT Auth', 'RBAC'],
    },
];

const certifications = [
    { name: 'Google Cybersecurity Analyst', icon: '🛡️' },
    { name: 'Meta Front-End Development', icon: '⚛️' },
];

const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'Fluent' },
    { name: 'Arabic', level: 'Native' },
    { name: 'German', level: 'Advanced' },
];

function CountUp({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (!isInView) return;
        const duration = 1500;
        const steps = 30;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 },
};

export default function About() {
    return (
        <section className="about" id="about">
            <div className="section-container">
                <motion.h2 className="section-title" {...fadeInUp}>About Me</motion.h2>
                <motion.p className="section-subtitle" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
                    A passionate developer building real-world solutions
                </motion.p>

                <div className="about-grid">
                    <motion.div className="about-text" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
                        <p>
                            I'm a Software Development student at Bow Valley College (Dean's List)
                            with a passion for building intelligent, user-focused applications. I specialize
                            in full-stack web development with React and Node.js, and I love integrating
                            AI to create smarter experiences.
                        </p>
                        <p>
                            From AI-powered food assistants to secure restaurant platforms, I build
                            applications that solve real problems. I'm also a Senior Coding Instructor,
                            helping the next generation of developers grow.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-card glass-card">
                                <div className="highlight-number">
                                    <CountUp target={2} suffix="+" />
                                </div>
                                <div className="highlight-label">Production Apps</div>
                            </div>
                            <div className="highlight-card glass-card">
                                <div className="highlight-number">
                                    <CountUp target={4} />
                                </div>
                                <div className="highlight-label">Languages Spoken</div>
                            </div>
                            <div className="highlight-card glass-card">
                                <div className="highlight-number">
                                    <CountUp target={2} />
                                </div>
                                <div className="highlight-label">Certifications</div>
                            </div>
                        </div>

                        <div className="cert-list">
                            {certifications.map((cert) => (
                                <div className="cert-item glass-card" key={cert.name}>
                                    <div className="cert-icon">{cert.icon}</div>
                                    <span>{cert.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="languages-row" style={{ marginTop: '1.5rem' }}>
                            {languages.map((lang) => (
                                <div className="language-badge" key={lang.name}>
                                    {lang.name}
                                    <span className="language-level">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="skills-section" {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
                        {skills.map((group, i) => (
                            <div className="skill-category" key={group.category}>
                                <h3>{group.category}</h3>
                                <div className="skill-tags">
                                    {group.tags.map((tag, j) => (
                                        <motion.span
                                            className="skill-tag"
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

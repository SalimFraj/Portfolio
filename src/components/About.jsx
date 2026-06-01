import { motion } from 'framer-motion';
import './About.css';

const skills = [
    {
        category: 'Build',
        tags: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    },
    {
        category: 'Ship',
        tags: ['React', 'Next.js', 'Node.js', 'Sanity CMS', 'Firebase', 'Docker', 'Vite', 'Git'],
    },
    {
        category: 'AI & Data',
        tags: ['Groq API', 'AI Workflows', 'Schema.org SEO', 'Firebase Analytics', 'REST APIs', 'SQL Reporting'],
    },
    {
        category: 'Operate',
        tags: ['Firewalls', 'IDS/IPS', 'Active Directory', 'JWT Auth', 'RBAC'],
    },
];

const certifications = [
    { name: 'CS50: Introduction to Computer Science - Harvard University (edX)', icon: 'CS' },
    { name: 'Google Cybersecurity Analyst - Google (Coursera)', icon: 'CY' },
    { name: 'Meta Front-End Development - Meta (Coursera)', icon: 'FE' },
];

const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'Fluent' },
    { name: 'Arabic', level: 'Native' },
    { name: 'German', level: 'Advanced' },
];

const principles = [
    { label: 'Understand', text: 'Start with the workflow before choosing the technology.' },
    { label: 'Ship', text: 'Build usable versions with fallback paths and clear constraints.' },
    { label: 'Explain', text: 'Make technical systems clear to clients, teammates, and reviewers.' },
];

const proofSignals = [
    {
        label: 'Shipped systems',
        value: '5',
        text: 'Live apps, a production client site, and an ERP implementation.',
    },
    {
        label: 'Client-facing builds',
        value: '3',
        text: 'CMS delivery, ERP onboarding, and curriculum handoff work.',
    },
    {
        label: 'Working languages',
        value: '4',
        text: 'English, French, Arabic, and German for support-heavy teams.',
    },
];

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
                <motion.div className="about-heading" {...fadeInUp}>
                    <p className="section-kicker">About</p>
                    <h2 className="section-title">I build software for real users and real workflows.</h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div className="about-text" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
                        <p>
                            I build software that has to work for real users, clients, and business processes.
                            My strongest projects combine full-stack engineering, AI-assisted workflows, and
                            operational systems: ConsultIQ for governed AI workflow design, Tiffany Bleu for a
                            production client CMS site, DinnerHelp for a consumer AI PWA, Smart Restaurant for
                            backend and dashboard work, and ERPNext for inventory and manufacturing operations.
                        </p>

                        <div className="about-principles">
                            {principles.map((principle) => (
                                <div className="principle-item" key={principle.label}>
                                    <span />
                                    <div>
                                        <strong>{principle.label}</strong>
                                        <p>{principle.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="proof-scoreboard glass-card">
                            {proofSignals.map((signal) => (
                                <div className="proof-score" key={signal.label}>
                                    <strong>{signal.value}</strong>
                                    <span>{signal.label}</span>
                                    <p>{signal.text}</p>
                                </div>
                            ))}
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

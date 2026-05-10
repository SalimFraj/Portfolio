import { motion } from 'framer-motion';
import './About.css';

const skills = [
    {
        category: 'Languages',
        tags: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    },
    {
        category: 'Frameworks & Tools',
        tags: ['React', 'Next.js', 'Node.js', 'Sanity CMS', 'Firebase', 'Docker', 'Vite', 'Git'],
    },
    {
        category: 'AI & Data',
        tags: ['Groq API', 'Schema.org SEO', 'Firebase Analytics', 'Recharts', 'REST APIs', 'SQL Reporting'],
    },
    {
        category: 'Security',
        tags: ['Firewalls', 'IDS/IPS', 'Active Directory', 'JWT Auth', 'RBAC'],
    },
];

const certifications = [
    { name: 'CS50: Introduction to Computer Science - Harvard University (edX)', icon: '🎓' },
    { name: 'Google Cybersecurity Analyst - Google (Coursera)', icon: '🛡️' },
    { name: 'Meta Front-End Development - Meta (Coursera)', icon: '⚛️' },
];

const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'Fluent' },
    { name: 'Arabic', level: 'Native' },
    { name: 'German', level: 'Advanced' },
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
                <motion.h2 className="section-title" {...fadeInUp}>About Me</motion.h2>


                <div className="about-grid">
                    <motion.div className="about-text" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
                        <p>
                            I started building software because I wanted to make things that actually work
                            in the real world, not just pass tests. My projects are all deployed and in use:
                            Tiffany Bleu is a production Next.js beauty salon site for a local client, DinnerHelp is a live AI-powered PWA,
                            Smart Restaurant is a full-stack platform with a real backend, and my capstone is a production ERP system I configured and
                            delivered for a real client company. Outside of projects, I teach coding to
                            students aged 7 to 14 at Code Ninjas in Calgary, which has made me unusually
                            good at explaining technical concepts clearly. I'm fluent in four languages,
                            which occasionally comes in handy. I'm currently looking for a junior role or
                            entry level role where I can contribute real work from day one.
                        </p>



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

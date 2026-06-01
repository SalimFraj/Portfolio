import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        role: 'Senior Coding Instructor',
        company: 'Code Ninjas · Calgary, AB',
        date: 'Sept 2024 - Present',
        icon: 'CN',
        bullets: [
            'Coach 10+ concurrent learners through programming concepts while adapting pacing to individual progress patterns.',
            'Translate technical progress into plain-language updates for parents and non-technical stakeholders.',
            'Maintain structured records of student milestones, curriculum completion rates, and learning outcomes across cohorts.',
        ],
    },
    {
        role: 'Coding Camp Curriculum Developer',
        company: 'Bow Valley College · Contract',
        date: 'Aug 2025',
        icon: 'BVC',
        bullets: [
            'Designed multi-week development programs with 300+ instructional slides and reproducible lab environments.',
            'Delivered consistent lesson material, labs, and documentation under a tight contract timeline.',
        ],
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 },
};

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="section-container">
                <motion.h2 className="section-title" {...fadeInUp}>Experience</motion.h2>
                <motion.p className="section-subtitle" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
                    Technical roles where I explain software clearly, manage learning outcomes, and deliver usable materials.
                </motion.p>

                <div className="experience-timeline">
                    {experiences.map((exp, i) => (
                        <motion.div
                            className="experience-item"
                            key={exp.role}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <div className="experience-dot">{exp.icon}</div>
                            <div className="experience-card glass-card">
                                <div className="experience-date">{exp.date}</div>
                                <h3 className="experience-role">{exp.role}</h3>
                                <p className="experience-company">{exp.company}</p>
                                <ul className="experience-bullets">
                                    {exp.bullets.map((bullet, j) => (
                                        <li key={j}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="education-section" {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
                    <h3 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1rem', fontWeight: 600 }}>
                        Education
                    </h3>
                    <div className="education-card glass-card">
                        <div className="education-icon">SD</div>
                        <div className="education-info">
                            <h3>
                                Diploma in Software Development
                                <span className="education-badge">Dean's List</span>
                            </h3>
                            <p>Bow Valley College · Graduated</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

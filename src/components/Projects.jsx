import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        name: 'Tiffany Bleu Beauty Lounge',
        desc: 'Production website for a real beauty salon in Colwood, BC. Built with Next.js 15, Sanity CMS, ISR, and structured Schema.org JSON-LD. Features a headless CMS editorial workflow, dynamic service menu, gallery, FAQ, careers, and a Cloudflare-integrated contact form — all with a mobile-first responsive design, WCAG accessibility, and hardened HTTP security headers.',
        tags: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'React 19', 'ISR', 'Schema.org SEO'],
        live: 'https://www.tiffanybleu.ca',
        github: null,
        image: '/tiffanybleu.png',
        isPrivate: true,
    },
    {
        name: 'DinnerHelp',
        desc: 'AI-powered Progressive Web App for meal planning, recipe suggestions, and pantry management. Features barcode scanning, receipt OCR, voice commands, and real-time multi-device sync.',
        tags: ['React 19', 'TypeScript', 'Firebase', 'Groq AI', 'Zustand', 'PWA'],
        live: 'https://dinnerhelp.vercel.app',
        github: 'https://github.com/SalimFraj/dinnerhelp',
        image: '/dinnerhelp.png',
    },
    {
        name: 'Smart Restaurant',
        desc: 'Full-stack restaurant platform with AI chatbot, secure JWT authentication, role-based access control, interactive dashboards, and multi-language support.',
        tags: ['React', 'Node.js', 'JWT Auth', 'Docker', 'REST API', 'i18n'],
        live: 'https://smart-restaurantvercel.vercel.app',
        github: 'https://github.com/SalimFraj/smart-restaurant',
        image: '/smartrestaurant.png',
    },
    {
        name: 'ERPNext Inventory & Production System',
        desc: 'Production ERP system implemented for a real natural wellness company. Scoped and configured the full Stock and Manufacturing modules on ERPNext v15 \u2014 including item masters, warehouse hierarchies, batch tracking, and manufacturing BOMs. Handled client communication, requirements gathering, and delivered technical documentation and training materials for onboarding.',
        tags: ['ERPNext v15', 'Frappe Cloud', 'SQL', 'Batch Tracking', 'Manufacturing', 'Client Delivery'],
        live: null,
        github: null,
        image: '/ERPNext.png',
        isPrivate: true,
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 },
};

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <motion.h2 className="section-title" {...fadeInUp}>Projects</motion.h2>
                <motion.p className="section-subtitle" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
                    Real-world applications I've designed, built, and deployed
                </motion.p>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            className="project-card glass-card animated-border"
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <div className="project-image">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.name} screenshot`}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.querySelector('.project-image-fallback').style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <div className="project-image-fallback" style={{ display: project.image ? 'none' : 'flex' }}>
                                    <span className="project-image-placeholder">
                                        {project.name === 'DinnerHelp' ? '🍽️' : project.name === 'Smart Restaurant' ? '🤖' : project.name === 'Tiffany Bleu Beauty Lounge' ? '💅' : '🏭'}
                                    </span>
                                </div>
                                {project.isPrivate && !project.live ? (
                                    <div className="project-overlay project-overlay-private">
                                        <span className="project-private-badge">Client Project — Private</span>
                                    </div>
                                ) : project.isPrivate && project.live ? (
                                    <div className="project-overlay">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-overlay-btn">
                                            Live Site ↗
                                        </a>
                                        <span className="project-overlay-btn project-overlay-private-badge">Private Repo</span>
                                    </div>
                                ) : (
                                    <div className="project-overlay">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-overlay-btn">
                                            Live Demo ↗
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-overlay-btn">
                                            GitHub ↗
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="project-info">
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span className="project-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

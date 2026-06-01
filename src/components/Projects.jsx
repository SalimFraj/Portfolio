import { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        name: 'ConsultIQ',
        kicker: 'Featured system',
        desc: 'An AI Builder Workbench for regulated enterprise workflows. It turns messy status reporting into a governed AI workflow system with tool routing, deterministic eval coverage, human review gates, audit traces, and exportable stakeholder packets.',
        impact: 'Shows how I design AI products around control, fallback behavior, and repeatable delivery instead of a generic chatbot surface.',
        tags: ['Next.js 15', 'TypeScript', 'AI SDK', 'AI Workflows', 'Eval Harness', 'Governance'],
        live: 'https://consultiq.vercel.app',
        github: 'https://github.com/SalimFraj/consultiq',
        image: '/consultiq.png',
        featured: true,
        proof: [
            'Routes workflow requests through local tools before model synthesis.',
            'Uses human review gates for client-facing compliance cases.',
            'Includes deterministic eval coverage and fallback behavior for demos.',
        ],
        caseFile: {
            problem: 'Status updates were scattered across notes, risks, and stakeholder expectations.',
            build: 'Built a governed workflow surface with local tool routing, review gates, and exportable briefs.',
            handoff: 'Packaged the system with eval coverage, fallback behavior, and stakeholder-ready proof.',
        },
        trace: ['workflow routed', 'review gate', 'fallback ready', 'packet exported'],
    },
    {
        name: 'Tiffany Bleu Beauty Lounge',
        kicker: 'Client production site',
        desc: 'A live salon website for a real business, built with Next.js and Sanity so staff can update services, pages, gallery content, FAQs, and careers without developer help.',
        impact: 'Shows production client delivery: CMS setup, structured SEO, accessibility work, contact routing, and security headers.',
        tags: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'React 19', 'ISR', 'Schema.org SEO'],
        live: 'https://www.tiffanybleu.ca',
        github: null,
        image: '/tiffanybleu.png',
        isPrivate: true,
        caseFile: {
            problem: 'A real salon needed a site staff could keep current without developer support.',
            build: 'Built a production Next.js and Sanity CMS site for services, gallery, FAQs, careers, and SEO.',
            handoff: 'Delivered editorial control, structured content, contact routing, and private repo handoff.',
        },
    },
    {
        name: 'DinnerHelp',
        kicker: 'AI product app',
        desc: 'An AI-powered PWA for meal planning and pantry management with recipe suggestions, barcode scanning, receipt OCR, voice commands, and multi-device sync.',
        impact: 'Shows product UX, AI assistance, and persistent state working together in a repeat-use consumer app.',
        tags: ['React 19', 'TypeScript', 'Firebase', 'Groq AI', 'Zustand', 'PWA'],
        live: 'https://dinnerhelp.vercel.app',
        github: 'https://github.com/SalimFraj/dinnerhelp',
        image: '/dinnerhelp.png',
        caseFile: {
            problem: 'Meal planning breaks down when pantry state, recipes, and shopping decisions live apart.',
            build: 'Built a PWA with AI recipe suggestions, barcode scanning, OCR, voice input, and sync.',
            handoff: 'Shipped a repeat-use product surface with persistent state and mobile-first workflows.',
        },
    },
    {
        name: 'Smart Restaurant',
        kicker: 'Full-stack app',
        desc: 'A restaurant operations app with JWT authentication, role-based access, REST APIs, dashboards, Dockerized services, multi-language support, and an AI chatbot.',
        impact: 'Shows backend ownership: auth, permissions, API design, deployment packaging, and dashboard workflows.',
        tags: ['React', 'Node.js', 'JWT Auth', 'Docker', 'REST API', 'i18n'],
        live: 'https://smart-restaurantvercel.vercel.app',
        github: 'https://github.com/SalimFraj/smart-restaurant',
        image: '/smartrestaurant.png',
        caseFile: {
            problem: 'Restaurant teams need role-aware operations instead of disconnected admin screens.',
            build: 'Built auth, permissions, APIs, dashboards, Dockerized services, i18n, and an AI assistant.',
            handoff: 'Demonstrated backend ownership across access control, REST design, and deployment packaging.',
        },
    },
    {
        name: 'ERPNext Inventory & Production System',
        kicker: 'ERP implementation',
        desc: 'A production ERPNext v15 implementation for a natural wellness company, covering inventory, manufacturing, item masters, warehouse hierarchy, batch tracking, and BOMs.',
        impact: 'Shows I can map real operations into software and support the rollout with documentation, training, and handoff material.',
        tags: ['ERPNext v15', 'Frappe Cloud', 'SQL', 'Batch Tracking', 'Manufacturing', 'Client Delivery'],
        live: null,
        github: null,
        image: '/ERPNext.png',
        isPrivate: true,
        caseFile: {
            problem: 'Inventory, manufacturing, warehouses, batches, and BOMs needed one operating system.',
            build: 'Configured ERPNext v15 around item masters, warehouse structure, batch tracking, and production.',
            handoff: 'Supported rollout with documentation, training material, and client-ready process mapping.',
        },
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 },
};

const consultStages = [
    {
        label: 'Prompt',
        title: 'Messy update enters the system',
        text: 'Raw notes, blockers, owners, and client expectations land in one workbench instead of scattered docs.',
        meta: 'source packet',
    },
    {
        label: 'Route',
        title: 'Local tools answer first',
        text: 'The workflow routes to deterministic lookup and compliance logic before model synthesis gets involved.',
        meta: 'tool routed',
    },
    {
        label: 'Review',
        title: 'Risky output is gated',
        text: 'Client-facing compliance content is marked for human review, with visible status instead of silent automation.',
        meta: 'review required',
    },
    {
        label: 'Packet',
        title: 'Proof is packaged',
        text: 'The final brief exports with traceable decisions, fallback behavior, and a stakeholder-ready explanation.',
        meta: 'handoff ready',
    },
];

function ProjectDossier({ projects, activeProject, selectedProject, onSelect }) {
    return (
        <motion.div className="project-dossier glass-card animated-border" {...fadeInUp} transition={{ duration: 0.6, delay: 0.16 }}>
            <div className="project-dossier-tabs" aria-label="Project dossier selector">
                {projects.map((project, index) => (
                    <button
                        className={`dossier-tab ${activeProject === index ? 'dossier-tab-active' : ''}`}
                        type="button"
                        key={project.name}
                        onClick={() => onSelect(index)}
                    >
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {project.name}
                    </button>
                ))}
            </div>

            <div className="project-dossier-preview">
                <div className="dossier-screen">
                    <img src={selectedProject.image} alt={`${selectedProject.name} preview`} />
                </div>
                <div className="dossier-copy">
                    <p className="project-kicker">{selectedProject.kicker}</p>
                    <h3>{selectedProject.name}</h3>
                    <p>{selectedProject.impact}</p>
                    <div className="dossier-proof-grid">
                        <div>
                            <span>Problem</span>
                            <strong>{selectedProject.caseFile.problem}</strong>
                        </div>
                        <div>
                            <span>Build</span>
                            <strong>{selectedProject.caseFile.build}</strong>
                        </div>
                        <div>
                            <span>Handoff</span>
                            <strong>{selectedProject.caseFile.handoff}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ConsultTheater() {
    const [activeStage, setActiveStage] = useState(0);
    const stage = consultStages[activeStage];

    return (
        <motion.div className="consult-theater" {...fadeInUp} transition={{ duration: 0.6, delay: 0.22 }}>
            <div className="consult-device">
                <div className="consult-device-bar">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="consult-device-screen">
                    <img src="/consultiq.png" alt="ConsultIQ workflow screen" />
                    <div className="consult-scanline" aria-hidden="true" />
                </div>
            </div>

            <div className="consult-stage-panel glass-card">
                <div className="consult-stage-header">
                    <span>ConsultIQ flow</span>
                    <code>{stage.meta}</code>
                </div>

                <div className="consult-stage-copy">
                    <p>{stage.label}</p>
                    <h3>{stage.title}</h3>
                    <span>{stage.text}</span>
                </div>

                <div className="consult-stage-steps" aria-label="ConsultIQ workflow stages">
                    {consultStages.map((item, index) => (
                        <button
                            className={`consult-stage-step ${activeStage === index ? 'consult-stage-step-active' : ''}`}
                            type="button"
                            key={item.label}
                            onClick={() => setActiveStage(index)}
                            onMouseEnter={() => setActiveStage(index)}
                        >
                            <span>{item.label}</span>
                            <small>{item.meta}</small>
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [activeProject, setActiveProject] = useState(0);
    const selectedProject = projects[activeProject];

    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <motion.h2 className="section-title" {...fadeInUp}>Projects</motion.h2>
                <motion.p className="section-subtitle" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
                    Shipped projects that show full-stack development, AI workflow design, client delivery, and operational systems.
                </motion.p>

                <ProjectDossier
                    projects={projects}
                    activeProject={activeProject}
                    selectedProject={selectedProject}
                    onSelect={setActiveProject}
                />

                <ConsultTheater />

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            className={`project-card glass-card animated-border ${project.featured ? 'project-card-featured' : ''} ${activeProject === i ? 'project-card-active' : ''}`}
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            onMouseEnter={() => setActiveProject(i)}
                            onFocus={() => setActiveProject(i)}
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
                                        {project.name.split(' ').map((word) => word[0]).join('').slice(0, 3)}
                                    </span>
                                </div>
                                {project.isPrivate && !project.live ? (
                                    <div className="project-overlay project-overlay-private">
                                        <span className="project-private-badge">Handoff case file</span>
                                    </div>
                                ) : project.isPrivate && project.live ? (
                                    <div className="project-overlay">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-overlay-btn">
                                            Live Site ↗
                                        </a>
                                        <span className="project-overlay-btn project-overlay-private-badge">Case File</span>
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
                                <div className="project-kicker">{project.kicker}</div>
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <p className="project-impact">{project.impact}</p>
                                {project.trace ? (
                                    <div className="eval-trace" aria-label={`${project.name} delivery trace`}>
                                        {project.trace.map((step, traceIndex) => (
                                            <span key={step} style={{ '--trace-delay': `${traceIndex * 0.18}s` }}>
                                                {step}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}
                                {project.proof ? (
                                    <div className="project-proof">
                                        <span>Why it matters</span>
                                        <ul>
                                            {project.proof.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                                <div className="case-file" aria-label={`${project.name} case file`}>
                                    <div className="case-file-header">
                                        <span>Case file</span>
                                        <code>{project.isPrivate ? 'handoff' : 'live'}</code>
                                    </div>
                                    <div className="case-file-grid">
                                        <div>
                                            <strong>Problem</strong>
                                            <p>{project.caseFile.problem}</p>
                                        </div>
                                        <div>
                                            <strong>Build</strong>
                                            <p>{project.caseFile.build}</p>
                                        </div>
                                        <div>
                                            <strong>Handoff</strong>
                                            <p>{project.caseFile.handoff}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-actions" aria-label={`${project.name} links`}>
                                    {project.live ? (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                                            {project.isPrivate ? 'Live Site' : 'Live Demo'}
                                        </a>
                                    ) : (
                                        <span>Client Handoff</span>
                                    )}
                                    {project.github ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    ) : (
                                        <span>{project.isPrivate ? 'Case File' : 'No Repo'}</span>
                                    )}
                                </div>
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

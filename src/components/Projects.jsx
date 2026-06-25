import { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectImages = {
    consultiq: {
        src: '/consultiq.png',
        srcSet: '/project-images/consultiq-480.webp 480w, /project-images/consultiq-720.webp 720w, /project-images/consultiq-1080.webp 1080w, /project-images/consultiq-1425.webp 1425w',
        width: 1425,
        height: 4507,
    },
    tiffanybleu: {
        src: '/tiffanybleu.png',
        srcSet: '/project-images/tiffanybleu-360.webp 360w, /project-images/tiffanybleu-640.webp 640w, /project-images/tiffanybleu-760.webp 760w',
        width: 760,
        height: 760,
    },
    dinnerhelp: {
        src: '/dinnerhelp.png',
        srcSet: '/project-images/dinnerhelp-480.webp 480w, /project-images/dinnerhelp-800.webp 800w, /project-images/dinnerhelp-1200.webp 1200w, /project-images/dinnerhelp-1600.webp 1600w',
        width: 1916,
        height: 940,
    },
    smartrestaurant: {
        src: '/smartrestaurant.png',
        srcSet: '/project-images/smartrestaurant-480.webp 480w, /project-images/smartrestaurant-800.webp 800w, /project-images/smartrestaurant-1200.webp 1200w, /project-images/smartrestaurant-1600.webp 1600w',
        width: 1916,
        height: 944,
    },
    erpnext: {
        src: '/ERPNext.png',
        srcSet: '/project-images/erpnext-259.webp 259w',
        width: 259,
        height: 194,
    },
};

const imageSizes = {
    dossier: '(max-width: 768px) calc(100vw - 2rem), (max-width: 1180px) 54vw, 640px',
    featured: '(max-width: 768px) calc(100vw - 2rem), (max-width: 1180px) 52vw, 680px',
    card: '(max-width: 768px) calc(100vw - 2rem), (max-width: 1180px) 50vw, 560px',
};

const projects = [
    {
        name: 'ConsultIQ',
        kicker: 'Featured system',
        desc: 'An AI Builder Workbench for regulated enterprise workflows. It turns messy status reporting into a governed AI workflow system with tool routing, deterministic eval coverage, human review gates, audit traces, and exportable stakeholder packets.',
        impact: 'Shows how I design AI products around control, fallback behavior, and repeatable delivery instead of a generic chatbot surface.',
        tags: ['Next.js 15', 'TypeScript', 'AI SDK', 'AI Workflows', 'Eval Harness', 'Governance'],
        live: 'https://consultiq.vercel.app',
        github: 'https://github.com/SalimFraj/consultiq',
        image: projectImages.consultiq,
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
        image: projectImages.tiffanybleu,
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
        image: projectImages.dinnerhelp,
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
        image: projectImages.smartrestaurant,
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
        image: projectImages.erpnext,
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

function ProjectImage({ project, variant = 'card', alt }) {
    const image = project.image;
    if (!image) return null;

    const sizes = imageSizes[variant] || imageSizes.card;

    return (
        <picture>
            <source srcSet={image.srcSet} sizes={sizes} type="image/webp" />
            <img
                src={image.src}
                width={image.width}
                height={image.height}
                sizes={sizes}
                loading="lazy"
                decoding="async"
                alt={alt}
                onError={(event) => {
                    const imageFrame = event.currentTarget.closest('.project-image, .dossier-screen');
                    event.currentTarget.style.display = 'none';
                    imageFrame?.querySelector('.project-image-fallback')?.style.setProperty('display', 'flex');
                }}
            />
        </picture>
    );
}

function ProjectActions({ project, compact = false }) {
    return (
        <div className={`project-actions ${compact ? 'project-actions-compact' : ''}`} aria-label={`${project.name} links`}>
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
    );
}

function ProjectDossier({ projects, activeProject, selectedProject, onSelect }) {
    const panelId = `project-panel-${activeProject}`;

    const handleTabKeyDown = (event, index) => {
        if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;

        event.preventDefault();

        const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
        let nextIndex = index;

        if (event.key === 'Home') {
            nextIndex = 0;
        } else if (event.key === 'End') {
            nextIndex = projects.length - 1;
        } else {
            nextIndex = (index + direction + projects.length) % projects.length;
        }

        onSelect(nextIndex);
        event.currentTarget.parentElement?.querySelectorAll('[role="tab"]')[nextIndex]?.focus();
    };

    return (
        <motion.div className="project-dossier glass-card animated-border" {...fadeInUp} transition={{ duration: 0.6, delay: 0.16 }}>
            <div className="project-dossier-tabs" aria-label="Project dossier selector" role="tablist">
                {projects.map((project, index) => (
                    <button
                        className={`dossier-tab ${activeProject === index ? 'dossier-tab-active' : ''}`}
                        type="button"
                        key={project.name}
                        id={`project-tab-${index}`}
                        role="tab"
                        aria-selected={activeProject === index}
                        aria-controls={activeProject === index ? panelId : `project-panel-${index}`}
                        tabIndex={activeProject === index ? 0 : -1}
                        onClick={() => onSelect(index)}
                        onKeyDown={(event) => handleTabKeyDown(event, index)}
                    >
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {project.name}
                    </button>
                ))}
            </div>

            <div
                className="project-dossier-preview"
                id={panelId}
                role="tabpanel"
                aria-labelledby={`project-tab-${activeProject}`}
            >
                <div className="dossier-screen">
                    <ProjectImage project={selectedProject} variant="dossier" alt={`${selectedProject.name} preview`} />
                    <div className="project-image-fallback" style={{ display: 'none' }}>
                        <span className="project-image-placeholder">{selectedProject.name.split(' ').map((word) => word[0]).join('').slice(0, 3)}</span>
                    </div>
                </div>
                <div className="dossier-copy">
                    <p className="project-kicker">{selectedProject.kicker}</p>
                    <h3>{selectedProject.name}</h3>
                    <p>{selectedProject.impact}</p>
                    <ProjectActions project={selectedProject} compact />
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

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            className={`project-card glass-card animated-border ${project.featured ? 'project-card-featured' : ''} ${activeProject === i ? 'project-card-active' : ''}`}
                            key={project.name}
                            >
                            <div className="project-image">
                                {project.image ? (
                                    <ProjectImage
                                        project={project}
                                        variant={project.featured ? 'featured' : 'card'}
                                        alt={`${project.name} screenshot`}
                                    />
                                ) : null}
                                <div className="project-image-fallback" style={{ display: project.image ? 'none' : 'flex' }}>
                                    <span className="project-image-placeholder">
                                        {project.name.split(' ').map((word) => word[0]).join('').slice(0, 3)}
                                    </span>
                                </div>
                                {project.isPrivate && !project.live ? (
                                    <div className="project-overlay project-overlay-private" aria-hidden="true">
                                        <span className="project-private-badge">Handoff case file</span>
                                    </div>
                                ) : project.isPrivate && project.live ? (
                                    <div className="project-overlay" aria-hidden="true">
                                        <span className="project-overlay-btn">Live site below</span>
                                        <span className="project-overlay-btn project-overlay-private-badge">Case file</span>
                                    </div>
                                ) : (
                                    <div className="project-overlay" aria-hidden="true">
                                        <span className="project-overlay-btn">Links below</span>
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
                                <details className="case-file" aria-label={`${project.name} case file`}>
                                    <summary className="case-file-header">
                                        <span>Case file</span>
                                        <code>{project.isPrivate ? 'handoff' : 'live'}</code>
                                    </summary>
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
                                </details>
                                <ProjectActions project={project} />
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

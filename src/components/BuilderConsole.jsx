import { useState } from 'react';
import { motion } from 'framer-motion';
import './BuilderConsole.css';

const capabilityCards = [
    {
        title: 'Signal',
        metric: '01',
        text: 'Find the real problem: manual handoffs, unclear decisions, repeated updates, or missing ownership.',
        panelTitle: 'Discovery notes',
        panelText: 'Map the repeated pain, the decision owner, and the proof a reviewer will care about.',
        className: 'console-card-wide',
    },
    {
        title: 'Plan',
        metric: '02',
        text: 'Choose the product shape before building: interface, data flow, automations, risks, and handoff.',
        panelTitle: 'System shape',
        panelText: 'Choose the smallest useful product surface, then define data flow, risk points, and review gates.',
    },
    {
        title: 'Ship',
        metric: '03',
        text: 'Build the working version with real screens, real data paths, and deployment constraints.',
        panelTitle: 'Working interface',
        panelText: 'Move from concept to deployable software with real constraints, visible states, and useful defaults.',
    },
    {
        title: 'Prove',
        metric: '04',
        text: 'Add evals, fallback states, documentation, and stakeholder-ready explanations.',
        panelTitle: 'Handoff packet',
        panelText: 'Package the build with evals, fallback behavior, docs, and a plain-language explanation.',
        className: 'console-card-tall',
    },
];

const stackTiles = [
    { label: 'React', color: '#72d7ff' },
    { label: 'Next', color: '#f5f4ec' },
    { label: 'Node', color: '#4be0b4' },
    { label: 'SQL', color: '#ffc857' },
    { label: 'Sanity', color: '#ff8bb5' },
    { label: 'ERP', color: '#c9f25b' },
    { label: 'Groq', color: '#b99cff' },
    { label: 'Docker', color: '#8fd3ff' },
];

const deliveryLog = [
    ['Input', 'Business workflow, constraints, audience, proof needed'],
    ['Build', 'Product surface, data flow, review gates, failure modes'],
    ['Output', 'Shipped app, docs, handoff, clear next step'],
    ['Result', 'A project that explains the work quickly'],
];

const suiteCards = [
    { label: 'AI Builder Workbench', text: 'AI workflow with governance' },
    { label: 'Client CMS Site', text: 'production website with editorial control' },
    { label: 'ERP Operations', text: 'inventory and manufacturing handoff' },
];

const fadeInUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55 },
};

export default function BuilderConsole() {
    const [activeStep, setActiveStep] = useState(0);
    const activeCard = capabilityCards[activeStep];

    return (
        <section className="builder-console" id="system">
            <div className="section-container">
                <motion.div className="console-heading" {...fadeInUp}>
                    <p className="console-kicker">How I build</p>
                    <h2 className="section-title">I turn messy workflows into shipped software.</h2>
                    <p className="section-subtitle">
                        I start with the workflow, build the smallest useful system, and make the result easy to test, explain, and hand off.
                    </p>
                </motion.div>

                <div className="console-layout">
                    <motion.div className="console-bento" {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }}>
                        <div className="console-beam-track" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                        </div>
                        {capabilityCards.map((card, index) => (
                            <article
                                className={`console-card glass-card ${card.className || ''} ${activeStep === index ? 'console-card-active' : ''}`}
                                key={card.title}
                                style={{ '--step-index': index }}
                                onMouseEnter={() => setActiveStep(index)}
                                onFocus={() => setActiveStep(index)}
                                tabIndex={0}
                            >
                                <span className="console-card-metric">{card.metric}</span>
                                <span className="console-card-connector" aria-hidden="true" />
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </article>
                        ))}
                    </motion.div>

                    <motion.aside className="console-side glass-card animated-border" {...fadeInUp} transition={{ duration: 0.55, delay: 0.2 }}>
                        <div className="console-side-header">
                            <span>Build path</span>
                            <div className="console-status">
                                <span />
                                {activeCard.title.toLowerCase()}
                            </div>
                        </div>

                        <motion.div
                            className="active-step-panel"
                            key={activeCard.title}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <code>{activeCard.metric}</code>
                            <div>
                                <strong>{activeCard.panelTitle}</strong>
                                <p>{activeCard.panelText}</p>
                            </div>
                        </motion.div>

                        <div className="suite-cards">
                            {suiteCards.map((card) => (
                                <div className="suite-card" key={card.label}>
                                    <div>
                                        <span>{card.label}</span>
                                        <p>{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="console-log">
                            {deliveryLog.map(([step, text]) => (
                                <div className="console-log-row" key={step}>
                                    <code>{step}</code>
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="stack-grid" aria-label="Technology stack">
                            {stackTiles.map((tile) => (
                                <div className="stack-tile" key={tile.label} style={{ '--tile-color': tile.color }}>
                                    <strong>{tile.label}</strong>
                                </div>
                            ))}
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}

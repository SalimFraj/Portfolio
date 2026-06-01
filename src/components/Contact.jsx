import { motion } from 'framer-motion';
import './Contact.css';

const contactLinks = [
    {
        label: 'salimfraj123@gmail.com',
        href: 'mailto:salimfraj123@gmail.com',
        icon: '@',
    },
    {
        label: 'github.com/SalimFraj',
        href: 'https://github.com/SalimFraj',
        icon: 'GH',
    },
    {
        label: 'linkedin.com/in/salim-fraj-a540932a7',
        href: 'https://ca.linkedin.com/in/salim-fraj-a540932a7',
        icon: 'LI',
    },
    {
        label: 'Download resume',
        href: '/Salim-Fraj-Resume.pdf',
        icon: 'CV',
        download: true,
    },
];

const finalSignals = [
    'Full-stack developer',
    'AI workflow tools',
    'Client-ready delivery',
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 },
};

export default function Contact() {
    return (
        <>
            <section className="contact" id="contact">
                <div className="section-container">
                    <div className="contact-content">
                        <motion.p className="section-kicker" {...fadeInUp}>Open to roles</motion.p>
                        <motion.h2 className="section-title" {...fadeInUp}>Looking for a team where shipped work matters.</motion.h2>
                        <motion.p className="section-subtitle" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
                            I am looking for junior full-stack developer, software developer, AI workflow, or data automation roles.
                        </motion.p>

                        <motion.div className="final-signal-row" {...fadeInUp} transition={{ duration: 0.6, delay: 0.15 }}>
                            {finalSignals.map((signal) => (
                                <span key={signal}>{signal}</span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="contact-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="contact-links">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="contact-link"
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        download={link.download || undefined}
                                    >
                                        <span className="contact-link-icon">{link.icon}</span>
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <div className="contact-cta">
                                <p className="contact-or">Best next step</p>
                                <a href="mailto:salimfraj123@gmail.com" className="btn btn-primary">
                                    Email Salim
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>
                    Built and maintained by Salim Fraj · {new Date().getFullYear()}
                </p>
            </footer>
        </>
    );
}

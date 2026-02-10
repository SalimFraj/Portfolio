import { motion } from 'framer-motion';
import './Contact.css';

const contactLinks = [
    {
        label: 'salimfraj123@gmail.com',
        href: 'mailto:salimfraj123@gmail.com',
        icon: '✉️',
    },
    {
        label: 'github.com/SalimFraj',
        href: 'https://github.com/SalimFraj',
        icon: '💻',
    },
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
                        <motion.h2 className="section-title" {...fadeInUp}>Get In Touch</motion.h2>
                        <motion.p className="section-subtitle" {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
                            I'm actively seeking internship opportunities. Let's connect!
                        </motion.p>

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
                                    >
                                        <span className="contact-link-icon">{link.icon}</span>
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <div className="contact-cta">
                                <p className="contact-or">or send me an email directly</p>
                                <a href="mailto:salimfraj123@gmail.com" className="btn btn-primary">
                                    Say Hello 👋
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>
                    Built with <span className="footer-heart">♥</span> by Salim Fraj · {new Date().getFullYear()}
                </p>
            </footer>
        </>
    );
}

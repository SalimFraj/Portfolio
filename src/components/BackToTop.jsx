import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BackToTop.css';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const updateVisibility = () => {
            ticking = false;
            const threshold = window.innerWidth <= 640 ? 4200 : 1200;
            const nextVisible = window.scrollY > threshold;
            setVisible((current) => (current === nextVisible ? current : nextVisible));
        };

        const scheduleUpdate = () => {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(updateVisibility);
            }
        };

        updateVisibility();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        return () => {
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    className="back-to-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Back to top"
                >
                    ↑
                </motion.button>
            )}
        </AnimatePresence>
    );
}

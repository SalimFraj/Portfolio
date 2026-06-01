import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BackToTop.css';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerWidth <= 640 ? 4200 : 1200;
            setVisible(window.scrollY > threshold);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
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

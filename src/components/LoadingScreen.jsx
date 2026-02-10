import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 1800;
        const steps = 60;
        const increment = 100 / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= 100) {
                setProgress(100);
                clearInterval(timer);
                setTimeout(onComplete, 300);
            } else {
                setProgress(Math.min(current, 100));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="loading-screen"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="loading-logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    SF
                </motion.div>
                <div className="loading-bar-track">
                    <motion.div
                        className="loading-bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

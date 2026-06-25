import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
    const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isCompactViewport = window.matchMedia('(max-width: 768px)').matches;

        if (prefersReducedMotion || isCompactViewport) return undefined;

        const loadSpline = () => setShouldLoadSpline(true);
        const idleCallback = window.requestIdleCallback?.(loadSpline, { timeout: 1600 });
        const timeoutId = window.requestIdleCallback ? null : window.setTimeout(loadSpline, 900);

        return () => {
            if (idleCallback) window.cancelIdleCallback?.(idleCallback);
            if (timeoutId) window.clearTimeout(timeoutId);
        };
    }, []);

    const handleHeroPointerMove = useCallback((event) => {
        if (!event.isTrusted) return;

        const canvas = event.currentTarget.querySelector('.hero-spline-stage canvas');
        if (!canvas || event.target === canvas) return;

        const pointerMove = new PointerEvent('pointermove', {
            bubbles: true,
            pointerId: event.pointerId,
            pointerType: event.pointerType || 'mouse',
            clientX: event.clientX,
            clientY: event.clientY,
            screenX: event.screenX,
            screenY: event.screenY,
        });

        const mouseMove = new MouseEvent('mousemove', {
            bubbles: true,
            clientX: event.clientX,
            clientY: event.clientY,
            screenX: event.screenX,
            screenY: event.screenY,
        });

        canvas.dispatchEvent(pointerMove);
        canvas.dispatchEvent(mouseMove);
    }, []);

    return (
        <section className="hero" id="hero" onPointerMove={handleHeroPointerMove}>
            <div className="hero-background" aria-hidden="true">
                <div className="hero-grid-lines" />
                <div className="hero-animated-band hero-animated-band-one" />
                <div className="hero-animated-band hero-animated-band-two" />
            </div>

            <div className="hero-spline-stage" aria-hidden="true">
                {shouldLoadSpline ? (
                    <Suspense fallback={<div className="spline-fallback" />}>
                        <Spline
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="spline-scene"
                        />
                    </Suspense>
                ) : (
                    <div className="spline-fallback" />
                )}
            </div>

            <div className="hero-content">
                <motion.div
                    className="hero-copy"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                >
                    <div className="hero-eyebrow">Salim Fraj / Full-stack software developer</div>
                    <h1 className="hero-name">
                        <span>I turn messy</span>
                        <span>workflows into</span>
                        <span>shipped software.</span>
                    </h1>
                    <p className="hero-tagline">
                        AI workbenches, client CMS sites, ERP workflows, and full-stack apps
                        built with proof, handoff, and fallback paths.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            See shipped work
                        </a>
                        <a href="/Salim-Fraj-Resume.pdf" className="btn btn-secondary" download>
                            Download resume
                        </a>
                        <a href="https://ca.linkedin.com/in/salim-fraj-a540932a7" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

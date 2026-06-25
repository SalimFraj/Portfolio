import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Spline = lazy(() => import('@splinetool/react-spline'));
const SPLINE_DESKTOP_QUERY = '(min-width: 1024px) and (hover: hover) and (pointer: fine)';
const SLOW_CONNECTION_TYPES = new Set(['slow-2g', '2g']);
const SPLINE_START_DELAY = 1200;

export default function Hero() {
    const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

    useEffect(() => {
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const desktopQuery = window.matchMedia(SPLINE_DESKTOP_QUERY);
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        let idleCallback;
        let timeoutId;
        let delayId;

        const canLoadSpline = () => (
            desktopQuery.matches
            && !reducedMotionQuery.matches
            && !connection?.saveData
            && !SLOW_CONNECTION_TYPES.has(connection?.effectiveType)
        );

        const clearPendingLoad = () => {
            if (idleCallback) window.cancelIdleCallback?.(idleCallback);
            if (timeoutId) window.clearTimeout(timeoutId);
            if (delayId) window.clearTimeout(delayId);
            idleCallback = undefined;
            timeoutId = undefined;
            delayId = undefined;
        };

        const scheduleSplineLoad = () => {
            clearPendingLoad();
            if (!canLoadSpline()) return;

            const loadSpline = () => {
                if (canLoadSpline()) setShouldLoadSpline(true);
            };

            delayId = window.setTimeout(() => {
                idleCallback = window.requestIdleCallback?.(loadSpline, { timeout: 2200 });
                if (!idleCallback) timeoutId = window.setTimeout(loadSpline, 800);
            }, SPLINE_START_DELAY);
        };

        scheduleSplineLoad();
        desktopQuery.addEventListener('change', scheduleSplineLoad);
        reducedMotionQuery.addEventListener('change', scheduleSplineLoad);

        return () => {
            clearPendingLoad();
            desktopQuery.removeEventListener('change', scheduleSplineLoad);
            reducedMotionQuery.removeEventListener('change', scheduleSplineLoad);
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
        <section className="hero" id="hero" onPointerMove={shouldLoadSpline ? handleHeroPointerMove : undefined}>
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

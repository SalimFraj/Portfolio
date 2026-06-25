import { createElement, Suspense, lazy, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofMarquee from './components/ProofMarquee'
import BackToTop from './components/BackToTop'

const BuilderConsole = lazy(() => import('./components/BuilderConsole'))
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Contact = lazy(() => import('./components/Contact'))
const CommandPalette = lazy(() => import('./components/CommandPalette'))

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
}

const deferredSections = [
    { anchorId: 'system', Component: BuilderConsole, minHeight: '900px' },
    { anchorId: 'projects', Component: Projects, minHeight: '1700px' },
    { anchorId: 'about', Component: About, minHeight: '900px' },
    { anchorId: 'experience', Component: Experience, minHeight: '820px' },
    { anchorId: 'contact', Component: Contact, minHeight: '720px' },
]

function LazySection({ anchorId, Component: SectionComponent, minHeight }) {
    const sectionRef = useRef(null)
    const [shouldRender, setShouldRender] = useState(() => (
        typeof window !== 'undefined' && window.location.hash === '#' + anchorId
    ))

    useEffect(() => {
        const element = sectionRef.current
        let observer

        const loadSection = () => setShouldRender(true)
        const loadIfHashTarget = () => {
            if (window.location.hash === '#' + anchorId) loadSection()
        }

        loadIfHashTarget()
        window.addEventListener('hashchange', loadIfHashTarget)

        if (!shouldRender) {
            if ('IntersectionObserver' in window && element) {
                observer = new IntersectionObserver((entries) => {
                    if (entries.some((entry) => entry.isIntersecting)) {
                        loadSection()
                        observer.disconnect()
                    }
                }, { rootMargin: '360px 0px' })

                observer.observe(element)
            } else {
                loadSection()
            }
        }

        return () => {
            observer?.disconnect()
            window.removeEventListener('hashchange', loadIfHashTarget)
        }
    }, [anchorId, shouldRender])

    return (
        <div
            ref={sectionRef}
            id={shouldRender ? undefined : anchorId}
            className="lazy-section-shell"
            data-loaded={shouldRender}
            style={{ '--lazy-section-height': minHeight }}
        >
            {shouldRender ? (
                <Suspense fallback={<div className="lazy-section-placeholder" aria-hidden="true" />}>
                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {createElement(SectionComponent)}
                    </motion.div>
                </Suspense>
            ) : (
                <div className="lazy-section-placeholder" aria-hidden="true" />
            )}
        </div>
    )
}

function App() {
    return (
        <>
            <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Navbar />
                <Hero />
                <ProofMarquee />
                {deferredSections.map((section) => (
                    <LazySection key={section.anchorId} {...section} />
                ))}
                <Suspense fallback={null}>
                    <CommandPalette />
                </Suspense>
                <BackToTop />
            </motion.div>
            <Analytics />
        </>
    )
}

export default App

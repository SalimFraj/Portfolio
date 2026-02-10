import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
}

function App() {
    const [loading, setLoading] = useState(true)

    const handleLoadingComplete = useCallback(() => {
        setLoading(false)
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Navbar />
                    <Hero />
                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <About />
                    </motion.div>
                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Projects />
                    </motion.div>
                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Experience />
                    </motion.div>
                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Contact />
                    </motion.div>
                    <BackToTop />
                </motion.div>
            )}
        </>
    )
}

export default App

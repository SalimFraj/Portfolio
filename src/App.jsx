import { motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofMarquee from './components/ProofMarquee'
import BuilderConsole from './components/BuilderConsole'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import CommandPalette from './components/CommandPalette'

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
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
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <BuilderConsole />
                </motion.div>
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Projects />
                </motion.div>
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <About />
                </motion.div>
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Experience />
                </motion.div>
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Contact />
                </motion.div>
                <CommandPalette />
                <BackToTop />
            </motion.div>
            <Analytics />
        </>
    )
}

export default App

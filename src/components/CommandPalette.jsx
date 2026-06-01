import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CommandPalette.css';

const commands = [
    { label: 'Approach', meta: 'How I build', type: 'jump', href: '#system', group: 'Sections' },
    { label: 'Projects', meta: 'Shipped work', type: 'jump', href: '#projects', group: 'Sections' },
    { label: 'About', meta: 'Background', type: 'jump', href: '#about', group: 'Sections' },
    { label: 'Experience', meta: 'Timeline', type: 'jump', href: '#experience', group: 'Sections' },
    { label: 'Contact', meta: 'Email and links', type: 'jump', href: '#contact', group: 'Sections' },
    { label: 'Open ConsultIQ', meta: 'Governed AI workflow demo', type: 'open', href: 'https://consultiq.vercel.app', group: 'Proof' },
    { label: 'Open Tiffany Bleu', meta: 'Production client CMS', type: 'open', href: 'https://www.tiffanybleu.ca', group: 'Proof' },
    { label: 'Open DinnerHelp', meta: 'AI product app', type: 'open', href: 'https://dinnerhelp.vercel.app', group: 'Proof' },
    { label: 'Download resume', meta: 'PDF', type: 'open', href: '/Salim-Fraj-Resume.pdf', group: 'Contact' },
    { label: 'Email Salim', meta: 'salimfraj123@gmail.com', type: 'open', href: 'mailto:salimfraj123@gmail.com', group: 'Contact' },
];

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const searchRef = useRef(null);

    const filteredCommands = useMemo(() => {
        const normalized = query.trim().toLowerCase();

        if (!normalized) {
            return commands;
        }

        return commands.filter((command) => (
            `${command.label} ${command.meta} ${command.group}`.toLowerCase().includes(normalized)
        ));
    }, [query]);

    const openPalette = () => {
        setQuery('');
        setOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const commandKey = event.ctrlKey || event.metaKey;

            if ((commandKey && event.key.toLowerCase() === 'k') || (!commandKey && event.key === '/')) {
                const tagName = document.activeElement?.tagName?.toLowerCase();
                const isTyping = tagName === 'input' || tagName === 'textarea' || document.activeElement?.isContentEditable;

                if (!isTyping) {
                    event.preventDefault();
                    openPalette();
                }
            }

            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (open) {
            window.setTimeout(() => searchRef.current?.focus(), 60);
        }
    }, [open]);

    const runCommand = (command) => {
        setOpen(false);

        if (command.type === 'jump') {
            document.querySelector(command.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', command.href);
            return;
        }

        window.open(command.href, command.href.startsWith('http') ? '_blank' : '_self', 'noopener,noreferrer');
    };

    return (
        <>
            <button className="command-trigger" type="button" onClick={openPalette} aria-label="Open command palette">
                <span>Ctrl K</span>
            </button>

            <AnimatePresence>
                {open ? (
                    <motion.div
                        className="command-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button className="command-scrim" type="button" aria-label="Close command palette" onClick={() => setOpen(false)} />
                        <motion.div
                            className="command-panel"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Command palette"
                            initial={{ opacity: 0, y: 18, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 18, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                        >
                            <div className="command-input-wrap">
                                <span aria-hidden="true">/</span>
                                <input
                                    ref={searchRef}
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Jump to work, proof, contact..."
                                    aria-label="Search commands"
                                />
                                <kbd>Esc</kbd>
                            </div>

                            <div className="command-list" role="listbox">
                                {filteredCommands.length ? (
                                    filteredCommands.map((command) => (
                                        <button
                                            className="command-item"
                                            type="button"
                                            key={`${command.group}-${command.label}`}
                                            onClick={() => runCommand(command)}
                                        >
                                            <span className="command-item-main">
                                                <strong>{command.label}</strong>
                                                <small>{command.meta}</small>
                                            </span>
                                            <span className="command-item-group">{command.group}</span>
                                        </button>
                                    ))
                                ) : (
                                    <div className="command-empty">No matching command.</div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}

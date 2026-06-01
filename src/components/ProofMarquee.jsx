import './ProofMarquee.css';

const proofSignals = [
    'Eval harness',
    'Review gates',
    'Live client CMS',
    'ERP handoff',
    'Fallback states',
    'Stakeholder packets',
    'SEO schema',
    'Production deploys',
    'Tool routing',
    'Audit traces',
];

export default function ProofMarquee() {
    const marqueeItems = [...proofSignals, ...proofSignals];

    return (
        <section className="proof-marquee" aria-label="Portfolio proof signals">
            <div className="proof-marquee-shell">
                <div className="proof-marquee-label">Built around proof</div>
                <div className="proof-marquee-window" aria-hidden="true">
                    <div className="proof-marquee-track">
                        {marqueeItems.map((signal, index) => (
                            <span className="proof-chip" key={`${signal}-${index}`}>
                                {signal}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

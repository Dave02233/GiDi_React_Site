import './Details.css'; 
import { useEffect, useRef } from 'react';

const DETAIL_VISIBILITY_THRESHOLD = 0.2;

export const Details = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const sections = container.querySelectorAll('.detail-section');
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const isVisibleEnough = entry.intersectionRatio >= DETAIL_VISIBILITY_THRESHOLD;
                    entry.target.classList.toggle('detail-visible', isVisibleEnough);
                });
            },
            {
                threshold: DETAIL_VISIBILITY_THRESHOLD,
                rootMargin: '0px 0px 0px 0px',
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="details-container" ref={containerRef}>
            <div className="detail-section" id="automazione">
                <h2>Programmazione, Sviluppo e Revamping</h2>
                <p>La nostra divisione software progetta <span className="detail-keyword">PLC</span>, <span className="detail-keyword">HMI</span> e motion control per nuove linee e interventi di <span className="detail-keyword">revamping</span>.
                    Collaboriamo con marchi come <span className="detail-brand">Siemens</span>, <span className="detail-brand">Omron</span>, <span className="detail-brand">Mitsubishi</span>, <span className="detail-brand">Delta</span>, <span className="detail-brand">Exor</span>, <span className="detail-brand">Hakko</span> e <span className="detail-brand">Proface</span> per garantire architetture affidabili e scalabili.
                </p>
            </div>
            <div className="detail-section" id="informatica">
                <h2>Soluzioni Informatiche su Misura</h2>
                <p>Sviluppiamo integrazioni tra sistemi OT e IT, creando piattaforme pensate per <span className="detail-keyword">Industria 4.0</span> e <span className="detail-keyword">Industria 5.0</span>.
                    Progettiamo soluzioni di <span className="detail-keyword">raccolta dati</span>, dashboard analitiche e workflow di <span className="detail-keyword">analisi predittiva</span> per trasformare i dati grezzi in decisioni operative.
                </p>
            </div>
            <div className="detail-section" id="robotica">
                <h2>Robot e Cobot</h2>
                <p>Il reparto robotica realizza celle su misura con <span className="detail-keyword">robot</span> e <span className="detail-keyword">cobot</span> integrati con visione artificiale e sistemi di sicurezza.
                    Offriamo studi di layout, messa in servizio e supporto continuativo per mantenere automazioni affidabili, scalabili e semplici da gestire.
                </p>
            </div>
        </div>
    )
}


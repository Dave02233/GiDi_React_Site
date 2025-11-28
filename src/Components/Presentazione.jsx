import './Presentazione.css';
import { useEffect, useRef } from 'react';

export const Presentazione = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
                        video.play().catch(() => {
                            // Se play viene interrotto, va in errore
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.9 }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="presentazione-container" id="presentazione">
            <div className="presentazione-card">
                <h2>Soluzioni al tuo servizio</h2>
                <video ref={videoRef} src="/Presentazione.mp4" muted controls></video>
            </div>
        </div>
    )
}
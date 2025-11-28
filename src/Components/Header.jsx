import './Header.css';

import { useState, useEffect } from 'react';

export const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function toggleMenu() {
        if (isMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsClosing(false);
            }, 300);
        } else {
            setIsMenuOpen(true);
        }
    }

    return (
        <>
            <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
                <div />
                <div className={`header-title ${isScrolled ? 'scrolled' : ''}`}>
                    <h1>GI.DI. Automazione</h1>
                </div>
                <div className='menu-button'>
                    {!isMenuOpen ? (
                        <img src="/sandwichButton.svg" alt="Menu" onClick={toggleMenu} />
                    ) : (
                        <img src="/closeButton.svg" alt="Close" onClick={toggleMenu} />
                    )}
                </div>
                
            </header>
            {isMenuOpen && (
                <nav className={`dropdown-menu ${isClosing ? 'closing' : ''} ${isScrolled ? 'scrolled' : ''}`}>
                    <ul>
                        <li><a href="#servizi">Servizi</a></li>
                        <li><a href="#assistenza">Assistenza</a></li>
                        <li><a href="#presentazione">Presentazione</a></li>
                        <li><a href="#contatti">Contatti</a></li>
                    </ul>
                </nav>
            )}
        </>
    )
}
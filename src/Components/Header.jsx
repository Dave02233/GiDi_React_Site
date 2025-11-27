import './Header.css';

import { useState } from 'react';

export const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

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
            <header className='header-container'>
                <div />
                <div className="header-title">
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
                <nav className={`dropdown-menu ${isClosing ? 'closing' : ''}`}>
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
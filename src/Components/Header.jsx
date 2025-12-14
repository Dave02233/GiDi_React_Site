import './Header.css';

import { useState, useEffect } from 'react';

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    if (!isMenuOpen) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

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
      closeMenu();
    } else {
      setIsMenuOpen(true);
    }
  }

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <>
      <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`header-title ${isScrolled ? 'scrolled' : ''}`}>
          <h1>XX. Automazione</h1>
        </div>
        <div className='menu-button'>
          {!isMenuOpen ? (
            <img src={`${import.meta.env.BASE_URL}/sandwichButton.svg`} alt="Menu" onClick={toggleMenu} />
          ) : (
            <img src={`${import.meta.env.BASE_URL}/closeButton.svg`} alt="Close" onClick={toggleMenu} />
          )}
        </div>

      </header>
      {isMenuOpen && (
        <nav className={`dropdown-menu ${isClosing ? 'closing' : ''} ${isScrolled ? 'scrolled' : ''}`}>
          <ul>
            <li><a href="#servizi" onClick={(event) => handleNavClick(event, '#servizi')}>Servizi</a></li>
            <li><a href="#assistenza" onClick={(event) => handleNavClick(event, '#assistenza')}>Assistenza</a></li>
            <li><a href="#presentazione" onClick={(event) => handleNavClick(event, '#presentazione')}>Presentazione</a></li>
          </ul>
        </nav>
      )}
    </>
  )
}

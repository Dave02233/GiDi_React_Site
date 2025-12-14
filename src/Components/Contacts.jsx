import './Contacts.css';

export const Contacts = () => {
  return (
    <footer id="contatti" className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h3>
            Chi siamo
            <span className="footer__underline" aria-hidden="true"></span>
          </h3>
          <p>
            Operiamo nell'automazione industriale con un team specializzato in software per PLC,
            piattaforme di supervisione e sistemi di controllo per impianti produttivi complessi.
          </p>
        </div>

        <div className="footer__col">
          <h3>
            Sede
            <span className="footer__underline" aria-hidden="true"></span>
          </h3>
          <address>
            <p>Via Volta 94</p>
            <p>20832 Desio (MB)</p>
            <p>Italia</p>
            <a href="mailto:info@gidiautomazione.it">info@gidiautomazione.it</a>
            <a href="tel:+390362624113">+39 0362 624113</a>
          </address>
        </div>

        <div className="footer__col">
          <h3>
            Link
            <span className="footer__underline" aria-hidden="true"></span>
          </h3>
          <ul className="footer__links">
            <li>
              <a href="#servizi">Servizi</a>
            </li>
            <li>
              <a href="#assistenza">Assistenza</a>
            </li>
            <li>
              <a href="#presentazione">Presentazione</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer__copyright">GI.DI. Automazione S.r.l. © {new Date().getFullYear()}</p>
    </footer>
  );
};

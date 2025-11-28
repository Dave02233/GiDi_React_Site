import './TicketForm.css';

const departmentOptions = [
  { value: '', label: 'Seleziona il reparto' },
  { value: 'automazione', label: 'Automazione' },
  { value: 'informatica', label: 'Informatica' },
  { value: 'robotica', label: 'Robotica' },
  { value: 'amministrazione', label: 'Amministrazione' }
];

const formFields = [
  {
    id: 'userEmail',
    label: 'Email aziendale',
    type: 'email',
    name: 'userEmail',
    autoComplete: 'email',
    pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$',
    title: 'Inserisci un indirizzo email aziendale valido.',
    maxLength: 120
  },
  {
    id: 'telefono',
    label: 'Telefono',
    type: 'tel',
    name: 'telefono',
    autoComplete: 'tel',
    pattern: '^\\+?[0-9]{8,15}$',
    inputMode: 'tel',
    title: 'Inserisci solo cifre (8-15) e opzionalmente il prefisso +.',
    maxLength: 16
  },
  {
    id: 'azienda',
    label: 'Nome azienda',
    type: 'text',
    name: 'azienda',
    autoComplete: 'organization',
    pattern: '^.{2,60}$',
    title: 'Inserisci un nome aziendale compreso tra 2 e 60 caratteri.',
    maxLength: 60
  },
  {
    id: 'oggetto',
    label: 'Oggetto',
    type: 'text',
    name: 'oggetto',
    autoComplete: 'off',
    pattern: '^.{5,120}$',
    title: 'Inserisci un oggetto di almeno 5 caratteri (max 120).',
    maxLength: 120
  }
];

export const TicketForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aggiungere funzione mailer di Daniele
  };

  return (
    <section id="assistenza" className="ticket-form" aria-labelledby="ticket-form-title">
      <div className="ticket-form__wrapper">
        <div className="ticket-form__intro">
          <p className="ticket-form__eyebrow">Supporto dedicato</p>
          <h2 id="ticket-form-title">Apri un ticket tecnico</h2>
          <p className="ticket-form__subtitle">
            Inviaci un messaggio relativo a macchine, impianti o software industriali: descrivi il contesto operativo e ti proporremo l'intervento ideale in Automazione, Informatica o Robotica.
            Garantiamo un contatto diretto con uno specialista entro il primo giorno lavorativo utile.
          </p>
          <div className="ticket-form__chips" aria-hidden="true">
            <span>PLC</span>
            <span>Inverter</span>
            <span>SCADA</span>
            <span>Informatica</span>
            <span>Industria 4.0</span>
            <span>Industria 5.0</span>
            <span>Robotica collaborativa</span>
          </div>
        </div>

        <form id="contactForm" className="ticket-form__card" onSubmit={handleSubmit}>
          <div className="ticket-form__grid">
            {formFields.map(({ label, id, ...inputProps }) => (
              <div key={id} className="ticket-form__field">
                <label htmlFor={id}>{label}</label>
                <input
                  id={id}
                  required
                  placeholder={`Inserisci ${label.toLowerCase()}`}
                  {...inputProps}
                />
              </div>
            ))}

            <div className="ticket-form__field ticket-form__field--full">
              <label htmlFor="reparto">Reparto di riferimento</label>
              <div className="select-wrapper">
                <select id="reparto" name="reparto" defaultValue="" required>
                  {departmentOptions.map((department) => (
                    <option
                      key={department.label}
                      value={department.value}
                      disabled={department.value === ''}
                    >
                      {department.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="ticket-form__field ticket-form__field--full">
              <label htmlFor="messaggio">Messaggio</label>
              <textarea
                id="messaggio"
                name="messaggio"
                rows="5"
                placeholder="Descrivi la tua esigenza tecnica"
                maxLength={600}
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" id="submitTicket" className="ticket-form__button">
            Invia richiesta
          </button>
        </form>
      </div>
    </section>
  );
};
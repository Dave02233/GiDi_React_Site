import emailjs from '@emailjs/browser';

const SERVICE_ID = 'servaamc';
const TEMPLATE_ID = 'tempbtbk';
const PUBLIC_KEY = 'VGroSxLU';
const DEFAULT_RECIPIENT = 'daniele.zucco@.it';

let isInitialized = false;

const ensureInit = () => {
  if (!isInitialized) {
    emailjs.init(PUBLIC_KEY);
    isInitialized = true;
  }
};

export const sendTicketMail = async ({
  userEmail,
  telefono,
  azienda,
  reparto,
  oggetto,
  messaggio,
}) => {
  ensureInit();

  const templateParams = {
    user_email: userEmail,
    telefono,
    azienda,
    reparto,
    subject: oggetto,
    message: messaggio,
    to_email: DEFAULT_RECIPIENT,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
};

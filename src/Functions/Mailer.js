    // Configura EmailJS
    emailjs.init('VGroSQxILhuGqSxLU'); 

    const templateParams = {
      user_email: userEmail,
      telefono: telefono,
      azienda : azienda,
      reparto: reparto,
      to_email: 'daniele.zucco@gidiautomazione.it', 
      subject: oggetto,
      message: messaggio
    };

    emailjs.send('service_2a6aamc', 'template_xlpbtbk', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email inviata con successo!');
        document.getElementById('userEmail').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('azienda').value = '';
        document.getElementById('reparto').value = '';
        document.getElementById('oggetto').value = '';
        document.getElementById('messaggio').value = '';
      }, function(error) {
        console.log('FAILED...', error);
        alert('Errore nell\'invio dell\'email.');
      });
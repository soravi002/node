// Importation de la bibliothèque nodemailer pour envoyer des emails
const nodemailer = require('nodemailer');

// Configuration du transporteur avec les informations de connexion au service de messagerie
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisation du service Gmail pour l'envoi d'email
  auth: {
    user: '221yabsbusiness@gmail.com', // Adresse email de l'expéditeur
    pass: 'cthr rnnz wypv cbwa' // Mot de passe pour l'authentification SMTP
  }
});

// Options du mail qui sera envoyé
const mailOptions = {
  from: '221yabsbusiness@gmail.com', // Adresse de l'expéditeur
  to: 'gomisezekielpaulantoine@gmail.com', // Adresse du destinataire
  subject: 'Test Email', // Sujet de l'email
  text: 'This is a test email from Node.js' // Contenu du message en texte brut
};

// Envoi de l'email avec les options définies ci-dessus
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error); // Affichage de l'erreur en cas d'échec de l'envoi
  } else {
    console.log('Email sent: ' + info.response); // Confirmation de l'envoi de l'email
  }
});

// Génère un mot de passe aléatoire
function generateRandomPassword() {
  // Utilise generate-password pour créer un nouveau mot de passe
  var generatePassword = require('generate-password');
  const password = generatePassword.generate({
    length: 10, // Longueur du mot de passe
    numbers: true // Inclut des chiffres dans le mot de passe
  });
  // Affiche le mot de passe généré dans la console
  console.log('Generated Password:', password);
}

// Appelle la fonction pour générer un mot de passe dès le démarrage
generateRandomPassword();

// Element HTML pour le bouton de génération de mot de passe

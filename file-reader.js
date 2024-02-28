// Importation du module de système de fichiers
const fs = require('fs');

// Lecture du contenu du fichier 'welcome.txt' en utilisant l'encodage 'utf8'
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  // Gestion de l'erreur éventuelle lors de la lecture du fichier
  if (err) throw err;
  // Affichage du contenu du fichier dans la console
  console.log('File content:', data);
});
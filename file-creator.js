const fs = require('fs');

// Création d'un fichier avec fs.writeFile
// 'welcome.txt' est le nom du fichier
// 'Hello Node' est le contenu du fichier
// La fonction de rappel gère les erreurs et affiche un message de succès
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err; // Lance une exception en cas d'erreur
  console.log('Le fichier a été créé avec succès'); // Affiche un message de succès dans la console
});

const http = require('http'); // Inclut le module HTTP de Node.js

// Crée un serveur HTTP. La fonction passée en paramètre est appelée à chaque requête reçue.
const server = http.createServer((req, res) => {
  // Configure l'en-tête de la réponse HTTP avec un statut 200 et un contenu de type HTML
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Termine la réponse et envoie un message HTML
  res.end('<h1>Bonjour Node!!!!</h1>\n'); 
});

// Le serveur écoute sur le port 3000
server.listen(3000, () => {
  console.log('Serveur en fonction sur http://localhost:3000/'); // Affiche un message lorsque le serveur démarre
});

// Servidor básico

const http = require('http');

function responderPeticion(request, response) {
	response.end('Servidor funcionando');
}

let server = http.createServer(responderPeticion);

server.listen(3000);
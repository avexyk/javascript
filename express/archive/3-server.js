const express = require('express');

const app = express();

app.get('/saludo', function(request, response) {
	// Identificando lo que nos envia
	response.send(`Hey ${request.query.name}`);
});

app.listen(3000);
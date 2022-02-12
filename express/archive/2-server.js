const express = require('express');

const app = express();

app.get('', function(request, response) {
	response.send('Express funcionando');
});

app.listen(3000);
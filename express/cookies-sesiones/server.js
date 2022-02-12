const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
	name: 'session',
	keys: ['hs8899q9w88wsuu', 'hshhs737739b90']
}));


app.get('', function(request, response) {
	request.session.visits = request.session.visits || 0;

	request.session.visits = request.session.visits + 1;
	response.send(`${request.session.visits} visita(s)`);
});

app.listen(3000);
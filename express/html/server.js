const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/assets',express.static('assets',{
	etag: false,
	maxAge: '5h'
}));

app.get('/', function(request, response){
	response.render('index');
});

app.listen(3000);

If-None-Match:  W/"4a-17184b97786"
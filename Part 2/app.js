const express = require('express');
const hoganExpress = require('hogan-express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'html');
app.engine('html', hoganExpress);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/form', function(req, res) {
  res.render('form');
});

app.post('/form', function(req, res) {
  res.send("Hello " + req.body.name + ".");
});

app.listen(3000, function () {
	console.log('App listening.')
});

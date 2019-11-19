var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false});


app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/contact', function(req, res) {
	res.render('contact', {qs: req.query});	
});

app.post('/contact', urlencodedParser, function(req, res) {
	console.log(req.body);
	res.render('contact-success', {data: req.body});	
});

app.get('/profile/:name', function(req, res){
	res.render('profile', {person: req.params.name, data: data});
});

//Server
app.listen(3000, function() {
	console.log('My server is running on port 3000');
});
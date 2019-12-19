const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const connection = require('./conf');


const app = express();
app.use(require('cors')())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/Admin.js'));
});

app.post('/auth', function(request, response) {
    console.log(request.body)
	const username = request.body.username;
	const password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				response.send(username);
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
		});
	} else {
		response.send('Please enter Username and Password!');
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(5000);
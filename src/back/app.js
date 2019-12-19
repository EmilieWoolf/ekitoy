const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const connection = require('./conf');
const port = 5000 ;

app.use(express.json());

app.use(express.static('public'));

const app = express();
app.use(require('cors')())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (request, response) {
	response.sendFile(path.join(__dirname + '/Admin.js'));
});

app.post('/auth', function (request, response) {
	console.log(request.body)
	const email = request.body.email;
	const password = request.body.password;
	if (email && password) {
		connection.query('SELECT * FROM users WHERE mail = ? AND password = ?', [email, password], function (error, results, fields) {
			if (error) {
				console.log(error)
				response.sendStatus(500)
			} else {

				if (results.length > 0) {
					response.send({ email });
				} else {
					response.send('Incorrect Username and/or Password!');
				}
			}
		});
	} else {
		response.send('Please enter Username and Password!');
	}
});

app.get('/home', function (request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
app.get("/api/toy", (request, response) => { 
  console.log('je passe par toy')
    connection.query("SELECT * FROM toy", (err, rows) => {
      if(err) {
        console.log(err)
        response.status(500).end()
      }
      else response.send(rows);
    });
  });

app.listen({port});
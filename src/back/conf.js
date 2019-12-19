const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  '020188', // le mot de passe
database :  'ekitoy', // le nom de la base de données

});
module.exports = connection;

 
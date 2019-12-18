const connection = require('./conf');
const express = require ('express');
const app = express();
const port = 3000 ;


app.use(express.json());

app.post("/", (request, response) => {
  response.json(request.body);
});

app.get("/api/users", (request, response) => { 
  connection.query("SELECT * FROM users", (err, rows) => {
    response.send(rows);
  });
});
app.get("/api/toy", (request, response) => { 
    connection.query("SELECT * FROM toy", (err, rows) => {
      response.send(rows);
    });
  });

app.listen(port, () => console.log(`server is runing on port ${port}`))
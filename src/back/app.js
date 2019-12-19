const connection = require('./conf');
const express = require ('express');
const app = express();
const port = 5000 ;

app.use(require("cors")())
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
  console.log('je passe par toy')
    connection.query("SELECT * FROM toy", (err, rows) => {
      if(err) {
        console.log(err)
        response.status(500).end()
      }
      else response.send(rows);
    });
  });

app.listen(port, () => console.log(`server is runing on port ${port}`))
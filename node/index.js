const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

app.get("/", (req, res) => {
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('Adriano da Silva'),('Ana Maria'),('Hyago Costa'),('Maria Lúcia')`;
  connection.query(sql);

  connection.query(`SELECT * from people`, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(`<h1>Full Cycle Rocks!</h1>
                <ul>
                  <li>${results[0].name}</li>
                  <li>${results[1].name}</li>
                  <li>${results[2].name}</li>
                  <li>${results[3].name}</li>
                </ul>`);
  });

  connection.end();
});

app.listen(port, () => {
  console.log('Running on port: ' + port);
});

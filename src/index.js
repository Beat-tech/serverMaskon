//const http = require("./app");
// const host = "localhost" || process.env.HOST;
// const port = process.env.PORT || 5000;
// http.listen(port, host, () => {
//   console.log("Servidor en ip: " + host + " puerto:" + port);
// });

const express = require("express");
const app = express();
const cors = require("cors");
const host = "localhost" || process.env.HOST;
const port = process.env.PORT || 5000;

var corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));
//ficheros estaticos
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.redirect("index.html");
});
app.get("/visualizar", (req, res) => {
  res.redirect("visualizar.html");
});

app.listen(port, () => {
  console.log("Servidor en ip: " + host + " puerto:" + port);
});

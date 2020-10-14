//const http = require("./app");
// const host = "localhost" || process.env.HOST;
// const port = process.env.PORT || 5000;
// http.listen(port, host, () => {
//   console.log("Servidor en ip: " + host + " puerto:" + port);
// });

const express = require("express");
const app = express();
const host = "localhost" || process.env.HOST;
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Servidor en ip: " + host + " puerto:" + port);
});

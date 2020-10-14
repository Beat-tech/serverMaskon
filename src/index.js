//const http = require("./app");
// const host = "localhost" || process.env.HOST;
// const port = process.env.PORT || 5000;
// http.listen(port, host, () => {
//   console.log("Servidor en ip: " + host + " puerto:" + port);
// });

const express = require("express");
const app = express();
const cors = require("cors");
const socketIO = require('socket.io'),
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


io.on("connection", (socket) => {
  console.log("new connection", socket);
  socket.send("Bienvenida Guapi");
  socket.on("stream", (image) => {
    socket.emit("stream", image); //emitir el evento a todos los sockets conectados
  });

  socket.on("disconnect", (data) => {
    console.log("Alguien se ha pirado");
  });
  socket.on("message", (data) => {
    console.log(data);
  });
});

io.on("evento_video", (dato) => {
  console.log("datos recibidos" + dato);
});

io.serveClient();



var server = app.listen(port, () => {
  console.log("Servidor en ip: " + host + " puerto:" + port);
});

io = socketIO(server);

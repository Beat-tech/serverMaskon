const express = require("express");
const app = express();
const http = require("http").createServer(app); //creamos un servidor http a partir de la libreria express
const io = require("socket.io")(http, { path: "/socket.io" }); //para poder llamarlo desde nuestros html que vamos a crear luego

//routes

app.use(require("./routes/streamingvideo.routes"));

//ficheros estaticos
app.use(express.static(__dirname + "/public"));

//streaming de video

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
module.exports = http;

http.listen(5000);
//http://www.jlmonteagudo.com/2012/10/emitir-video-con-tu-dispositivo-movil-con-node-js-express-js-y-socket-io/
//https://www.youtube.com/watch?v=0wqteZNqruc

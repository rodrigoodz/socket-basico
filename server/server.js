const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const path = require("path");

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//esta es la comunicacion del backend
//hago module.exports y lo importa en socket.js (no tengo io alla)
module.exports.io = socketIO(server);
//para que server.js use el archivo socket.js
require("./sockets/socket");

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});

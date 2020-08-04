const { io } = require("../server");
//saber cuando alguien se conecta al server
io.on("connection", (client) => {
  console.log("Usuario conectado");

  //   client.emit("enviarMensaje", {
  //     usuario: "Admin",
  //     mensaje: "Bienvenido a esta aplicacion",
  //   });

  //escuchamos cuando cliente se desconecta
  client.on("disconnect", () => {
    console.log("usuario desconectado");
  });

  //escuchar al cliente
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);

    client.broadcast.emit("enviarMensaje", {
      usuario: data.usuario,
      mensaje: data.mensaje,
    });

    // //con este callback, puedo enviar info de nuevo hacia el cliente... (va a 'llegar' al tercer parametro del emit)
    // if (message.usuario) {
    //   callback({
    //     resp: "TODO SALIO BIEN",
    //   });
    // } else {
    //   callback({
    //     resp: "TODO SALIO MAL!",
    //   });
    // }
  });
});

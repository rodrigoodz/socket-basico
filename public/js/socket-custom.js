//funcions que queremos que se disparen cuando enviamos o recibimos info del servidor
var socket = io(); //<- var para aumentar la compatibilidad entre navegadores

//on -> para escuchar sucesos
socket.on("connect", function () {
  console.log("conectado al servidor");
});

//cuando se desconecta arroja un mensaje
socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

//   //emit -> para enviar informacion
//   socket.emit("enviarMensaje", {
//     usuario: "Rodrigo",
//     mensaje: "Hola Mundo",
//   });

// //emit -> envio informacion y obtengo una retroalimencation del servidor
socket.emit(
  "enviarMensaje",
  {
    usuario: "Rodrigo",
    mensaje: "Hola Mundo",
  },
  function (resp) {
    //en esta funcion tendre la retroalimentacion del servidor
    console.log("RESPUESTA SERVER: ", resp);
  }
);

//escuchar informacion
socket.on("enviarMensaje", function (message) {
  console.log("servidor: ", message);
  // const titulo = document.getElementsByTagName("h1")[0];
  // titulo.innerText = message.mensaje;
});

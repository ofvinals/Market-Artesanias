const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// Rutas
const createUserRouter = require("./routes/users.js"); // el Router del recurso "Users" 
const UserModel = require("./models/postgresql/users.js"); // la implementacion (o "Modelo", del patron M.V.C.) que almacena Usuarios en la base de datos
                                                           //
                                                           // pense en seguir importando debajo de esta linea las demas rutas y modelos para las entidades
                                                           // que fuiste creando en el DER que faltan (como UsuarioCompras, Producto, Tienda, Categoria)
                                                           // Habria que tambien seguir creando un archivo para cada uno dentro de su 
                                                           // directorio correspondiente (como el ejemplo de "users.js")

const server = express();

server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));

server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      next();
});

// Inyeccion de dependencias ( implementacion del modelo )
server.use( "/users", createUserRouter({ userModel: UserModel }) );

server.use((err, req, res, next) => {
      const status = err.status || 500;
      const message = err.message || err;
      console.error(err);
      res.status(status).send(message);
});

module.exports = server;

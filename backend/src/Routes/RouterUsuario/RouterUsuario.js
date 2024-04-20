const { Router } = require("express");
const { getAllUsuario, patchEditUsuario, getUsuarioById, eliminarUsuario } = require("../../Handlers/HandlerUsuario/HanlderUsuario.js");
const jwt = require( "jsonwebtoken" );
const validateToken = require("../ValidateToken/ValidateToken");
const validateAdminAndUserById = require("../ValidateAdminAndUser/ValidateAdminAndUser.js");

const routerUsuario = Router();

routerUsuario.get("/", validateToken, getAllUsuario);
routerUsuario.get("/:Id", validateToken, validateAdminAndUserById, getUsuarioById );
routerUsuario.patch("/:Id", validateToken, /*validateActive, */ patchEditUsuario);
routerUsuario.delete("/:Id", validateToken, eliminarUsuario);

// function validateActive( req, res, next )
// {}

module.exports = routerUsuario;

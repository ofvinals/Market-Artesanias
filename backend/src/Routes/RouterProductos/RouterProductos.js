const { Router } = require("express");
const { 
        getAllProducto, 
        getByIdProducto, 
        postAddProducto, 
        putUpdateProducto 
    } = require("../../Handlers/HandlerProductos/HandlerProductos");

const routerProducto = Router();

routerProducto.get("/", getAllProducto);
routerProducto.get("/:id", getByIdProducto);
routerProducto.post("/", postAddProducto);
routerProducto.put("/", putUpdateProducto);

module.exports = routerProducto;
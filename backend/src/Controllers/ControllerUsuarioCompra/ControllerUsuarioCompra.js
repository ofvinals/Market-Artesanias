// const CompraUsuario = require("../../Models/CompraUsuario");
const { getByIdProducto } = require("../../Handlers/HandlerProductos/HandlerProductos.js");
const { ComprasUsuario, User, Product, Category } = require("../../db");
const { 
        getById, 
        putUpdate, 
    } = require("../ControllerProductos/ControllerProducto.js");

//GET trae todo las compras de la DB.
const get = async () => {
    const compras = await ComprasUsuario.findAll({
        include:[
            {
            model: User,
            attributes: ["Nombre", "Apellido"]
            },
            {
                model: Category,
                attributes: ["Id", "Nombre"]
            } 
        ]
    });
	return compras;
};

//POST Carga la Compras en la DB.
const postAdd = async ( Titulo, UserId, ProductId, FechaCompra, Cantidad, PrecioTotal ) => {
      if ( !Titulo || !UserId || !ProductId || !FechaCompra || !Cantidad || !PrecioTotal ) {
            throw new Error("All fields are required");
      }
      //console.log("-----<", Nombre, Disponible,Precio,Imagen,Descripcion, StoreId, CategoryId)

      const compra = await ComprasUsuario.create({
            Titulo, 
            FechaCompra,
            Cantidad,
            PrecioTotal,
      });


      await compra.setUser(UserId);
      await compra.setProduct(ProductId);

      let editProduct = await getById(ProductId);

      // console.log( editProduct.dataValues );

      if( editProduct.dataValues.Cantidad - Cantidad < 0 ) throw new Error( "Stock de producto no suficiente" );

      let error = await putUpdate(
            editProduct.dataValues.Id,
            editProduct.dataValues.Nombre,
            editProduct.dataValues.Disponible,
            editProduct.dataValues.Precio,
            editProduct.dataValues.Cantidad - Cantidad,
            editProduct.dataValues.Imagen,
            editProduct.dataValues.Descripcion,
            editProduct.dataValues.CategoryId,
            editProduct.dataValues.Genero,
      )

      return compra;
};

module.exports = {
    get,
    postAdd,
}

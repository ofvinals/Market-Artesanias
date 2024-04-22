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
      include: 
            [{
                  model: Category,
                  attributes: ["Id", "Nombre"]
            },{
                  model: User,
                  attributes: ["Id", "Nombre", "Apelido"]
            },{
                  model: Store,
                  attributes: ["Id", "Nombre"]
            }]
    });
	return compras;
};

//POST Carga la Compras en la DB.
const postAdd = async ( Titulo, UserId, ProductId, StoreId, CategoryId, FechaCompra, Cantidad, PrecioTotal ) =>
{
      if ( !Titulo || !UserId || !ProductId || !StoreId || !CategoryId || !FechaCompra || !Cantidad || !PrecioTotal ) {
            throw new Error("All fields are required");
      }

      const compra = await ComprasUsuario.create({
            Titulo, 
            FechaCompra,
            Cantidad,
            PrecioTotal,
      });

      await compra.setUser(UserId);
      await compra.setProduct(ProductId);
      await compra.setStore(StoreId);
      await compra.setCategory(CategoryId);

      let editProduct = await getById(ProductId);

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

const filterTransactionsByUserId = async (Id) => {
      console.log( "CONTROLLER" );
      console.log( Id );
      const compras = await ComprasUsuario.findAll({
            where: {
                  UserId: Id,
            }
      });
      return compras;
};

module.exports = {
    get,
    postAdd,
    filterTransactionsByUserId,
}

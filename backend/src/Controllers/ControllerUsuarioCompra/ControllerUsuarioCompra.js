// const CompraUsuario = require("../../Models/CompraUsuario");
const { ComprasUsuario, User, Product } = require("../../db");

//GET trae todo las compras de la DB.
const get = async () => {
    const compras = await ComprasUsuario.findAll({
        include: [
            {
                model: User,
            },
            {
                model: Product,
                attributes: ["Id", "Nombre", "Imagen", "Disponible", "Precio", "Descripcion", "Genero" ]
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
      return compra;
};

module.exports = {
    get,
    postAdd,
}

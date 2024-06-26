// const Product = require("../../Models/Product");
const { Store, User, Product } = require("../../db");

//GET trae solo la tiena del vendedor en la DB.
const get = async (UserId) => {
      console.log("userid", UserId)
            const tienda = await Store.findAll({
                  where: { UserId }
            });
      return tienda;
};
const getStoreById = async ( Id ) =>
{
      const store = await Store.findOne(
            {     
                  where:{
                        Id: Id
                  },
                  include: Product 
            }
      );
      return store;
}

//POST Carga la tienda en la DB.
const postAdd = async (UserId, Nombre, Imagen) => {
      if (!Nombre ) {
            throw new Error("Todos los campos son obligatorios");
      }
      const tiendaUsuario = await Store.findOne({
            where: {UserId}});
            
            if (tiendaUsuario) {
                  throw new Error("Ya tiene una Tienda");
            }
      console.log("entra")
            const tienda = await Store.create({Nombre, Imagen, UserId});
      await User.update({Vendedor: true},{where: {Id: UserId}});

      return tienda;
};

//PUT actualiza la tieda en la DB.
const update = async (Id, Nombre, Imagen) => {
      // console.log("updatecontroler", Id, Nombre, Imagen)
      const tienda = await Store.findByPk(Id);
      if (!tienda) throw new Error("El Tienda no existe.");
      // console.log(tienda)
      // console.log(Nombre, Imagen)

      await Store.update({ Nombre, Imagen }, {where: {Id}});

      return "Listo!!";
};

//PUT actualiza la tieda en la DB.
const deleteStoreById = async (Id) => {
      const tienda = await Store.findByPk(Id);
      if (!tienda) throw new Error("El Tienda no existe.");

      if( tienda.dataValues.Activo ){ // Pregunto si el usuario esta activo -> suspenderlo de serlo, junto con sus tiendas
            await Store.update({ Activo: false }, {where: {Id}});
            return "Suspendida!!";
      }

      await Store.update({ Activo: true }, {where: {Id}});
      return "Re-Activada!!";
};

module.exports = {
      get,
      postAdd,
      update,
      deleteStoreById,
      getStoreById
}

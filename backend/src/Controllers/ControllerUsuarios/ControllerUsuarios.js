const { User } = require("../../db");
const { get, deleteStoreById } = require("../ControllerTienda/ControllerTienda");

//GET todas las usuario.
const getAll = async () => {
      const usuario = await User.findAll();
      return usuario;
};

//GET solo un usuario.
const controllerByEmailUser = async (Email) => {
      const user = await User.findOne({
            where: {Email}
      });
      return user;
};

const editUsuario = async () => {}

const getById = async (Id) => {
      const usuario = await User.findByPk(Id);
      return usuario;
};


const updateById = async ( fields ) => {
console.log("fields", fields)
      // Existe el usuario con Id
      const usuario = await User.findByPk(fields.Id);
      // console.log( fields );
      console.log( usuario );

      if (!usuario) throw new Error("El Usuario no existe.");

      const newUsuario= await usuario.update({
            Nombre: fields.Nombre,
            Apellido: fields.Apellido,
            Genero: fields.Genero,
            FechaNacimiento: fields.FechaNacimiento,
            Ubicacion: fields.Ubicacion
      });
console.log(newUsuario)
      return "Usuario Actualizado!!";
}

//PUT actualiza la tieda en la DB.
const deleteUserById = async (Id) => {
      const usuario = await User.findByPk(Id);

      if (!usuario) throw new Error("El Tienda no existe.");

      if( usuario.dataValues.Activo ){ // Pregunto si el usuario esta activo -> suspenderlo de serlo, junto con sus tiendas
            await User.update({ Activo: false }, {where: {Id}});
            const tiendasUsuario = await get( Id );
            tiendasUsuario.forEach(element => {
                  deleteStoreById( element.dataValues.Id );
            });

            return "Usuario Suspendido!!";
      } // Si el usuario no esta Activo, es decir, esta suspendido... Re activarlo junto con todas sus tiendas ↓
        //                                                                                                     ↓
        //                                                                                                     ↓
      await User.update({ Activo: true }, {where: {Id}});
      const tiendasUsuario = await get( Id ); // Obtengo tiendas por Id de usuario ( get(); devuelve tiendas del usuario );
      tiendasUsuario.forEach(element => {
            deleteStoreById( element.dataValues.Id );
      });

      return "Usuario Re-Activado!!";
};


module.exports = {
      getAll,
      controllerByEmailUser,
      editUsuario,
      getById,
      updateById,
      deleteUserById,
}

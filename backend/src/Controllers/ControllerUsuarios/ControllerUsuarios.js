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

const getById = async (Id, isAdmin) => {
      const usuario = await User.findByPk(Id);
      let returnedUser;
      
      if (usuario === null) throw new Error("El Usuario no existe.");

      // #1 Primer caso + Traerme los datos publicos (no privados)
      if( isAdmin === false){  // <----------- Si no es admin y el usuario de la req. no es el mismo que el solicitado:
            returnedUser = { 
                  Id: usuario.Id,
                  Nombre: usuario.Nombre,
                  Apellido: usuario.Apellido,
                  Vendedor: usuario.Vendedor
            };
            // Solo retornar aquí en caso de que no haya necesidad de enviar datos más detallados
            return returnedUser;
      }

            // #2 Segundo caso = Traerme los datos privados del usuario requisado
            returnedUser = { 
                  Id: usuario.Id,
                  Nombre: usuario.Nombre,
                  Apellido: usuario.Apellido,
                  Email: usuario.Email,
                  Ubicacion: usuario?.Ubicacion,
                  Genero: usuario?.Genero,
                  FechaNacimiento: usuario?.FechaNacimiento,
                  Activo: usuario.Activo,
                  Admin: usuario.Admin,
                  Vendedor: usuario?.Vendedor
            };
      return returnedUser;
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

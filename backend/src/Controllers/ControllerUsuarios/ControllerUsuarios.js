const { User } = require("../../db");

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


module.exports = {
      getAll,
      controllerByEmailUser,
      editUsuario,
      getById,
      updateById,
}

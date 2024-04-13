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

module.exports = {
      getAll,
      controllerByEmailUser,
      editUsuario
}

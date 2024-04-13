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
      const usuario = await User.findByPk(1);
      return usuario;
};


module.exports = {
      getAll,
      controllerByEmailUser,
      editUsuario,
      getById
}

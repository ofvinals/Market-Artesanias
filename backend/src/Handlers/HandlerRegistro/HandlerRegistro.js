const { postAdd } = require("../../Controllers/ControllerRegistro/ControllerRegistro.js");


//POST Carga la Usuario en la DB.
const postAddUsuario = async (req, res) => {
      const { Nombre, Apellido, Email, Contraseña } = req.body;
      try {
            const response = await postAdd(Nombre, Apellido, Email, Contraseña);
            return res.status(200).json(response);
      } catch (error) {
            return res.status(500).json({error: error.mensage});
      }
};

module.exports = {
      postAddUsuario,
}

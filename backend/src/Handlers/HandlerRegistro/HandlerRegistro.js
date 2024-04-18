const { postAdd } = require("../../Controllers/ControllerRegistro/ControllerRegistro.js");
const generaJsonWebToken = require('../../Jwt/GenerateJwt');


//POST Carga la Usuario en la DB.
const postAddUsuario = async (req, res) => {
      const { Nombre, Apellido, Email, Contraseña, Admin } = req.body;
      try {
            const response = await postAdd(Nombre, Apellido, Email, Contraseña, Admin);
            const token = await generaJsonWebToken(
			response.Id,
			response.Email,
			response.Admin
		);
		console.log(token);
		return res
			.status(200)
			.json({
				accesoWJT: token,
				admin: response.Admin,
				vendedor: response.Vendedor,
			});
      } catch (error) {
            return res.status(500).json({error: error.mensage});
      }
};

module.exports = {
      postAddUsuario,
}

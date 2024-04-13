const { getAll, getById } = require("../../Controllers/ControllerUsuarios/ControllerUsuarios");

//GET todas las Usuario.
const getAllUsuario = async (req, res) => {
      // console.log( "REQ.USER = DECODE" );
      // console.log( req.user );
      const isAdmin = req.user.Admin; // Es administrador?
                                      // console.log( "ALMIN??? = " );
                                      // console.log( isAdmin );

      if( !isAdmin ) return res.sendStatus(403); // En caso de no ser admin, retorno codigo de error: "Acceso Prohibido"

      try {
            const response = await getAll();
            return  res.status(200).json(response);
      } catch (error) {
            return  res.status(500).json({error: error.mensage});
      }
};


const putEditUsuario = async (req, res) => {};

const getUsuarioById = async (req, res) => {
      const { Id } = req.params;
      const isAdmin = req.user.Admin; // Es administrador?


      console.log( isAdmin );
      console.log( Id );

      try {
            const foundUser = await getById(Id);
            // console.log( foundUser );
            let returnedUser;
            console.log( foundUser );
            if( foundUser === null ) return res.sendStatus(404);
            if( !isAdmin ){                                             // si no es admin
                  returnedUser = { 
                        Id: foundUser.Id,
                        Nombre: foundUser.Nombre,
                        Apellido: foundUser.Apellido,
                        Vendedor: foundUser.Vendedor
                  };
                  console.log( foundUser );
                  console.log( returnedUser );
                  return res.status(200).json(returnedUser); //  <--- Retorno detalle de usuario sin informacion sensible
            } 
            // Si es admin...
            returnedUser = { 
                  Id: foundUser.Id,
                  Nombre: foundUser.Nombre,
                  Apellido: foundUser.Apellido,
                  Email: foundUser.Email,
                  Activo: foundUser.Activo,
                  Admin: foundUser.Admin,
                  Ubicacion: foundUser.Ubicacion,
                  Genero: foundUser.Genero,
                  Vendedor: foundUser.Vendedor
            };
            console.log( foundUser );
            console.log( returnedUser );
            // Retorno detalle del usuario con informacion sensible
            return res.status(200).json(returnedUser);
      } catch (error) {
            return res.status(500).json({error: error.mensage});
      }
};

module.exports = {
      getAllUsuario,
      putEditUsuario,
      getUsuarioById
}

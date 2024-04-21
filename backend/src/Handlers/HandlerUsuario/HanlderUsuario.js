const { getAll, getById, updateById, deleteUserById } = require("../../Controllers/ControllerUsuarios/ControllerUsuarios");

//GET todas las Usuario.
const getAllUsuario = async (req, res) => {
      // console.log( "REQ.USER = DECODE" );
      // console.log( req.user );
      // const isAdmin = req.user.Admin; // Es administrador?
      //                                 // console.log( "ALMIN??? = " );
      //                                 // console.log( isAdmin );

      // if( !isAdmin ) return res.sendStatus(403); // En caso de no ser admin, retorno codigo de error: "Acceso Prohibido"

      try {
            const response = await getAll();
            return  res.status(200).json(response);
      } catch (error) {
            return  res.status(500).json({error: error.mensage});
      }
};


const patchEditUsuario = async (req, res) => {
      // const isAdmin = req.user.Admin; // Es administrador?
      // const idReq = req.user.userId; // ID Del usuario de la request
      // const { Id } = req.params;
      // let id = Number( Id );
      console.log('reqbody' ,req);
      const { Id, Nombre, Apellido, Genero, FechaNacimiento, Ubicacion } = req.body;
      // console.log( "JWT DATA: : : : : : >>>>>>> " );
      // console.log( idReq );
      // console.log( isAdmin );
      // console.log( id );
      // console.log( Id );


      // if( !isAdmin && (id !== idReq) ) return res.sendStatus(403); // En caso de no ser admin, y querer editar otro usuario distinto al propio... 
      //                                                            // (return Prohibido)
      // if ( !Nombre || !Apellido || !Genero || !FechaNacimiento || !Ubicacion ) {
      //       return res.status(400); // Todos los campos son requeridos
      // }

      // validaciones de los campos : Nombre, Apellido, Genero, etc ...
      // validaciones de parametro de la request (req.params) como por ej. que el valor del ID Solicitado sea un numero
      let toUpdate = {
            Id,
            Nombre,
            Apellido,
            Genero,
            FechaNacimiento,
            Ubicacion
      }

      try {
            const response = await updateById(toUpdate);
            return res.status(201).json(response);
      } catch (error) {
            return res.status(500).json({error: error.mensage});
      }

};

const getUsuarioById = async (req, res) => {
      const { Id } = req.params;
      
      const private = req.privateData;
      
      try {
            const foundUser = await getById(Id, private);
            
            return res.status(200).json(foundUser);
      } catch (error) {
            return res.status(500).json({error: error.message});
      }
}

const eliminarUsuario = async (req, res) => {
      const { Id } = req.params;
      const isAdmin = req.user.Admin; // Es administrador?
                                      //
                                      // if( !isAdmin ) return res.sendStatus(403); // En caso de no ser admin, retorno codigo de error: "Acceso Prohibido"
      try {
            const response = await deleteUserById(Id);
            return res.status(200).json(response);
      } catch (error) {
            return res.status(500).json({error: error.message});
      }
}


module.exports = {
      getAllUsuario,
      patchEditUsuario,
      getUsuarioById,
      eliminarUsuario
}

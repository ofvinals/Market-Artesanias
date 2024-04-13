const { getAll } = require("../../Controllers/ControllerUsuarios/ControllerUsuarios");

//GET todas las Usuario.
const getAllUsuario = async (req, res) => {
      console.log( "REQ.USER = DECODE" );
      console.log( req.user );
      const userData = req.user;
      console.log(  )
      // if( !userData.admin ) return res.status(403);
      try {
            const response = await getAll();
            return  res.status(200).json(response);
      } catch (error) {
            return  res.status(500).json({error: error.mensage});
      }
};


const putEditUsuario = async (req, res) => {};

module.exports = {
      getAllUsuario,
      putEditUsuario
}

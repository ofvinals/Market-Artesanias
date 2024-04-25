const { getAll, postAdd } = require("../../Controllers/ControllerCategorias/ControllerCategorias");

//GET todas las categoria.
const getAllCategoria = async (req, res) => {
      try {
            const response = await getAll();
            console.log( response );
            return  res.status(200).json(response);
      } catch (error) {
            return  res.status(500).json({error: error.mensage});
      }
};

//POST Carga la categoria en la DB.
const postAddCategoria = async (req, res) => {
      // console.log( "REQ.USER = DECODE" );
      // console.log( req.user );
      // const isAdmin = req.user.Admin; // Es administrador?
      //                                 // console.log( "ALMIN??? = " );
      //                                 // console.log( isAdmin );

      // if( !isAdmin ) return res.sendStatus(403); // En caso de no ser admin, retorno codigo de error: "Acceso Prohibido"

      const { Nombre } = req.body;
      try {
            const response = await postAdd(Nombre);
            return res.status(200).json(response);
      } catch (error) {
            return res.status(500).json({error: error.mensage});
      }
};

module.exports = {
      getAllCategoria,
      postAddCategoria
}

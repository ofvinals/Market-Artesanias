const { get, postAdd, filterTransactionsByUserId, getAllVentas } = require('../../Controllers/ControllerUsuarioCompra/ControllerUsuarioCompra');
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

//GET Trae todas las compras en la DB.
const getAllCompras = async (req, res) => {
      try 
      {
            const response = await get();
            return res.status(200).json(response);
      } catch (error) {
            return res.status(500).json({ error: error.message });
      }
};

//POST Carga la compras en la DB.
const crearCompra = async (req, res) => {
      const { Titulo, UserId, ProductId, StoreId, CategoryId, FechaCompra, Cantidad, PrecioTotal } = req.body;
      // console.log( req.body );
      try {
            const response = await postAdd( Titulo, UserId, ProductId, StoreId, CategoryId, FechaCompra, Cantidad, PrecioTotal );
            return res.status(200).json(response);
      } catch (error) {
            return res.status(500).json({error: error.message});
      }
};

const obtenerComprasPorUsuario = async ( req, res ) =>
{
      console.log( "HANLDER" );
      const { Id } = req.params;
      try {
            const response = await filterTransactionsByUserId( Id );
            console.log( response );
            return res.status(200).json(response);
      } catch ( error ){
            return res.status(500).json({ error: error.message });
      }
}

const obtenerVentasPorUsuario = async ( req, res ) => 
{
      //const { Id } = req.params;
      const token = req.headers.authorization;
      console.log(token)
	
	if (!token) {
		return res.status(401).json({ message: 'Token no proporcionado' });
	}
	
	// Verifica y decodifica el token para obtener el userId
	let UserId;
	try {
		const tokenParts = token.split('Bearer').pop().trim();

		const tokenized = jwt.verify(tokenParts, JWT_SECRET);

		UserId = tokenized.userId;

            const response = await getAllVentas( UserId );

            console.log( response );
            return res.status(200).json(response);
      } catch ( error ){
            return res.status(500).json({ error: error.message });
      }
}

const obtenerTransacciones = async ( req, res ) => 
{

}



module.exports = {
      getAllCompras,
      crearCompra,
      getAllCompras,
      obtenerComprasPorUsuario,
      obtenerVentasPorUsuario,
      obtenerTransacciones,
};

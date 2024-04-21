const { get, postAdd } = require('../../Controllers/ControllerUsuarioCompra/ControllerUsuarioCompra');


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
      const { Titulo, UserId, ProductId, FechaCompra, Cantidad, PrecioTotal } = req.body;
      // console.log( req.body );
      try {
            const response = await postAdd( Titulo, UserId, ProductId, FechaCompra, Cantidad, PrecioTotal );
            return res.status(200).json(response);
      } catch (error) {
            return res.status(500).json({error: error.message});
      }
};

const obtenerComprasPorUsuario = async ( req, res ) =>
{

}

const  obtenerVentasPorUsuario = async ( req, res ) => 
{

}

module.exports = {
	crearCompra,
	getAllCompras,
      obtenerComprasPorUsuario,
      obtenerVentasPorUsuario,
};

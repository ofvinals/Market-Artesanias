const { get, postAdd, filterTransactionsByUserId } = require('../../Controllers/ControllerUsuarioCompra/ControllerUsuarioCompra');


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

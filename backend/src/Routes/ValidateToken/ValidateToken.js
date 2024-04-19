const jwt = require( "jsonwebtoken" );
const { JWT_SECRET } = process.env;

function validateToken( req, res, next )
{
      const authHeader = req.headers["authorization"]; // obtengo el header 'authorization'
      const token = authHeader && authHeader.split(' ')[1]; // obtengo el string del token
      if( token === null ) return res.sendStatus(401); // hay token?
      // console.log( token );

      jwt.verify( 
            token, 
            JWT_SECRET,
            (err, decoded) => {
                  // console.log( decoded );
                  // console.log( err );
                  // console.log( req );
                  if( err ) return res.sendStatus(403);
                  req.user = decoded;
                  // console.log( "REQ.USER = DECODE" );
                  console.log("mensaje", req );
                  next();
            }
      );
}

module.exports = validateToken;
function validateAdminAndUserById( req, res, next )
{
      console.log( "VALIDATE ADMIN AND USER" );
      console.log( "VALIDATE ADMIN AND USER" );
      console.log( "VALIDATE ADMIN AND USER" );
      console.log( "VALIDATE ADMIN AND USER" );
      // console.log( req );
      const { Id } = req.params;

      // console.log( Id );

      let id = Number( Id );


      const idReq = req.user.userId;
      const isAdmin = req.user.Admin;

      // return res.sendStatus( 200 );

      if(isAdmin || id === idReq){
            req.privateData = true; // datos privados
            next();
      }

      req.privateData = false; // datos publicos
      next();
}

module.exports = validateAdminAndUserById;

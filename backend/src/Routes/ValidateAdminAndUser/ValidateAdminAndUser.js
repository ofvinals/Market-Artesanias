function validateAdminAndUser( req, res, next )
{
      const { Id } = req.params;
      let id = Number( Id );

      const idReq = req.user.userId;
      const isAdmin = req.user.Admin;

      if(isAdmin && id === idReq){
            req.privateData = true; // datos privados
            return next();
      }

      req.privateData = false; // datos publicos
      return next();
}

module.exports = validateAdminAndUser;

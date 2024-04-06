const express = require( "express" );
const app = express();

app.disable( "x-powered-by" );

app.get( "/", ( req, res ) => {
      res.json({ message: "holiwis" });
});

app.get( "/usuario1", ( req, res ) => {
      res.json({ 
            name: "Javier",
            username: "Pignataro",
            email: "javierpignataro@gmail.com",
      });
});

const PORT = process.env.PORT ?? 3657

app.listen( PORT, () => {
      console.log( `Server is listening on port: http://localhost:${PORT}` );
} );

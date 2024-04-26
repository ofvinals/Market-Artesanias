const server = require("./src/app");
const { sequelize, Category } = require("./src/db");
const PORT = process.env.PORT;

sequelize.sync({ force: false }).then(() => {
      server.listen(PORT, async () => {
            await Category.bulkCreate([
                  {
                        Id: 1,
                        Nombre: 'Vestimenta'
                  },
                  {
                        Id: 2,
                        Nombre: 'Cerámica'
                  },
                  {
                        Id: 3,
                        Nombre: 'Muebles'
                  },
                  {
                        Id: 4,
                        Nombre: 'Cuadros'
                  },
                  {
                        Id: 5,
                        Nombre: 'Accesorios'
                  },
            ])
            console.log(`Listen at ${PORT}`);
      });
});

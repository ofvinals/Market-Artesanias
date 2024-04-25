const server = require("./src/app");
const { sequelize, Category } = require("./src/db");
const PORT = process.env.PORT;



sequelize.sync({ force: false }).then(() => {
      server.listen(PORT, () => {
            console.log(`Listen at ${PORT}`);
      });
});

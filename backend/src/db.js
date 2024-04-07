require("dotenv").config();
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const { PGDATABASE, PGHOST, PGPASSWORD, PGUSER, PGPORT } = process.env;

const sequelize = new Sequelize(
      `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
      {
            logging: false,
            native: false
      }
);

try {
      sequelize.authenticate();
      console.log('Connection has been established successfully.');
} catch (error) {
      console.error('Unable to connect to the database:', error);
}

//
const User = sequelize.define('User', {
      // Model attributes are defined here
      firstName: {
            type: DataTypes.STRING,
            allowNull: false
      },
      lastName: {
            type: DataTypes.STRING
                  // allowNull defaults to true
      }
}, {
      // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
//
//
// //relaciones con los modelos
//
// // relacion uno a mucho 
// // relacion mucho a mucho
//
//
// module.exports = {
//       sequelize: sequelize,
//       ...sequelize.models,
// };
//
module.exports = { sequelize: sequelize };

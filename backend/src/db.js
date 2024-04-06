require("dotenv").config();
const { Sequelize } = require("sequelize");
const { PGDATABASE, PGHOST, PGPASSWORD, PGUSER, PGPORT } = process.env;

const sequelize = new Sequelize(
	`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
	{
		logging: false,
		native: false
	}
);

//relaciones con los modelos

// relacion uno a mucho 
// relacion mucho a mucho


module.exports = {
	sequelize,
	...sequelize.models,
};

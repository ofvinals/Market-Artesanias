const { DataTypes } = require("sequelize")

module.exports = storeModel = (sequelize) => {
  const Store =  sequelize.define("Store", {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
  return Store;
}
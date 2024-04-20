const { DataTypes } = require("sequelize")

module.exports = categoryModel = (sequelize) => {
  const Category = sequelize.define("Category", {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    { timestamps: false }
  );
  return Category;
}
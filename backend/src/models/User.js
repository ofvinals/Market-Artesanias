const { DataTypes } = require("sequelize")

module.exports = storeModel = (sequelize) => {
  const User =  sequelize.define("User", {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    PasswordKey: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    Vendedor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    Admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
  });
  return User;
}
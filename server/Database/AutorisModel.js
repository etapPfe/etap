const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:///:memory:');

module.exports = (sequelize, DataTypes) => {
  const Autoris = sequelize.define('Autoris', {
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    typeOtris: {
      type: DataTypes.STRING,
      allowNull: false
    },
    HeurDD: {
      type: DataTypes.TIME,
      allowNull: true
    },
    HeurDS: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Raison: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });

  return Autoris;
};

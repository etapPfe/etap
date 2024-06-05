const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:///:memory:');

module.exports = (sequelize, DataTypes) => {
  const Pointage = sequelize.define('Pointage', {
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    HeurEE: {
      type: DataTypes.TIME,
      allowNull: true
    },
    HeurSS: {
      type: DataTypes.TIME,
      allowNull: false
    }
  });

  return Pointage;
};

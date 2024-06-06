const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:///:memory:');

module.exports = (sequelize, DataTypes) => {
  const Pret = sequelize.define('Pret', {
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Raison: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Montant: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    Statu: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Pret;
};

  const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:///:memory:');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  Type:{ type: DataTypes.ENUM('Directeur', 'Cadre', 'Technicien','Ouvrier','Commercial','Service client','Ingénieur','maintenance','Agent de sécurité','Stagiaire'),
    allowNull: true
  },
    ImageUrl:{
    type: DataTypes.STRING,
    allowNull: false
  },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};

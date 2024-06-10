const mysql = require('mysql2')


const { Sequelize ,DataTypes } = require('sequelize')
const connection = new Sequelize('etap', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});
 



async function connectionTest (){
  try {
    await connection.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
  connectionTest()
  const db={}
  db.User=require('./UserModel')(connection,DataTypes)
  db.Pointage=require('./PointageModel.js')(connection,DataTypes)
  db.Pret=require('./PretModel.js')(connection,DataTypes)
  db.Autoris=require('./AutorisModel')(connection,DataTypes)
  db.Conge=require('./CongeModel')(connection,DataTypes)
  db.Absence=require('./AbsenceModel')(connection,DataTypes)
  
  
  


// Sync the models with the database

 connection.sync()
    .then(() => {
        console.log('Models synced with the database.')
    })
    .catch((error) => {
        console.error('Unable to sync models with the database: ', error)
    })
 
module.exports =db 

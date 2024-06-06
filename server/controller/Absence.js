const db = require('../Database/index'); // Assuming db exports the Sequelize connection and User model


module.exports = {
add : async (req, res) => {
  try {
    const { idUser, Name, Typecong, DD,DF,Raison } = req.body;
    const newPointage = await db.Absence.create({ idUser, Name, Typecong, DD,DF,Raison });
    res.status(201).json(newPointage);
  } catch (error) {
    res.status(400).json({ message: error.message });

  }
},

// Controller to get a specific pointage record by Id
 getone : async (req, res) => {
  try {
    const { id } = req.body;
    const pointage = await db.Absence.findOne({ where: { Id: id } });
    if (pointage) {
      res.json(pointage);
    } else {
      res.status(404).json({ message: 'Pointage not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
},

// Controller to get all pointage records
 getall :async (req, res) => {
  try {
    const pointages = await db.Absence.findAll();
    res.json(pointages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}}
const db = require('../Database/index'); // Assuming db exports the Sequelize connection and User model


module.exports = {
add : async (req, res) => {
  try {
    const { idUser, typeOtris, HeurDD, HeurDS,Raison } = req.body;
    const newPointage = await db.Autoris.create({ idUser, typeOtris, HeurDD, HeurDS,Raison });
    res.status(201).json(newPointage);
  } catch (error) {
    res.status(400).json({ message: error.message });

  }
},

// Controller to get a specific pointage record by Id
 getone : async (req, res) => {
  try {
    const { id } = req.body;
    const pointage = await db.Autoris.findOne({ where: { Id: id } });
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
    const pointages = await db.Autoris.findAll();
    res.json(pointages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}}
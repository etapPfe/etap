
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctot.controller');

router.get('/all', doctorController.getAllDoctors);

router.get('/:id', doctorController.getDoctorById);

router.post('/', doctorController.createDoctor);

router.put('/:id', doctorController.updateDoctor);

router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;

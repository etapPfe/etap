const express = require('express');
const router = express.Router();
const { add, getone,getall } = require('../controller/autoris.js');
router.post('/add', add);
router.post('/getone', getone);
router.get('/getall', getall);


module.exports = router;

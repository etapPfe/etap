const express = require("express");
const app = express();
const cors=require('cors')

app.use(cors())
app.use(express.static(__dirname + "/../client/dist"));
const db = require ("./Database/index")



app.use(express.json());
app.use(express.urlencoded({extended: true}));

const User = require('./Routers/user.routes.js')

const Authentication = require('./Routers/login.routers.js');
const pointage = require('./Routers/pointage.routers.js');
const pret = require('./Routers/pret.routers.js');
const Autoris = require('./Routers/autoris.routers.js');
const Conge = require('./Routers/Conge.routers.js');
const Absence = require('./Routers/Absence.routers.js');

app.use(cors()) 
app.use("/api/autoris", Autoris);
app.use("/api/Conge", Conge);
app.use("/api/Absence", Absence);

app.use("/api/auth", Authentication);
app.use('/api/user', User);
app.use('/api/poin', pointage);
app.use('/api/pret', pret);

let port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
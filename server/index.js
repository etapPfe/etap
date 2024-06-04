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

app.use(cors()) 

app.use("/api/auth", Authentication);
app.use('/api/user', User);

let port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
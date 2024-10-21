global.db = require("./db/db");
const express = require("express");
const router = require("./router");
const app = express();

// Utilizando o express.json para lidar com requisições que usam o json como body...
app.use(express.json());
// Utilizando os métodos do arquivo routes....
app.use(router);

module.exports = app;
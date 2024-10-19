const express = require("express");
const clientsController = require("./controllers/clientsController");

const router = express.Router();

router.get("/clients", clientsController.getAllClientsController);

module.exports = router;
const express = require("express");
const clientsController = require("./controllers/clientsController");

const router = express.Router();

router.get("/clients", clientsController.getAllClientsController);
router.post("/clients", clientsController.createdNewClientController);
router.delete("/clients", clientsController.removeClientController);

module.exports = router;
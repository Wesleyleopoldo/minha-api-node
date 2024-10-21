const express = require("express");
const clientsController = require("./controllers/clientsController");

// Declarando a constante que tem o método de rotas do express...
const router = express.Router();

// Rotas para  para clientes...
router.get("/clients", clientsController.getAllClientsController);
router.post("/clients", clientsController.createdNewClientController);
router.delete("/clients/:id", clientsController.removeClientController);

// Exportando o modulo router...
module.exports = router;
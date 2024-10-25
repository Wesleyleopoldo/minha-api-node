const express = require("express");
const clientsController = require("./controllers/clientsController");
const reservationController = require("./controllers/reservationController");

// Declarando a constante que tem o método de rotas do express...
const router = express.Router();

// Rotas para  para clientes...
router.get("/clients", clientsController.getAllClientsController);
router.post("/clients", clientsController.createdNewClientController);
router.delete("/clients/:id", clientsController.removeClientController);
router.post("/reservation/:id", reservationController.createReservation);

// Exportando o modulo router...
module.exports = router;
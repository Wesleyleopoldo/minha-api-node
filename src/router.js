const express = require("express");
const clientsController = require("./controllers/clientsController");
const roomController = require("./controllers/roomController");
const reservationController = require("./controllers/reservationController");
const middleware = require("./middlewares/middleware");

// Declarando a constante que tem o método de rotas do express...
const router = express.Router();

// Rotas para  para clientes...
router.get("/clients", clientsController.indexAllClientsController);
router.post("/clients", middleware.validationBodyCreateClient, clientsController.createdNewClientController);
router.delete("/clients/:id", middleware.validationParam, clientsController.destroyClientController);

router.post("/room", roomController.createRoomController);
router.get("/room", roomController.indexAllRoomsController);
router.delete("/room/:id", middleware.validationParam, roomController.destroyRoomController);

router.post("/reservation/:id", reservationController.createReservation);
router.get("/reservation", reservationController.indexAllReservation);
router.put("/reservation/:id/checkin", reservationController.updateCheckin);
router.put("/reservation/:id/checkout", reservationController.updateCheckout);
router.delete("/reservation/:id", middleware.validationParam, reservationController.destroyReservation);

// Exportando o modulo router...
module.exports = router;
const reservationServices = require("../services/reservationServices");

const createReservation = async (request, response) => {

    const createReservationModel = await reservationServices.createReservation(request.body, request.params);

    return response.status(201).json(createReservationModel);
};

module.exports = {
    createReservation
}
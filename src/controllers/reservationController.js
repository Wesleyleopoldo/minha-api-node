const reservationServices = require("../services/reservationServices");

const createReservation = async (request, response) => {

    const createReservationModel = await reservationServices.createReservation(request.body, request.params);

    return response.status(201).json(createReservationModel);
};

const indexAllReservation = async(_request, response) => {
    const indexAllReservations = await reservationServices.indexAllReservationsServices();

    return response.status(200).json(indexAllReservations);
};

module.exports = {
    createReservation,
    indexAllReservation
}
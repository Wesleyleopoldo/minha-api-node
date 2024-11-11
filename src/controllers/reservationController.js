const reservationServices = require("../services/reservationServices");

const createReservation = async (request, response) => {

    const createReservationModel = await reservationServices.createReservation(request.body, request.params);

    return response.status(201).json(createReservationModel);
};

const indexAllReservation = async(_request, response) => {
    const indexAllReservations = await reservationServices.indexAllReservationsServices();

    return response.status(200).json(indexAllReservations);
};

const updateCheckin = async (request, response) => {
    const updateCheckin = await reservationServices.updateCheckin(request.body, request.params);

    return response.status(200).json(updateCheckin);
};

const updateCheckout = async (request, response) => {
    const updateCheckout = await reservationServices.updateCheckout(request.body, request.params);

    return response.status(200).json(updateCheckout);
}

const destroyReservation = async (request, response) => {
    const destroyReservation = await reservationServices.destroyReservation(request.params);

    return response.status(204);
}

module.exports = {
    createReservation,
    indexAllReservation,
    updateCheckin,
    updateCheckout,
    destroyReservation
}
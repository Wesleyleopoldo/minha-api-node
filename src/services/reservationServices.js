const database = require("../models/reservationModel");
const reservationDTO = require("../dtos/reservationDTO");

const createReservation = async (body, params) => {
    const reservationDate = body.reservation_date;
    const clientId = params.id;
    const roomId = body.roomId;

    const createdReservation = await database.createReservationModel(reservationDate, clientId, roomId);

    const responseDTO = convertForDTO(createdReservation);

    return responseDTO;

};

const indexAllReservationsServices = async () => {
    const [allReservations] = await database.indexAllReservationModel();

    const responseDTO = convertAllDatasOfReservations(allReservations);

    return responseDTO;
};

const updateCheckin = async (body, params) => {
    const reservationId = body.reservationId;
    const checkinDate = body.checkin_date;
    const clientId = params.id;

    const updatedCheckin = await database.updateCheckin(reservationId, checkinDate, clientId);

    const responseDTO = convertAllDatasOfReservations(updatedCheckin);

    return responseDTO;
};

const updateCheckout = async (body, params) => {
    const reservationId = body.reservationId;
    const checkoutDate = body.checkout_date;
    const clientId = params.id;

    const updatedCheckout = await database.updateCheckout(reservationId, checkoutDate, clientId);

    const responseDTO = convertAllDatasOfReservations(updatedCheckout);

    return responseDTO;
};

const destroyReservation = async (params) => {
    const reservationId = params.id;

    const [destroyedReservation] = await database.destroyReservation(reservationId);

    return destroyedReservation;
}

function convertForDTO(reservationdata) {
    const newReservation = reservationdata.map(reservation => new reservationDTO.reservationDTO(reservation.reservationId, reservation.reservation_date, reservation.checkin_date,reservation.checkout_date, reservation.fk_clientId, reservation.fk_roomId));
    return newReservation;
};
// Converte dados especificos para retornar no indexAllReservations...
function convertAllDatasOfReservations(allDatas) {

    const allDatasOfReservations = allDatas.map(allDataReservations => new reservationDTO.allDatasOfReservationsDTO(allDataReservations.reservationId, allDataReservations.reservation_date, allDataReservations.checkin_date, allDataReservations.checkout_date, allDataReservations.client_name, allDataReservations.client_address, allDataReservations.client_telephone, allDataReservations.room_type, allDataReservations.diaries_price));

    return allDatasOfReservations;
};

module.exports = {
    createReservation,
    indexAllReservationsServices,
    updateCheckin,
    updateCheckout,
    destroyReservation
};
const database = require("../models/reservationModel");
const reservationDTO = require("../dtos/reservationDTO");

const createReservation = async (body, params) => {
    const reservationDate = body.reservation_date;
    const clientId = params.id;
    const roomId = body.roomId;

    const [createdReservation] = await database.createReservationModel(reservationDate, clientId, roomId);

    const responseDTO = convertForDTO(createdReservation);

    return responseDTO;

}

function convertForDTO(reservationdata) {
    const newReservation = reservationdata.map(reservation => new reservationDTO(reservation.reservationId, reservation.reservation_date, reservation.fk_clientId, reservation.fk_roomId));
    return newReservation;
}
module.exports = {
    createReservation
}
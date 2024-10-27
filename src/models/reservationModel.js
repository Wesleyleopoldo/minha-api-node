const database = require("../db/db");

const createReservationModel = async (reservation_date, client_id, room_id) => {

    const reservationDate = reservation_date;
    const clientId = client_id;
    const roomId = room_id;

    const query = "INSERT INTO reservation(reservation_date, fk_clientId, fk_roomId) VALUES (?, ?, ?)";


    const [createdNewReservation] = await database.execute(query, [reservationDate, clientId, roomId]);

    const id = createdNewReservation.insertId;

    const newReservation = await findReservationById(id);

    return newReservation;
};

const findReservationById = async (id) => {
    const reservationId = id;

    const query = "SELECT reservationId, reservation_date, fk_clientId, fk_roomId FROM reservation WHERE reservationId = ?";

    const reservation = await database.execute(query, [reservationId]);

    return reservation;
};

module.exports = {
    createReservationModel
}
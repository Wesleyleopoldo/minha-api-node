const database = require("../db/db");

const createReservationModel = async (request, response) => {

    const reservationDate = request.reservation;
    const clientId = request.params.clientId;
    const roomId = request.roomId;

    const query = "INSERT INTO reservation(reservation_date, fk_clientId, fk_roomId) VALUES (?, ?, ?)";


    const [newReservation] = database.execute(query, [reservationDate, checkinDate, roomId]);

    return newReservation;
};
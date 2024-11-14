const database = require("../db/db");
const clientDatas = require("./clientModel");

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

const indexAllReservationModel = async () => {
    const query = "SELECT reservation.reservationId, reservation.reservation_date, reservation.checkin_date, reservation.checkout_date, table_client.clientId, table_client.client_name, table_client.client_address, table_client.client_telephone, room.room_type, room.diaries_price FROM reservation JOIN table_client ON reservation.fk_clientId = table_client.clientId JOIN room ON reservation.fk_roomId = room.roomId";

    const allReservations = await database.execute(query);

    return allReservations;
};

const updateCheckin = async (reservation_Id, checkin_date, fk_clientId) => {
    const reservationId = reservation_Id;
    const checkinDate = checkin_date;
    const clientId = fk_clientId;

    const query = "UPDATE reservation SET checkin_date = ? WHERE reservationId = ?";

    const updatedCheckin = await database.execute(query, [checkinDate, reservationId]);

    const id = clientId;

    const [client] = await clientDatas.findClientById(id);
    const [reservation] = await findReservationById(reservationId);

    client.push(reservation);

    return client;
};

const updateCheckout = async (reservation_Id, checkout_date, fk_clientId) => {
    const reservationId = reservation_Id;
    const checkoutDate = checkout_date;
    const clientId = fk_clientId;

    const query = "UPDATE reservation SET checkout_date = ? WHERE reservationId = ?";

    const updatedCheckout = await database.execute(query, [checkoutDate, reservationId]);

    const id = clientId;

    const [client] = await clientDatas.findClientById(id);
    const [reservation] = await findReservationById(reservationId);

    client.push(reservation);

    return client;
};

const destroyReservationModel = async (id) => {
    const reservationId = id;

    const query = "DELETE FROM reservation WHERE reservationId = ?";

    const destroyedReservation = database.execute(query, [reservationId]);

    return destroyedReservation;
}

const findReservationById = async (id) => {
    const reservationId = id;

    const query = "SELECT reservationId, reservation_date, checkin_date, checkout_date, fk_clientId, fk_roomId FROM reservation WHERE reservationId = ?";

    const [reservation] = await database.execute(query, [reservationId]);

    return reservation;
};

module.exports = {
    createReservationModel,
    indexAllReservationModel,
    updateCheckin,
    updateCheckout,
    destroyReservationModel
}
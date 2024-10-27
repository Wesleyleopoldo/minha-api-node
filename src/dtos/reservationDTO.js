class reservationDTO {
    constructor(reservationId, reservationDate, clientId, roomId)
    {
        this.reservation_id = reservationId;
        this.reservation_date = reservationDate;
        this.client_id = clientId;
        this.room_id = roomId;
    }
};

module.exports = reservationDTO;
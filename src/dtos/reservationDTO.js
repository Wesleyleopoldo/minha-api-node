class reservationDTO {
    constructor(reservationId, reservationDate, checkinDate, checkoutDate, clientId, roomId)
    {
        this.reservation_id = reservationId;
        this.reservation_date = reservationDate;
        this.checkin_date = checkinDate;
        this.checkout_date = checkoutDate;
        this.client_id = clientId;
        this.room_id = roomId;
    }
};

class allDatasOfReservationsDTO {
    constructor(reservationId, reservationDate, checkinDate, checkoutDate, clientId, clientName, clientAddress, clientTelephone, roomType, diariesPrice)
    {
        this.reservationId = reservationId;
        this.reservation_date = reservationDate;
        this.checkin_date = checkinDate;
        this.checkout_date = checkoutDate;
        this.clientId = clientId;
        this.client_name = clientName;
        this.client_address = clientAddress;
        this.client_telephone = clientTelephone;
        this.room_type = roomType;
        this.diaries_price = diariesPrice;
    }
};

module.exports = {
    reservationDTO,
    allDatasOfReservationsDTO
};
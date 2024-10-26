const database = require("../db/db");

const createRoomModel = async (dataRoomType, diariesPrice) => {
    const roomType = dataRoomType;
    const roomDiariesPrice = diariesPrice;

    const query = "INSERT INTO room(room_type, diaries_price) VALUES (?, ?)"

    const newRoom = await database.execute(query, [roomType, roomDiariesPrice]);

    return newRoom;
}

module.exports = {
    createRoomModel
}
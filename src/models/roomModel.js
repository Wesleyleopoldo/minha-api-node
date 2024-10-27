const database = require("../db/db");

const createRoomModel = async (dataRoomType, diariesPrice) => {
    const roomType = dataRoomType;
    const roomDiariesPrice = diariesPrice;

    const primaryQuery = "INSERT INTO room(room_type, diaries_price) VALUES (?, ?)";

    const [createRoom] = await database.execute(primaryQuery, [roomType, roomDiariesPrice]);

    const id = createRoom.insertId;

    const newRoom = await findRoomById(id);

    return newRoom;
};

const getAllRooms = async () => {
    const query = "SELECT roomId, room_type, diaries_price FROM room";
    const getAllRooms = await database.execute(query);
    return getAllRooms;
};


const findRoomById = async (id) => {
    const query = "SELECT roomId, room_type, diaries_price FROM room WHERE roomId = ?";

    const [roomList] = await database.execute(query, [id]);

    return roomList;
}
module.exports = {
    createRoomModel,
    getAllRooms
}
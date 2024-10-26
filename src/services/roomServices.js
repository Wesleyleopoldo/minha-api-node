const databaseModel = require("../models/roomModel");
const roomDTO = require("../dtos/roomDTO");

const createNewRoomServices = async (request) => {
    const roomType = request.roomtype;
    const roomDiariesPrice = request.diariesprice;

    const [createdNewRoom] = await databaseModel.createRoomModel(roomType, roomDiariesPrice);

    const responseDTO = new roomDTO(createdNewRoom.insertId ,createdNewRoom.room_type, createdNewRoom.diaries_price);
    JSON.stringify(responseDTO);

    return responseDTO;
}

module.exports = {
    createNewRoomServices
};
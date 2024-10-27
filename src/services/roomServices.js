const databaseModel = require("../models/roomModel");
const roomDTO = require("../dtos/roomDTO");



const createNewRoomServices = async (request) => {
    const roomtype = request.roomtype;
    const roomdiariesprice = request.diariesprice;

    const [createdNewRoom] = await databaseModel.createRoomModel(roomtype, roomdiariesprice);

    const responseDTO = convertForDTO(createdNewRoom);

    return responseDTO;
};

const indexAllRooms = async () => {
    const [allRooms] = await databaseModel.indexAllRooms();

    /* 
     * Nessa linha estou usando o map para transformar cada linha do banco de dados em um novo "Objeto"
     * E jogando esse novo objeto dentro de um array...
     */
    const responseDTO = convertForDTO(allRooms);

    return responseDTO;
};

function convertForDTO (rooms) 
{
    const convertedForDTO = rooms.map(room => new roomDTO(room.roomId, room.room_type, room.diaries_price));
    return convertedForDTO;
};

module.exports = {
    createNewRoomServices,
    indexAllRooms
};
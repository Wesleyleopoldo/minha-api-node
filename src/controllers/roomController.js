const roomServices = require("../services/roomServices");

const createRoomController = async (request, response) => {
    const createdRoom = await roomServices.createNewRoomServices(request.body);

    return response.status(200).json(createdRoom);
};

const indexAllRoomsController = async (_request, response) => {
    const indexAllRooms = await roomServices.indexAllRooms();

    return response.status(200).json(indexAllRooms);
};

module.exports = {
    createRoomController,
    indexAllRoomsController
}
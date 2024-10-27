const roomServices = require("../services/roomServices");

const createRoomController = async (request, response) => {
    const createdRoom = await roomServices.createNewRoomServices(request.body);

    return response.status(201).json(createdRoom);
};

const indexAllRoomsController = async (_request, response) => {
    const indexAllRooms = await roomServices.indexAllRooms();

    return response.status(200).json(indexAllRooms);
};

const destroyRoomController = async (request, response) => {
    const destroyRoom = await roomServices.destroyRoom(request.params);
    return response.status(204).json(destroyRoom);
}

module.exports = {
    createRoomController,
    indexAllRoomsController,
    destroyRoomController
}
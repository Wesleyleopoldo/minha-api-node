const roomServices = require("../services/roomServices");

const createRoomController = async (request, response) => {
    const createdRoom = await roomServices.createNewRoomServices(request.body);

    return response.status(200).json(createdRoom);
};

const getAllRoomsController = async (_request, response) => {
    const getAllRooms = await roomServices.getAllRooms();

    return response.status(200).json(getAllRooms);
};

module.exports = {
    createRoomController,
    getAllRoomsController
}
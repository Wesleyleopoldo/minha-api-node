const roomServices = require("../services/roomServices");

const createRoomController = async (request, response) => {
    const createdRoom = await roomServices.createNewRoomServices(request.body);

    return response.status(200).json(createdRoom);
}

module.exports = {
    createRoomController
}
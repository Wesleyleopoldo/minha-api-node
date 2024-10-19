const clientsModel = require("../models/clientModel");

const getAllClientsController = async (requeste, response) => {
    const clients = await clientsModel.getAllClients();
    return response.status(200).json(clients);
};

const createdNewClientController = async (request, response) => {
    const newClient = await clientsModel.createdNewClient(request.body);
    return response.status(201).json(newClient);
};

const removeClientController = async (request, response) => {
    const removeClient = await clientsModel.removeClient(request.body);
    return response.status(204).send();
};

module.exports = {
    getAllClientsController,
    createdNewClientController,
    removeClientController
};
const clientsModel = require("../models/clientModel");

// Endpoint para listar todos os clientes...
const getAllClientsController = async (requeste, response) => {
    const clients = await clientsModel.getAllClients();
    return response.status(200).json(clients);
};

// Endpoint para criar novo cliente...
const createdNewClientController = async (request, response) => {
    const newClient = await clientsModel.createdNewClient(request.body);
    return response.status(201).json(newClient);
};

// Endpoint para remover um cliente...
const removeClientController = async (request, response) => {
    const removeClient = await clientsModel.removeClient(request.params);
    return response.status(204).send();
};

// Exportando módulos...
module.exports = {
    getAllClientsController,
    createdNewClientController,
    removeClientController
};
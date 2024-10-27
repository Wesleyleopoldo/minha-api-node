const clientsServices = require("../services/clientService");

// Endpoint para listar todos os clientes...
const indexAllClientsController = async (requeste, response) => {
    const indexClients = await clientsServices.indexAllClients();
    return response.status(200).json(indexClients);
};

// Endpoint para criar novo cliente...
const createdNewClientController = async (request, response) => {
    const newClient = await clientsServices.createNewClientServices(request.body);
    return response.status(201).json(newClient);
};

// Endpoint para remover um cliente...
const destroyClientController = async (request, response) => {
    const destroyClient = await clientsServices.destroyClientById(request.params);
    return response.status(204).send();
};


// Exportando módulos...
module.exports = {
    indexAllClientsController,
    createdNewClientController,
    destroyClientController
};
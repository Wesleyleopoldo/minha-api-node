const clientDTO = require("../dtos/clientDTO");

const databaseClientModel = require("../models/clientModel");

const createNewClientServices = async (request) => {
    const newClientName = request.name;
    const newClientAddress = request.address;
    const newClientTelephone = request.telephone;

    const [createdNewClient] = await databaseClientModel.createdNewClient(newClientName, newClientAddress, newClientTelephone);

    const responseDTO = convertForDTO(createdNewClient);

    return responseDTO;
};

function convertForDTO([dataClient]) 
{
    const convertForDto = dataClient.map(client => new clientDTO(client.clientId, client.client_name, client.client_address, client.client_telephone));

    return convertForDto;
}

module.exports = {
    createNewClientServices
}
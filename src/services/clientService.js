const clientDTO = require("../dtos/clientDTO");

const databaseClientModel = require("../models/clientModel");

const indexAllClients = async () => {
    const [allClients] = await databaseClientModel.indexAllClients();

    const responseDTO = convertForDTO(allClients);

    return responseDTO
};

const createNewClientServices = async (request) => {
    const newClientName = request.name;
    const newClientAddress = request.address;
    const newClientTelephone = request.telephone;

    const [createdNewClient] = await databaseClientModel.createdNewClient(newClientName, newClientAddress, newClientTelephone);

    const responseDTO = convertForDTO(createdNewClient);

    return responseDTO;
};

const destroyClientById = async (params) => {
    
    try
    {
        const clientId = params.id;

        const destroyedClient = await databaseClientModel.destroyClient(clientId);

        return "Sucesso ao deletar usuário!!!";
    }
    catch(error)
    {
        return "Falha ao deletar usuário", error;
    }
    
};

function convertForDTO(dataClient) 
{
    const convertForDto = dataClient.map(client => new clientDTO(client.clientId, client.client_name, client.client_address, client.client_telephone));

    return convertForDto;
}

module.exports = {
    createNewClientServices,
    indexAllClients,
    destroyClientById
}
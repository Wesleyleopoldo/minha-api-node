const database = require("../db/db");

// Metodo que lista todos os clientes...
const indexAllClients = async () => {

    const query = "SELECT clientId, client_name, client_address, client_telephone FROM table_client";
    const clients = await database.execute(query);
    return clients;
};

// Metodo que cria novo cliente...
const createdNewClient = async (ClientName, ClientAddress, ClientTelephone) => {
    const newClientName = ClientName;
    const newClientAddress = ClientAddress;
    const newClientTelephone = ClientTelephone

    const query = "INSERT INTO table_client(client_name, client_address, client_telephone) VALUES (?, ?, ?)";

    const [createdClient] = await database.execute(query, [newClientName, newClientAddress, newClientTelephone]);

    const id = createdClient.insertId;

    const newClient = findClientById(id);

    return newClient;
};

// Metodo que remove cliente....
const destroyClient = async (clientId) => {

    const query = "DELETE FROM table_client WHERE clientId = ?";

    const clientDestroyed = database.execute(query, [clientId]);
}

const findClientById = async (id) => {
    const query = "SELECT clientId, client_name, client_address, client_telephone FROM table_client WHERE clientId = ?";

    const newClient = await database.execute(query, [id]);

    return newClient;
}
// Exportando os metodos...
module.exports = {
    indexAllClients,
    createdNewClient,
    destroyClient,
    findClientById
};
const database = require("../db/db");

// Metodo que lista todos os clientes...
const getAllClients = async () => {

    const query = "SELECT * FROM table_client";
    const [clients] = await database.execute(query);
    return clients;
};

// Metodo que cria novo cliente...
const createdNewClient = async (dataNewClient) => {
    const clientName = dataNewClient.name;
    const clientAddress = dataNewClient.address;
    const clientTelephone = dataNewClient.telephone;

    const query = "INSERT INTO table_client(client_name, client_address, client_telephone) VALUES (?, ?, ?)";

    const [newClient] = await database.execute(query, [clientName, clientAddress, clientTelephone]);

    console.log(newClient.insertId);
    return "Usuário salvo!!!";
};

// Metodo que remove cliente....
const removeClient = async (cod_client) => {
    
    const requestBody = cod_client.params.id;
    const query = "DELETE FROM table_client WHERE id_client = ?";

    const clientRemoved = database.execute(query, [requestBody]);
}

// Exportando os metodos...
module.exports = {
    getAllClients,
    createdNewClient,
    removeClient
};
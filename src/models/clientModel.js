const database = require("../db/db");

const getAllClients = async () => {

    const query = "SELECT * FROM table_client";
    const [clients] = await database.execute(query);
    return clients;
};

const createdNewClient = async (dataNewClient) => {
    const requestBody = dataNewClient.name;
    const query = "INSERT INTO table_client(client_name) VALUES (?)";

    const [newClient] = await database.execute(query, [requestBody]);

    console.log(newClient.insertId);
    return "Usuário salvo!!!";
};

const removeClient = async (cod_client) => {
    
    const requestBody = cod_client.cod_client;
    const query = "DELETE FROM table_client WHERE cod_client = ?";

    const clientRemoved = database.execute(query, [requestBody]);
}

module.exports = {
    getAllClients,
    createdNewClient,
    removeClient
};
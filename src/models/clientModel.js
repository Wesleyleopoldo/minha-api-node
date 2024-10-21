const database = require("../db/db");

// Metodo que lista todos os clientes...
const getAllClients = async () => {

    const query = "SELECT * FROM table_client";
    const [clients] = await database.execute(query);
    return clients;
};

// Metodo que cria novo cliente...
const createdNewClient = async (dataNewClient) => {
    const requestBody = dataNewClient.name;
    const query = "INSERT INTO table_client(client_name) VALUES (?)";

    const [newClient] = await database.execute(query, [requestBody]);

    console.log(newClient.insertId);
    return "Usuário salvo!!!";
};

// Metodo que remove cliente....
const removeClient = async (cod_client) => {
    
    const requestBody = cod_client;
    const query = "DELETE FROM table_client WHERE cod_client = ?";

    const clientRemoved = database.execute(query, [requestBody]);
}

// Exportando os metodos...
module.exports = {
    getAllClients,
    createdNewClient,
    removeClient
};
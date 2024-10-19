const database = require("../db/db");

const getAllClients = async () => {
    const clients = await database.execute("SELECT * FROM table_clients");
    return clients;
};



module.exports = {
    getAllClients
};
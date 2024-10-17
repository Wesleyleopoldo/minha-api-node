const mysql = require('mysql2/promise');

async function connect() {
    if(global.connection && global.connection.state !== 'diconnected') return global.connection;
    const connectionString = 'mysql://root:123456@localhost:3306/clientes';
    const connection = await mysql.createConnection(connectionString);
    console.log('Conectou no MySQL!');
    global.connection = connection;

    return global.connection;
}

connect();

module.exports = {}
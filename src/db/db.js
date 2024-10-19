const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

(async () => {
    try
    {
        const verifyConnectionDb = await connection.getConnection();
        console.log("Conexão com Banco de Dados realizada com sucesso!!!");
        verifyConnectionDb.release();    
    }
    catch
    {
        console.error("Conexão com o Banco de Dados mal-sucedida...");
    }
})();

module.exports = connection;
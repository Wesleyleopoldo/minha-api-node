const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

// Configurando o dotenv para utilizar as variáveis do .env...
dotenv.config();

// Constante que cria a conexão com o banco de dados...
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

// Criando método anonimo que é executado logo em seguida para verificar conexão...
(async () => {
    try
    {
        const verifyConnectionDb = await connection.getConnection();
        console.log("Conexão com Banco de Dados realizada com sucesso!!!");
        verifyConnectionDb.release();    
    }
    catch(error)
    {
        console.error("Conexão com o Banco de Dados mal-sucedida...", error);
    }
})();

module.exports = connection;
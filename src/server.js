const app = require("./app");

const dotEnv = require("dotenv");

// Configurando o dotenv para utilizar as variáveis do arquivo .env...
dotEnv.config();

// Declarando a constante que vai armazenar o número da porta onde a aplicação vai rodar...
const PORT = process.env.PORT || 3333;

// Iniciando aplicação na porta 3333...
app.listen(PORT, () => {
    console.log("Servidor rodando...");
});
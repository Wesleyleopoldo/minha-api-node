const express = require('express');

const app = express();

app.listen(3333, () => {
    console.log("Servidor rodando...");
});

app.get('/teste', (request, response) => {
    response.send("<h1>Olá mundo</h1>")
})
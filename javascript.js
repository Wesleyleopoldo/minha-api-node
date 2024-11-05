async function fetchUsers() {
    try {
        const response = await axios.get("http://localhost:3333/clients"); // Certifique-se de que esta URL é a correta
        const users = response.data; // Aqui pegamos os dados da resposta da API

        const usersTable = document.getElementById("usersTable");
        usersTable.innerHTML = ""; // Limpa a tabela antes de adicionar novos dados

        // Verifica se a lista de usuários não está vazia
        if (users.length === 0) {
            usersTable.innerHTML = "<tr><td colspan='3'>Nenhum usuário encontrado</td></tr>";
            return;
        }

        // Itera sobre cada usuário e cria uma linha na tabela
        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.address}</td>
                <td>${user.telephone}</td>
            `;
            usersTable.appendChild(row); // Adiciona a linha na tabela
        });
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        const usersTable = document.getElementById("usersTable");
        usersTable.innerHTML = "<tr><td colspan='3'>Erro ao carregar usuários</td></tr>";
    }
}

async function indexAllRooms() {

    try {
        const response = await axios.get("http://localhost:3333/room");
        const data = response.data;

        const roomsTable = document.getElementById("roomsTable");
    } catch (error) {
        
    }
}

// Chama a função quando a página é carregada
document.addEventListener("DOMContentLoaded", function(){
    if (window.location.pathname === "/indexClients.html") {
        fetchUsers();
    } else {
        console.error("Algo deu errado...");
    }
});
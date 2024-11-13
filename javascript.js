const urlClients = "http://localhost:3333/clients";
const urlRooms = "http://localhost:3333/room";
const urlReservation = "http://localhost:3333/reservation";

async function indexAllReservations () {
    try {
        const response = await axios.get(urlReservation);
        const reservations = response.data;

        const reservationsTable = document.getElementById("reservationsTable");
        reservationsTable.innerHTML = "";

        if (reservations.length === 0) {
            alert("Nenhuma reserva encontrada!!");
            return;
        }

        reservations.forEach(reservation => {
            const row = document.createElement("tr");

            const reservationDate = convertDateFormat(reservation.reservation_date);
            
            const checkinDate = convertDateFormat(reservation.checkin_date);
            
            const checkoutDate = convertDateFormat(reservation.checkout_date);
            
            row.innerHTML = `
                <td>${reservation.clientId}</td>
                <td>${reservation.client_name}</td>
                <td>${reservation.client_telephone}</td>
                <td>${reservation.room_type}</td>
                <td>${reservationDate}</td>
                <td>${checkinDate}</td>
                <td>${checkoutDate}</td>
            `;

            reservationsTable.appendChild(row);
        });
    } catch (error) {
        alert("Algo de errado não está certo: ".concat(error));
    }
}

// Converte a data para um formato mais legível para o usuário...
function convertDateFormat(date) {

    if (date === null) {
        return "Pendente";
    }

    else {
        const options = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
        return new Date(date).toLocaleDateString("pt-BR", options);
    }
}

async function indexUsers() {
    try {
        const response = await axios.get(urlClients);
        const users = response.data; // Aqui pegamos os dados da resposta da API...

        const usersTable = document.getElementById("usersTable");
        usersTable.innerHTML = ""; // Limpa a tabela antes de adicionar novos dados...

        // Verifica se a lista de usuários não está vazia...
        if (users.length === 0) {
            usersTable.innerHTML = "<tr><td colspan='3'>Nenhum usuário encontrado</td></tr>";
            return;
        }

        // Itera sobre cada usuário e cria uma linha na tabela...
        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.address}</td>
                <td>${user.telephone}</td>
            `;
            usersTable.appendChild(row); // Adiciona a linha na tabela...
        });
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        const usersTable = document.getElementById("usersTable");
        usersTable.innerHTML = "<tr><td colspan='3'>Erro ao carregar usuários</td></tr>";
    }
}

async function indexAllRooms() {

    try {
        const response = await axios.get(urlRooms);
        const rooms = response.data;

        const roomsTable = document.getElementById("roomsTable");
        roomsTable.innerHTML = "";

        if (rooms.length === 0)
        {
            roomsTable.innerHTML = "<tr><td colspan='3'>Nenhum Quarto Encontrado</td></tr>";
            return;
        }

        rooms.forEach(room => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${room.roomType}</td>
                <td>${room.diariesPrice}</td>
            `;
            roomsTable.appendChild(row);
        });
    } catch (error) {
        console.error("Algo deu errado na requisição: ", error);
        const roomsTable = document.getElementById("roomsTable");
        roomsTable.innerHTML = "<tr><td colspan='3'>Erro ao carregar quartos</td></tr>";
    }
}
// Essa função lista os quartos para serem escolhidos para a reserva...
async function indexRoomsForCreateReservation() {
    try {
        const response = await axios.get(urlRooms);
        const rooms = response.data;
        const roomsDivs = document.getElementById("roomsDivs");
        roomsDivs.innerHTML = ""; // Limpa o que estiver antes da página carregar ou recarregar...

        // Verifica se os dados estão vázios se estiver mostra uma mensagem de que não há quartos...
        if (rooms.length === 0) {
            roomsDivs.innerHTML = "<div class='room'>Sem quartos para reserva</div>";
            return;
        }

        rooms.forEach(room => {
            const roomDiv = document.createElement("div");
            roomDiv.classList.add("room");
            roomDiv.textContent = room.roomType;
            roomDiv.setAttribute("data-room-id", room.id);

            const button = document.createElement("button");
            button.textContent = "Escolher";
            button.setAttribute("data-room-id", room.id);

            button.addEventListener("click", function() {
                const roomId = button.getAttribute("data-room-id");
                document.getElementById('room_id').value = roomId;

                const reservationDate = document.getElementById('date').value;
                const clientId = document.getElementById('clientId').value;

                if (reservationDate) {
                    createReservation(clientId, roomId, reservationDate);
                } else {
                    alert("Por favor, selecione uma data para a reserva.");
                }
            });

            roomDiv.appendChild(button);
            roomsDivs.appendChild(roomDiv);
        });
    } catch (error) {
        console.error("Erro ao carregar os quartos: ", error);
        roomsDivs.innerHTML = "<div class='room'>Nenhum quarto encontrado</div>";
    }
}

// Função para criar a reserva
async function createReservation(clientId, roomId, reservationDate) {
    // Try para tratamento de exceções...
    try {
        // Nesse trecho vemos os dados sendo inseridos no json...
        const reservationData = {
            reservation_date: reservationDate,
            roomId: roomId
        };

        // Aqui a requisição do verbo post que contém a url e os dados em formato json...
        const response = await axios.post(`${urlReservation}/${clientId}`, reservationData);

        alert("Requisição de reserva realizada com sucesso!");
    } catch (error) {
        console.error("Erro ao criar a reserva:", error);
        alert(`Algo de errado não deu certo: ${error.message}`);
    }
}

// Aqui basicamente são condicionais que verificam em que página o usuário está, lista as opções do banco de dados...
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("createReservation.html")) {
        indexRoomsForCreateReservation();
    } else if (window.location.pathname.includes("indexClients.html")) {

        indexUsers();

    } else if (window.location.pathname.includes("indexRooms.html")) {
        indexAllRooms();
    } else if(window.location.pathname.includes("indexAllReservations.html")) {
        indexAllReservations();
    } else {
        console.error("Verifique a URL. Página não encontrada.");
    }
});
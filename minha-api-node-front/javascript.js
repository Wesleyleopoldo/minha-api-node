
const rooms = document.querySelectorAll('.room');
const roomIdInput = document.getElementById('room_id');

rooms.forEach(room => {
    room.addEventListener('click', function() {
        rooms.forEach(r => r.classList.remove('selected'));
        room.classList.add('selected');
        roomIdInput.value = room.getAttribute('data-id');
    });
});

// Modificar o envio para usar fetch em vez de enviar o formulário diretamente
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    if (!roomIdInput.value) {
        alert('Por favor, selecione um quarto.');
        return;
    }

    const date = document.getElementById('date').value;
    const roomId = roomIdInput.value;

    // Envia a requisição para o backend usando fetch
    fetch('http://localhost:3333/reservation/:id', {  // Certifique-se de que o endereço corresponde ao backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date, roomId })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erro ao fazer a reserva');
        }
    })
    .then(data => {
        alert(data.message || 'Reserva efetuada com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Falha ao fazer a reserva.');
    });
});
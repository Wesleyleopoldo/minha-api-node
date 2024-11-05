{ <body>
    <div class="table-container">
        <h2>Usuários Cadastrados</h2>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody id="tabelaUsuarios">
            </tbody>
        </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        Função para carregar usuários
        async function carregarUsuarios() {
            try {
                Faz a requisição GET para listar os usuários
                const response = await axios.get('http://localhost:8080/api/usuarios'); // Substitua pelo URL da sua API
                
                Seleciona o corpo da tabela onde os usuários serão exibidos
                const tabelaUsuarios = document.getElementById("tabelaUsuarios");
                tabelaUsuarios.innerHTML = ''; // Limpa a tabela antes de adicionar novos itens

                Itera sobre os usuários retornados e adiciona à tabela
                response.data.forEach(usuario => {
                    const row = document.createElement("tr");
                    
                    const nomeCell = document.createElement("td");
                    nomeCell.textContent = usuario.nome; // Ajuste conforme o campo do seu usuário
                    row.appendChild(nomeCell);

                    const enderecoCell = document.createElement("td");
                    enderecoCell.textContent = usuario.endereco; // Ajuste conforme o campo do seu usuário
                    row.appendChild(enderecoCell);

                    const telefoneCell = document.createElement("td");
                    telefoneCell.textContent = usuario.telefone; // Ajuste conforme o campo do seu usuário
                    row.appendChild(telefoneCell);

                    Adiciona a linha à tabela
                    tabelaUsuarios.appendChild(row);
                });
            } catch (error) {
                console.error("Erro ao carregar usuários:", error);
            }
        }

        Chama a função para carregar os usuários assim que a página é carregada
        window.onload = carregarUsuarios;
    </script>
</body>

document.addEventListener("DOMContentLoaded", function() {
    Verifica se está na página desejada
    if (window.location.pathname === "/sua-pagina") {
        metodo1(); // Chama o método para essa página
    } else if (window.location.pathname === "/outra-pagina") {
        metodo2(); // Chama outro método para uma página diferente
    }
    Adicione outras verificações conforme necessário
});

function metodo1() {
    Código para a primeira página
}

function metodo2() {
    Código para a segunda página
} }
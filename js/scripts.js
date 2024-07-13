document.addEventListener('DOMContentLoaded', function() {

    // referência a busca pelo ID 'container-de-busca'
    const searchForm = document.getElementById('container-de-busca');

    //referência ao campo de entrada de texto pelo ID 'searchInput'
    const searchInput = document.getElementById('searchInput');

    // coloca um ouvinte de evento pro  evento de envio (submit) do formulário de busca
    searchForm.addEventListener('submit', function(event) {

        // olha o comportamento padrão do formulário de ser enviado
        event.preventDefault();

        // isso aqui vai.. tipo pegar o valor do campo de entrada de texto e remove espaços em branco do início e fim
        const searchTerm = searchInput.value.trim();

        // Verifica se o termo de busca não está vazio
        if (searchTerm !== '') {
            // exibe um alerta com o termo de busca se n tiver nada
            alert(`Você buscou por: ${searchTerm}`);
            // tipo adicionar codigo... n entendi java irmão
        } else {
            // Se estiver vazio, exibe um alerta pedindo para digitar algo
            alert('Por favor, digite algo para buscar.');
        }
    });
});

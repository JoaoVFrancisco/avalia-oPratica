document.addEventListener('DOMContentLoaded', function () {
    // Obtém o parâmetro 'evento_id' da URL
    const urlParams = new URLSearchParams(window.location.search);
    const eventoId = urlParams.get('evento_id');
    document.getElementById('evento_id').value = eventoId;

    // Manipula o envio do formulário de novo participante
    document.getElementById('form-participante').addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const eventoId = document.getElementById('evento_id').value;

        // Valida se os campos estão preenchidos
        if (nome === '' || email === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Simula a adição de um novo participante (aqui estamos apenas inserindo na lista)
        const lista = document.getElementById('lista-participantes');
        const novoParticipante = document.createElement('li');
        novoParticipante.textContent = `${nome} - ${email}`;
        lista.appendChild(novoParticipante);

        // Limpa os campos do formulário
        document.getElementById('form-participante').reset();
    });
});

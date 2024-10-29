document.addEventListener('DOMContentLoaded', function () {
    // Manipula o envio do formulário de novo participante
    document.getElementById('form-participante').addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();

        // Valida se os campos estão preenchidos
        if (nome === '' || email === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Verifica se o participante já está na lista
        const lista = document.getElementById('lista-participantes');
        const participantes = Array.from(lista.getElementsByTagName('li'));

        const existeParticipante = participantes.some(participante => {
            const [participanteNome, participanteEmail] = participante.textContent.split(' - ');
            return participanteNome.trim() === nome && participanteEmail.trim() === email;
        });

        if (existeParticipante) {
            alert('Esse participante já está na lista.');
            return;
        }

        // Cria um novo participante e adiciona à lista
        const novoParticipante = document.createElement('li');
        novoParticipante.textContent = `${nome} - ${email}`;
        lista.appendChild(novoParticipante); // Adiciona o novo participante à lista

        // Limpa os campos do formulário
        document.getElementById('form-participante').reset();
    });
});

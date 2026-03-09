document.getElementById('cadastro-form').addEventListener('submit', function(event) {

    event.preventDefault(); // Impede o envio do formulário para processar os dados

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let confirmeEmail = document.getElementById('confirme-email').value;
    let senha = document.getElementById('senha').value;
    let confirmeSenha = document.getElementById('confirme-senha').value;
    
    if (email !== confirmeEmail) {  
        alert('Os emails não coincidem. Por favor, confirme seu email.');
        return;
    }
    if (senha !== confirmeSenha) {
        alert('As senhas não coincidem. Por favor, confirme sua senha.');
        return;
    }

    alert('Cadastro realizado com sucesso!');

    document.getElementById('cadastro-form').reset();
});
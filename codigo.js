function gerenciadorDeAcesso() {
    var nome = String(prompt('Cadastre seu nome: '));
    var senha = String(prompt('Agora cadastre a sua senha: '));
    var nomeCorreto = String(prompt('Digite o nome cadastrado para autorizar o acesso: '));
    var senhaCorreta = String(prompt('Digite a senha: '));
    if (nomeCorreto === nome && senhaCorreta === senha) {
        alert("Acesso autorizado");
    }
    else {
        alert("Acesso negado");
    }
}
gerenciadorDeAcesso();

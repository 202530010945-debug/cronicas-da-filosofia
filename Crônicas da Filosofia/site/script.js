console.log("Crônicas da Filosofia iniciado!");

// BOTÃO: CONTINUAR AVENTURA
const continuar = document.getElementById("continuar");

continuar.addEventListener("click", function() {
    const personagem = localStorage.getItem("personagemEscolhido");
    const nome = localStorage.getItem("nomeJogador");

    if (personagem && nome) {
        // Se já existe personagem salvo, continua a aventura
        window.location.href = "mapa.html";
    } else {
        // Se ainda não existe personagem, começa pela personalização
        window.location.href = "personagem.html";
    }
});

// BOTÃO: ESCOLHER CAPÍTULO
const capitulos = document.getElementById("capitulos");

capitulos.addEventListener("click", function() {
    window.location.href = "mapa.html";
});

// BOTÃO: NOVO JOGO
const novoJogo = document.getElementById("novo-jogo");

novoJogo.addEventListener("click", function() {
    const confirmar = confirm(
        "Deseja começar uma nova aventura? Seu progresso anterior será mantido."
    );

    if (confirmar) {
        window.location.href = "personagem.html";
    }
});
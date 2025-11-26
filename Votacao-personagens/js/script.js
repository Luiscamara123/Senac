const form = document.querySelector('#formulario');
const erro = document.querySelector('.erro');
const personagens = document.querySelector('#personagens');
const ranking = document.querySelector('#lista-ranking');
const botao = document.querySelector('#votar');

const votos = {
    "Eleven": 0,
    "Mike": 0,
    "Dustin": 0,
    "Lucas": 0,
    "Max": 0,
    "Will": 0,
    "Vecna": 0,
    "Eddie": 0,
    "Steve": 0,
    "Nancy": 0,
    "Jonathan": 0,
    "Hopper": 0,
    "Joyce": 0,
    "Demogorgon": 0,
    "Robin": 0,
    "Argyle": 0
}

function votar(e) {
    e.preventDefault();

    erro.innerText = ``;
    const votado = personagens.value;

        if (votado === `Selecione`) {
            erro.innerText = 'Escolha um personagem valido!';
            return;
        }

        votos[votado]++;

        atualizarRanking();
}

function atualizarRanking() {
    ranking.innerHTML = "";

    const rankingOrdenado = Object.entries(votos).sort((a, b) =>  b[1] - a[1]);
    const maiorVoto = rankingOrdenado[0][1];

    rankingOrdenado.forEach(personagem => {
    const li = document.createElement(`li`);
    li.textContent = `${personagem[0]} - ${personagem[1]} votos`;

    if (personagem[1] === maiorVoto && maiorVoto !== 0) {
        li.classList.add(`lider`);
    }

    ranking.appendChild(li);
    });
};
botao.addEventListener("click", votar);


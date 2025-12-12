/*JavaScript
    No arquivo script.js, vocês devem:
        1. Capturar os elementos do HTML usando document.querySelector
        2. Criar um objeto com o nome de cada "personagem" e o valor 0 representando os votos iniciais
        3. Criar uma função votar():
            Validar se o usuário realmente selecionou um "personagem"
            Caso não selecione, exibir mensagem de erro na div erro e interromper a função
            Se estiver tudo correto:
                Somar +1 voto ao "personagem" escolhido
                Atualizar automaticamente a lista do ranking na tela
            Exibir o ranking sempre do maior número de votos para o menor
            O "personagem" com maior número de votos deve receber a classe de destaque ("lider")

        4. Atualizar a lista visualmente toda vez que um voto for realizado
        5. Adicionar evento de clique ao botão "Votar" com addEventListener

5) Regras adicionais
    Não é permitido votar sem selecionar um "personagem"
    A div de erro deve ser limpa quando o usuário fizer uma seleção válida
    O ranking deve reorganizar automaticamente sempre que o voto for realizado
    Não pode usar style inline ou style dentro do HTML, apenas CSS e JS externos
    A classe de destaque do líder deve aparecer apenas no "personagem" com o maior número de votos*/

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


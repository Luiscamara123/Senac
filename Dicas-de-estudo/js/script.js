const lista = [
    "Defina metas claras: Estabeleça objetivos específicos para cada sessão de estudo.",
    "Monte um cronograma: Planeje horários fixos para estudar e incluir pausas.",
    "Priorize matérias difíceis: Estude primeiro o que exige mais esforço ou o que você tem mais dificuldade.",
    "Divida o conteúdo: Quebre grandes temas em partes menores e mais fáceis de revisar.",
    "Use checklists: Marque o que já foi estudado para manter o controle e a motivação.",
    "Método Pomodoro: Estude por 25 minutos e descanse 5; após 4 ciclos, faça uma pausa maior.",
    "Ensine o conteúdo: Explicar para alguém (ou para si mesmo) ajuda a fixar o aprendizado.",
    "Mapas mentais e resumos: Organize visualmente as ideias principais.",
    "Use fichas de revisão (flashcards): Reforce a memória ativa e pratique recordação.",
    "Tenha sempre água e lanches leves por perto: Mantém o foco e a energia.",
    "Questões e simulados: Teste seus conhecimentos com exercícios e provas antigas.",
];
const botao = document.querySelector('button');
const frase = document.querySelector('#frase');

function mostraFrase(){
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    frase.innerText = lista[indiceAleatorio];
};
botao.addEventListener('click', mostraFrase);
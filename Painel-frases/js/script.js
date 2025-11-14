const lista = [
    "Acredite em si mesmo e todo o resto virá naturalmente.",
    "Você é mais forte do que imagina e capaz de mais do que pensa.",
    "O sucesso nasce da vontade de fazer o que os outros têm medo de tentar.",
    "Grandes jornadas começam com um simples passo.",
    "Não espere por oportunidades, crie-as.",
    "Fracassar não é o fim, é apenas o caminho para o aprendizado.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    "Você não precisa ser perfeito, só precisa começar.",
    "Quanto maior o desafio, maior a conquista.",
    "Todos os dias são novas chances para mudar a sua história."
];
const botao = document.querySelector('button');
const frase = document.querySelector('#frase');

function mostraFrase(){
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    frase.innerText = lista[indiceAleatorio];
};
botao.addEventListener('click', mostraFrase);
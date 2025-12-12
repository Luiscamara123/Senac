// ENUNCIADO:
    // Vamos criar um gerenciador de tarefas.
    // 1. No index.html - Crie um formulário na página com:
    //  - Campo de texto para título
    //  - Campo de texto para descrição
    //  - Select para prioridade: option para Alta, Média ou Baixa
    //  - Botão "Adicionar"
    // 2. Cada vez que o usuário cadastrar uma tarefa:
    //  - Crie um objeto { titulo, descricao, prioridade }
    //  - Adicione esse objeto dentro de um array de tarefas
    // 3. Mostre todas as tarefas cadastradas listadas na tela
    // 4. Aplique cores diferentes conforme a prioridade:
    // IF ELSE
    //  - Alta → vermelho
    //  - Média → amarelo
    //  - Baixa → verde
    // 5. As tarefas devem aparecer listadas com título, descrição e prioridade.
    //
    // EXEMPLO:
    // Entrada: titulo = "Estudar", descricao = "Fazer exercícios de JS", prioridade = Alta
    // Saída: Card na tela com:
    //        Estudar
    //        Fazer exercícios de JS
    //        Prioridade: Alta (em vermelho)

const tarefas = [];
const form = document.querySelector(`#form-tarefa`);
const lista = document.querySelector(`#lista`);
form.addEventListener(`submit`, function(e){
    e.preventDefault();
    const titulo = document.querySelector(`#titulo`).value;
    const descricao = document.querySelector(`#descricao`).value;
    const prioridade = document.querySelector(`#prioridade`).value;
    const tarefa = { titulo, descricao, prioridade };
    tarefas.push(tarefa);
    mostrarTarefas();
    form.reset();
});
function mostrarTarefas(){
    lista.innerHTML = '';
    for(let indice = 0; indice < tarefas.length; indice++){
        const tarefa = tarefas[indice];
        const card = document.createElement('div');
        card.classList.add('card');
        if(tarefa.prioridade === 'Alta'){
            card.classList.add('alta');
        } else if(tarefa.prioridade === 'Média'){
            card.classList.add('media');
        } else if(tarefa.prioridade === 'Baixa'){
            card.classList.add('baixa');
        }
        card.innerHTML = `
            <div>
                <h3>Título:
                    ${tarefa.titulo}
                </h3>
                <hr>
                <p>Descrição:<br>
                    ${tarefa.descricao}
                </p>
            </div>
            <p>Prioridade:<span>${tarefa.prioridade}</span></p>`;
        lista.appendChild(card);
    }
}
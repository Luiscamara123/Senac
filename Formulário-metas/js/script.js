const form = document.querySelector('#formulario');
const campoTitulo = form.querySelector('#titulo');
const campoDescricao = form.querySelector('#descricao');
const campoPrioridade = form.querySelector('#prioridade');
const campoData = form.querySelector('#data');
const btnAdicionar = form.querySelector('#btn-adicionar');
const erro = document.querySelector('#erro');
const listaMetas = document.querySelector('#lista-metas');

function adicionarMeta(e){
    e.preventDefault();
    erro.innerText = "";

    const titulo = campoTitulo.value.trim();
    const descricao = campoDescricao.value.trim();
    const prioridade = campoPrioridade.value;
    const data = campoData.value;
    const hoje = new Date().toISOString().split('T')[0];

    if(!titulo || !descricao || !prioridade || !data || data < hoje){
        erro.innerText = 'Preencha todos os campos corretamente.';
        return;
    }

    const li = document.createElement('li');
    li.classList.add(prioridade);
    li.innerHTML = `
                <div class="item-lista">
                    <h3>${titulo}</h3>
                    <p>${descricao}</p>
                    <p><b>Prioridade: </b>${prioridade}</p>
                    <p><b>Data: </b>${data}</p>
                </div>
    `;

    const btnConcluir = document.createElement('buton');
    btnConcluir.innerText = '✔';
    btnConcluir.classList.add('btn', 'btn-concluir');
    btnConcluir.addEventListener('click', function(){
        if(li.classList.contains('concluida')){
            li.classList.remove('concluida');
            btnConcluir.innerText = '✔';
        }else{
            li.classList.add('concluida');
            btnConcluir.innerText = '⏎';
        }
    });
    const btnRemover = document.createElement('buton');
    btnRemover.innerText = '✖';
    btnRemover.classList.add('btn', 'btn-remover');
    btnRemover.addEventListener('click', function(){
        li.remove();
    });
    li.appendChild(btnConcluir);
    li.appendChild(btnRemover);

    listaMetas.appendChild(li);

    form.reset();
}

btnAdicionar.addEventListener('click', adicionarMeta);
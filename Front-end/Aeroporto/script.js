const aeroporto = [];
const form = document.querySelector(`#form-viagem`);
const lista = document.querySelector(`#lista`);
form.addEventListener(`submit`, function(e){
    e.preventDefault();
    const nome = document.querySelector(`#nome`).value;
    const data = document.querySelector(`#data`).value;
    const destino = document.querySelector(`#destino`).value;
    const passaporte = { nome, data, destino };
    aeroporto.push(passaporte);
    mostrarPassaporte();
    form.reset();
});
function mostrarPassaporte(){
    lista.innerHTML = ``;
    const hoje = new Date().toISOString().split('T')[0];
    for(let indice = 0; indice < aeroporto.length; indice++){
        const passaporte = aeroporto[indice];
        let status = '';
        let classStatus = '';
        if(passaporte.data === hoje){
            status = 'A viagem é hoje'; 
            classStatus = 'today';
        }
        else if(passaporte.data < hoje){
            status = 'Data inválida';
            classStatus = 'invalid';
        }
        else if(passaporte.data > hoje){
            status = 'Data confirmada';
            classStatus = 'confirmed';
        }
        const formataData = passaporte.data.split('-').reverse().join('/');
        lista.innerHTML += `
            <div class="card ${classStatus}">
                <h3><b>${passaporte.nome}</b></h3>
                <p>${formataData}</p>
                <p>Destino: <span>${passaporte.destino}</span></p>
                <p>${status}</p>
            </div>
        `;
    }
}
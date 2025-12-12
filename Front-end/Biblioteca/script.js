const biblioteca = [];
const form = document.querySelector(`#form-livros`);
const lista = document.querySelector(`#lista`);
form.addEventListener(`submit`, function(e){
    e.preventDefault();
    const titulo = document.querySelector(`#livro`).value;
    const autor = document.querySelector(`#autor`).value;
    const ano = document.querySelector(`#ano`).value;
    const livro = { titulo, autor, ano };
    biblioteca.push(livro);
    mostrarBiblioteca();
    form.reset();
});
function mostrarBiblioteca(){
    lista.innerHTML = ``;
    for(let indice = 0; indice < biblioteca.length; indice++){
        const livro = biblioteca[indice];
        const cor = livro.ano < 2000 ? `rgb(95, 7, 4)` : `rgb(202, 142, 15)`;
        lista.innerHTML += `<div id="card" style="background-color: ${cor}">
        <h3><b>${livro.titulo}</b></h3>
        <p>${livro.autor}</p>
        <p>Ano de lançamento: <span style="color:${cor}">${livro.ano}</span></p>
        </div>`; 
    }
};
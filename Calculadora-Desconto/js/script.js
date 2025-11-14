document.querySelector("#calcular").addEventListener("click", calcularValorFinal);

function calcularValorFinal () {
    const valor = parseFloat(document.querySelector("#valor").value);
    const forma = document.querySelector("#formaPagamento").value;
    const resultadoDiv = document.querySelector("#resultado");

    if (isNaN(valor) || valor <=0) {
        resultadoDiv.innerHTML = "Por favor, insira um valor válido!";
        resultadoDiv.className = "vermelho";
        return;
    }

    let valorFinal = valor;
    let classe = "";

    if (forma === "avista") {
        valorFinal *= 0.9;
        classe = "verde";
    } else if (forma === "cartao") {
        valorFinal *= 1.05;
        classe = "vermelho";
    } else if (forma === "2x") {
        valorFinal = valor;
        classe = "laranja";
    } else if (forma === "3xoumais") {
        valorFinal *= 1.10;
        classe = "vermelho";
    }

    resultadoDiv.innerHTML = `Valor final: R$ ${valorFinal.toFixed(2)}`;
    resultadoDiv.className = classe;
}
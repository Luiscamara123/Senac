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

    let mensagem = "";


    if (forma === "avista") {
        valorFinal *= 0.9;
        classe = "verde";
        mensagem = "À Vista";
    } else if (forma === "cartao") {
        valorFinal *= 1.05;
        classe = "vermelho";
        mensagem = "Cartão";
    } else if (forma === "2x") {
        valorFinal = valor;
        classe = "laranja";
        mensagem = "Parcelado em 2x";
    } else if (forma === "3xoumais") {
        valorFinal *= 1.10;
        classe = "vermelho";
        mensagem = "Parcelado em 3x ou mais";
    }

    resultadoDiv.innerHTML = `Valor final: R$ ${valorFinal.toFixed(2)} ${mensagem}`;
    resultadoDiv.className = classe;
}
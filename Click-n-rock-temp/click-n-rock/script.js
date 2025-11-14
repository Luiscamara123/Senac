const botaoModoEscuro = document.getElementById("modoEscuro");
const logoClaro = document.getElementById("logoClaro");
const logoEscuro = document.getElementById("logoEscuro");

if (botaoModoEscuro) {
    botaoModoEscuro.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            botaoModoEscuro.textContent = ' ☀️';

            if (logoClaro && logoEscuro) {
                logoClaro.style.display = "none";
                logoEscuro.style.display = "inline";
            }
        } else {
            botaoModoEscuro.textContent = "🌙";

            if (logoClaro && logoEscuro) {
                logoClaro.style.display = "inline";
                logoEscuro.style.display = "none";
            }
        }
    });
}
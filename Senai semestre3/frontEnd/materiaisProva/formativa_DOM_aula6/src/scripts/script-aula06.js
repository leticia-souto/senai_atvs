const inputcurtir = document.querySelector("#btn-curtir");
const contadorCurtidas = document.querySelector("#contador");

let curtidas = 0

inputcurtir.addEventListener("click", () => {
    curtidas = curtidas + 1;
    contadorCurtidas.textContent = curtidas;
})

const input = document.querySelector("#campo-texto");
const preview = document.querySelector("#preview-texto");


input.addEventListener("input", () => {
    preview.textContent = "Digitando: " + input.value;
});


const caixa = document.querySelector("#caixa-cor");

if (caixa) {

    caixa.addEventListener("mouseenter", () => {
        caixa.style.backgroundColor = "blue";
    });

    caixa.addEventListener("mouseleave", () => {
        caixa.style.backgroundColor = "";
    });
}
/*
Missão 1: Recepção do Atleta (Date e Condicionais)
Utilize new Date().getHours(). Capture o parágrafo #saudacao-atleta.
Regra: Se for antes das 12h, o texto deve ser "Treino matinal liberado!". 
Entre 12h e 18h, "Boa tarde, foco no treino!". 
Após as 18h, "Descanso noturno merecido!".
*/
const saudacao = document.querySelector("#saudacao-atleta");
const hora = new Date().getHours();

if(saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Treino matinal Liberado!"
            : hora > 12 && hora < 18
                ? "Boa Tarde, foco no treino!"
                : "Descanso nourno merecido.";
}


/*
Missão 2: Banner Motivacional (Eventos de Mouse)
Capture a seção #banner-foco.
Adicione o evento mouseover para injetar a classe .foco-total.
Adicione o evento mouseout para retirar a classe .foco-total.
*/

const foco = document.querySelector("#banner-foco")



if(foco){
    foco.addEventListener("mouseouver", () => {
        foco.classList.add(foco-total)
    })

}



/*
Missão 3: Calculadora de Hidratação (Input com Tratamento)
Capture o #peso-aluno. Adicione o evento input.
Multiplique o .value por 35 e exiba no #meta-agua.
Regra Extra: O número inserido pelo usuário costuma vir como "texto". 
Garanta o uso do comando Number() na conversão para que o cálculo 
matemático não corra risco de falhar.
*/

const inputPeso = document.querySelector("#peso-aluno");
const metaAgua = document.querySelector("#meta-agua")

if(inputPeso && metaAgua){
    inputPeso.addEventListener("input", () => {
        const metaTotal = Number(inputPeso.value) * 35;
        metaAgua.textContent = metaTotal;
        
    });
}


/*
Missão 4: O Diário de Refeições (Click com Emojis)
Capture o #btn-registrar, o #nome-refeicao e a div #lista-refeicoes.
No clique do botão, adicione o card usando innerHTML +=.
Regra de Exibição: Você deve concatenar a palavra "Prato:" antes do que o usuário digitou. 
Exemplo da tag: <article class="card-refeicao"><h3>🥗 Prato: [NOME DA REFEIÇÃO]</h3></article>.
*/

const btnRegistrar = document.querySelector("#btn-registrar");
const nomeRefeicao = document.querySelector("#nome-refeicao");
const listaRefeicoes = document.querySelector("#lista-refeicoes");

if(btnRegistrar) {
    btnRegistrar.addEventListener("click", () =>{
        btnRegistrar.classList.add(btn-primario)
        classList.innerHTML()
    })
}

/*
Missão 5: Dia de Jejum (Limpeza com Aviso Visual)
Capture o botão #btn-zerar. Adicione o evento de clique.
Esvazie a div #lista-refeicoes.
Regra Extra: Imediatamente APÓS esvaziar a lista, 
dispare um window.alert("Diário reiniciado com sucesso para amanhã!") na tela do usuário.
*/

const btnZerar = document.querySelector("#btn-zerar");

if(btnZerar) {
    btnZerar.addEventListener("click", () =>{
        listaRefeicoes = 0
        window.alert("Diário reiniciado com sucesso para amanhã!") 
    })
}
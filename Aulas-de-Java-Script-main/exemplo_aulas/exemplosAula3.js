// console.log(`O resultado da soma é ${soma(5,5)}`)
// function soma(a,b) {
// 	return a+b
// } 

// let soma = function(a,b){ // função sem nome
// 	return a+b

// }
// console.log(`O resultado da soma é ${soma(3,4)}`)

// let soma = (a,b) => {return a+b}
// console.log(`O resultado da soma é: ${soma(7,8)}`)


// (function(){
// 	return console.log(`Helo world`)
// 	})()

// function executarCallback(callback){
// 	callback()
// }
// executarCallback(() => {console.log(`Callback Executado`)})


// function executarOperacao(a,b, callback) {
// 	return callback(a,b);
// }

// function soma (x,y){
// 	return x+y;
// }
// function multiplica(x,y){
// 	return x*y;
// }

// console.log(executarOperacao(2,3,soma));
// console.log(executarOperacao(2,3,multiplica));

// function fatorial(n) {
// 	if (n=== 0 || n === 1) {
// 		return 1;
// 	} else {
// 		return n* fatorial(n-1);
// 	}
// }
// console.log(fatorial(5));

async function buscarDados(){
	console.log("Iniciando a busca...");
	
	const resposta = await fetch("https://viacep.com.br/ws/13321370/json/");
	const dados = await resposta.json();
	
	console.log("Dados recebidos:", dados);
}

buscarDados()
console.log("Essa mensagem aparece antes da resposta da API");
	
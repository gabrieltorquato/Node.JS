// 1. Função de saudação
function saudacao() {
    console.log("Olá! Seja bem-vindo(a)");
}
saudacao()

//2. Função com parâmetros
function apresentarPessoa(nome, idade) {
    console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
}
apresentarPessoa("Ana", 30);

//3. Cálculo de IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    console.log("Seu IMC é: " + imc.toFixed(2));
}
calcularIMC(70, 1.75);

//4. Verificar aprovação
function verificarAprovacao(nota) {
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

verificarAprovacao(6);

//5. Número par ou ímpar
function ehPar(numero) {
    return numero % 2 === 0;
}
console.log("O número é par? " + ehPar(4));

//6. Função soma
function somar(a, b) {
    return a + b;
}
console.log("Soma: ", somar(5, 10));

//7. Calculadora de troco
function calcularTroco(compra, pagamento){
    let troco = pagamento - compra
    console.log("Troco: R$" + troco.toFixed(2));
}
calcularTroco(35.9, 50);

//8. Arrow function
const somarArrow = (a,b) => a + b;
console.log("Soma (arrow): " + somarArrow(3, 7));

//9. Callback simples
function executarAcao(acao) {
    acao();
}
executarAcao(function() {
    console.log("Executando ação!");
});

//10. Desafio do quiz
function fazerPergunta(pergunta, respostaCorreta) {
    let respostaUsuario = respostaCorreta; // simulação da resposta
    if (respostaUsuario === respostaCorreta) {
        console.log("Resposta correta!");
    } else {
        console.log("Reposta errada!");
    }
}
fazerPergunta("Qual é a capital do Brasil?", "Brasília");
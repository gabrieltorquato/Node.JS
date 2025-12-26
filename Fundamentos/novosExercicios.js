// 1. Verificação de maioridade
// Crie uma variável idade e verifique se a
// pessoa é maior de idade (18 anos ou mais).
// Mostre no console uma mensagem adequada.

let idade = 19;

if (idade >= 18) {
    console.log("Você é maior de idade.");

} else {
    console.log("Você é menor de idade.");
}

// 2. Situação do aluno
// Crie duas variáveis com notas de um aluno. 
// Calcule a média. S
// e for maior ou igual a 7, mostre "Aprovado". 
// Caso contrário, mostre "Reprovado".

let nota1 = 6
let nota2 = 8
let media = (nota1 + nota2) / 2

if (media >= 7) {
    console.log("Aprovado.");
} else {
    console.log("Reprovado.");
}

// 3. Simulação de troco
// Crie uma variável valorCompra com 35.90 
// e valorPago com 50. Calcule e mostre o troco a ser devolvido.

let valorCompra = 35.9
let valorPago = 50

console.log('Valor da compra: R$', valorCompra)
console.log('Valor recebido: R$', valorPago)

let troco = valorPago - valorCompra

console.log('Troco a devolver: R$', troco.toFixed(2))

// 4. Validação de senha
// Crie duas variáveis com senhas digitadas
// em momentos diferentes. 
// Verifique se são iguais usando operadores de comparação.

senha1 = '123456'
senha2 = 'abcde'

if (senha1 === senha2) {
    console.log('As senhas são iguais.')
} else {
    console.log('As senhas são diferentes.')
}

// 5. Controle de faltas
// Considere totalAulas = 80 e faltas = 25. 
// Calcule se as faltas ultrapassam 25% das aulas. 
// Mostre a conclusão no console.

let totalAulas = 80
let faltas = 25
let porcentagem = faltas / totalAulas

if (porcentagem >= 0.25) {
    console.log('As faltas ultrapassam 25% das aulas.')
} else {
    console.log('As faltas não ultrapassam 25% das aulas.')
}

//6. Verificação de login
// Crie duas variáveis temLogin e temSenha.
// Use operadores lógicos para verificar se 
// o usuário pode acessar o sistema.

let temLogin = true;
let temSenha = true;

if (temLogin && temSenha) {
    console.log('Acesso permitido.')
} else {
    console.log('Acesso negado. Dados incompletos.')
}

// 7. Valor negado
// Crie uma variável booleana chamada disponível. 
// Mostre seu valor negado no console, ou seja, 
// se estiver disponível, exiba que não está, e vice-versa.

let disponivel = true;
console.log('Disponibilidade invertida: ' + !disponivel);

// 8. Condições compostas
// Crie duas variáveis com números. 
// Verifique se os dois são pares e se são iguais. 
// Exiba a conclusão.

let numero1 = 4;
let numero2 = 4;

if (numero1 % 2 === 0 && numero2 % 2 === 0 && numero1 === numero2) {
    console.log('Os números são pares e iguais.');
} else {
    console.log('Os números não atendem todas as condições.')
}

// 9. Calculadora de porcentagem
// Calcule quanto é 15% de 120 usando operadores matemáticos. 
// Mostre a frase: "15% de 120 é igual a X."

porcent = 120 * 0.15

console.log('15% de 120 é igual a: ' + porcent)

// 10. Ordem de operações
// Escreva a expressão 2 + 3 * 5. 
// Mostre o resultado e explique por que 
// a multiplicação foi feita antes da soma.

let resultado = 2 + 3 * 5;

console.log('Resultado da expressão 2 + 3 * 5: ' + resultado);

// A multiplicação é feita primeiro por causa da ordem de precedência dos operadores.
// Ou seja, 3 * 5 = 15, depois 2 + 15 = 17
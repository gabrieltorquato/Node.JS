// 1. Contador de 1 a 10
// Use um for para mostrar no console os números de 1 até 10, um por linha.

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// 2. Soma de 1 a 100
// Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.

let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log("Soma de 1 a 100: " + soma);

// 3. Tabuada personalizada
// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.

let numeroTabuada = 7;

for (let i = 1; i <= 10; i++) {
    console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i));
}

// 4. Contagem regressiva
// Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".

let contagem = 10;

while (contagem >= 0) {
    console.log(contagem);
    contagem--;
}

// 5. Receber números até digitar 0
// Use do...while para simular a entrada de números. 
// O programa deve continuar até que o usuário digite 0. 
// Ao final, mostre quantos números foram digitados.

let entradas = [5, 10, 3, 0];

let contador = 0;

let index = 0;

do {
    if(entradas[index] !== 0){
        contador++;
    }
    index++;
} while (entradas[index -1] !== 0);
console.log("Total de números digitados: "+ contador);

// 6. Jogo do número secreto
// Defina uma variável numeroSecreto com o valor 7. 
// O usuário tem 3 tentativas para acertar (simule essas tentativas com variáveis). 
// Mostre mensagens de "Acertou!" ou "Tente novamente".

let numeroSecreto = 7;
let tentativas = [3, 5, 7];
for (let i = 0; i < 3; i++){
    if (tentativas[i] === numeroSecreto) {
        console.log("Acertou!");
        break;
    } else {
        console.log("Tente novamente.");
    }
}

// 7. Idade ao longo dos anos
// Crie uma variável anoNascimento e anoAtual. 
// Use um for para listar a idade da pessoa ano a ano até o ano atual.

let anoNascimento = 2000;
let anoAtual = 2025;
for (let ano = anoNascimento; ano <= anoAtual; ano++){
    console.log("Em " + ano + " você tinha " + (ano - anoNascimento) + " anos.");
}

// 8. Listando números pares
// Mostre todos os números pares entre 1 e 50 usando for.

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}

// 9. Contar múltiplos de 3 entre 1 e 100
// Mostre no console quantos números entre 1 e 100 são divisíveis por 3.

let multiplosde3 = 0;
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0){
        multiplosde3++;
    }
}

console.log("Números entre 1 e 100 divisíveis por 3: " + multiplosde3);

// 10. Menu com repetição
// Crie um menu simples que exibe opções como "1 - Ver saldo", "2 - Fazer depósito", "3 - Sair". 
// Use do...while para repetir o menu até o usuário escolher sair.

let opcoes = [1, 2, 3];
let indice = 0;
let opcao;
do {
    opcao = opcoes[indice];
    if (opcao === 1) {
        console.log("Ver saldo");
    } else if (opcao === 2) {
        console.log("Fazer depósito");
    } else if (opcao === 3) {
        console.log("Sair");
    }
    indice++;
} while (opcao !== 3);
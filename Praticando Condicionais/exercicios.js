// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;
const operacao = 'multiplicação';

if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicação'){
    console.log(num1 * num2);
} else {
    console.log('operação não identificada');
}

// localizar o nível de bônus de acordo com a faixa salarial
// ex: $11000 e acima: 3% de bônus
//     $10999 a $7000: 5% de bônus
//     $ 6999 a $4000: 7% de bônus
//     $ 3999 p baixo: 9% de bônus

const salario = 5000;

if (salario >= 11000) {
    console.log('3% de bônus')
} else if (salario < 11000 && salario >= 7000) {
    console.log('5% de bônus')
} else if (salario < 7000 && salario >= 4000) {
    console.log('7% de bônus')
} else {
    console.log('9% de bônus');
}

// verificar se um ano é bissexto
// um ano é bissexto quando:
// deve ser divisível por 4 mas não divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 1995;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
}
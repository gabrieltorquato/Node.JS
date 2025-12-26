//function saudacao(nome) { // nome é um parametro da função saudação
// console.log('Olá,', nome)
//}

//const saudacao = (nome) => {
//    console.log('Vida longa e prospera,',nome)
//}

const saudacao = nome => console.log('Olá,', nome)

saudacao('Gabriel') // Gabriel é o argumento
saudacao('Jéssica')
saudacao('Nathalia')

//function calcularDobroDeUm(numero) {
//    return numero * 2
//}

//const calcularDobroDeUm = (numero) => {
//    return numero * 2
//}

const calcularDobroDeUm = numero => numero * 2

const numeroDobrado = calcularDobroDeUm(4)
console.log('O dobro de 4 é:', numeroDobrado)
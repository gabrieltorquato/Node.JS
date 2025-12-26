const idade = 18
const maiordeIdade = idade >= 18
const possuiCNH = false
const podeDirigir = maiordeIdade && possuiCNH // AND

console.log('Pode dirigir? ', podeDirigir)

const podeViajarSozinha = maiordeIdade || possuiCNH // OR

console.log('Pode viajar sozinha? ', podeViajarSozinha)

const precisaDeAcompanhante = !maiordeIdade // NOT

console.log('Precisa de acompanhante? ', precisaDeAcompanhante)

// AND &&
// OR ||
// NOT !
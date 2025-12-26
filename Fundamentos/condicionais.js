const idade = 17;

if (idade >= 18) {
    console.log("É maior de idade")
} 
else{
    console.log("É menor de idade")
}

// entre 9 e 10: excelente
// entre 7 e 8: bom
// entre 4 e 6: medio
// entre 0 e 3: ruim

const notaDoAluno = 5

if (notaDoAluno >= 9){
    console.log("Nota excelente.")
} else if (notaDoAluno >= 7){
    console.log("Nota boa.")
} else if (notaDoAluno >= 4){
    console.log("Nota mediana.")
} else {
    console.log("Nota ruim.")
}


// Operador ternário
notaDoAluno >= 9 ? console.log('Excelente.') :
    notaDoAluno >= 7 ? console.log('Boa.') :
        notaDoAluno >= 4 ? console.log('Mediana.') :
            console.log('Ruim.')
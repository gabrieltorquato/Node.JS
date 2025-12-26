// entre 9 e 10: excelente
// entre 7 e 8: bom
// entre 4 e 6: medio
// entre 0 e 3: ruim

const notaDoAluno = 4

switch(notaDoAluno) {
    case 10:
    case 9:
         console.log('Excelente')
         break
    case 8:
    case 7:
         console.log('Bom')
         break
    case 6:
    case 5:
    case 4:
         console.log('Mediano')
         break
    case 3:
    case 2:
    case 1:
         console.log('Ruim')
         break
    default:
        console.log('Valor inválido')
        break
}
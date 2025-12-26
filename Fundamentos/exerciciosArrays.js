// 1. Lista de nomes
// Crie um array com 5 nomes. 
// Use for para imprimir cada nome no console, um por linha.
let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}


// 2. Adicionar e remover itens
// Comece com um array de frutas. 
// Adicione uma nova fruta ao final com push() e remova a primeira com shift(). 
// Mostre o array antes e depois.
let frutas = ["maçã", "banana", "laranja"];
console.log("Antes:", frutas);
frutas.push("abacaxi"); // adiciona no final
frutas.shift(); // remove o primeiro
console.log("Depois:", frutas);


// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade 
// total de itens usando .length.
let cidades = ["Lisba", "Porto", "Coimbra"];
console.log("Total de cidades: ", cidades.length);


// 4. Somar todos os números
// Crie um array com 10 números. 
// Use for para somar todos os valores e mostrar o total no final.
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("Soma total: " + soma);

// 5. Média de notas
// Crie um array com 4 notas. 
// Some os valores e calcule a média, 
// exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
let notas = [7, 8 , 6, 9];
let somaNotas = 0;
for (let nota of notas) {
    somaNotas += nota;
}
let media = somaNotas / notas.length;
if (media >= 7) {
    console.log("Aprovado com média: " + media);
} else {
    console.log("Reprovado com média: " + media);
}


// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. 
// Use forEach para imprimir "Olá, [nome]!" para cada um.
let usuarios = ["Laura", "Rafa", "Tiago"];
usuarios.forEach(function(usuario) {
    console.log("Olá, " + usuario + "!");
})


// 7. Descontos com map
// Crie um array com preços de produtos. 
// Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.
let precos = [100, 200, 300];
let comDesconto = precos.map(function(preco) {
    return preco * 0.9;
});
console.log("Preços com 10% de desconto:", comDesconto);



// 8. Filtrar valores altos
// Crie um array com idades. 
// Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.
let idades = [12, 18, 25, 16, 30];
let maiores = idades.filter(function(idade) {
    return idade >= 18;
});
console.log("Maiores de idade:", maiores);


// 9. Simulando carrinho de compras
// Crie um array de preços e calcule o valor total da compra. 
// Depois, aplique um cupom de 20% de desconto e mostre o valor final.
let carrinho = [50, 30, 20];
let total = carrinho.reduce(function(acumulador, item){
    return acumulador + item;
}, 0);
let comCupom = total * 0.8;
console.log("Total com desconto de 20%: R$" + comCupom.toFixed(2));


// 10. Lista de tarefas
// Crie um array com 5 tarefas (strings). 
// Use filter para mostrar apenas as tarefas que ainda não 
// foram marcadas como concluídas (use uma convenção como "[x]" para concluídas).
let tarefas = ["[ ] Estudar", "[X] Lavar a louça", "[ ] Ir ao mercado", "[X] Caminhar", "[ ] Dormir"];
let pendentes = tarefas.filter(function(tarefa) {
    return tarefa.startsWith("[ ]");
});
console.log("Tarefas pendentes:", pendentes);


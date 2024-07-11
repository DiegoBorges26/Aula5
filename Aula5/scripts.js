//INTRODUÇÃO
// var frutas = ["Maça", "Melancia", "Banana"];

// console.log(frutas[2])
//===================================================================================================================

//EXEMPLOS DOS SLIDES ( Feito pelo professor)
//const frutas = ['Maçã', 'Melancia', 'Banana']
//const frutas2 = ['Pera', 'Abacaxi', 'Açaí']

//frutas.push('Abacaxi') // Adiciona sempre no final da lista.
//frutas.pop() // Remove o último item da lista

//frutas.unshift('Pera') // Adiciona no começo da lista
//frutas.shift() // Remove no começo da lista.

// frutas.splice(1, 2, 'Kiwi', 'Açaí', 'Pera') //1º Parametro - indice do que quer remover, 2º - Quantos itens da lista querem remover, 3º parametro em diante os itens que querem adicionar
// console.log(frutas)

// const todasFrutas = frutas2.concat(frutas) // Junta duas listas em uma só
// console.log(todasFrutas)

// const listaJoin = frutas.join(',') // Junta todos itens da lista com o caracter que vocês passarem
//===================================================================================================================


// ATIVIDADE DE SALA
// var nomes = ['Davi', 'Pedro', 'Francisco']

// nomes.push('João')
// nomes.unshift('Kelly')
// nomes[2] = 'Debora'
// console.log(nomes)
// nomes.splice(2, 1, 'Italo', 'Abel')
// console.log(nomes)
//===================================================================================================================

//ATIVIDADE DE SALA 


// var nomes = []

// while (true){
//     var nome = prompt('Digite o nome do usario. \nCaso queira sair, digite "parar"')
//     if(nome.toLowerCase() === 'parar'){
//         console.log(`Você saiu do menu.`)
//         break
        
//     }
//     nomes.push(nome)
// }
// console.log(nomes)
//===================================================================================================================
 
//ATIVIDADE DE SALA 

// var pessoas = []

// while(true) {
//     var menu = prompt('1 - Adicionar usuário \n2 - Remover ultimo usuário \n3 - Sair')

//     if(menu === '1'){
//         var nome = prompt('Digite um nome: ')
//         pessoas.push(nome)
//     } else if (menu === '2') {
//         pessoas.pop()
//     }else if (menu === '3'){
//         break
//     } else {
//         console.log('Escolha uma opção válida')
//     }
// }
//===================================================================================================================

//ATIVIDADE PRATICA

var cores = ['Vermelhos', 'Verde', 'Azul']
var novasCORES = []

cores.push('Amarelo', 'Roxo')
cores.pop()
cores.splice(1, 1, 'Marrom')

var novasCORES = cores.join(0, 1)
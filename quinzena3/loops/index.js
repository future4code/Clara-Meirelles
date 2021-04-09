/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1 - O código está fazendo um loop, adicionando +1 ao i a cada "volta". 
Como o valor de cada volta é o valor anterior somado ao i, o resultado final que será impresso no console será 10
valor + i 
0 + 0 = 0 (i=0)
0 + 1 = 1 (i=1)
1 + 2 = 3 (i=2)
3 + 3 = 6 (i=3)
6 + 4 = 10 (i=4) <= resposta impressa no console


2 - 
a. seria impresso no console a seguinte lista de números:
19
21
23
25
27
30

b. Não, pois o console.log no for... of... iria imprimir apenas os números presentes no array, não os seus respectivos índices. Para ver os
índices de cada elemento no console é necessário imprimir todo o array.


EXERCÍCIOS DE ESCRITA DE CÓDIGO
array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
*/
//3
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

console.log("a. Imprima cada um dos valores do array original.")
for (number of arrayOriginal) {
    console.log(number)
}

console.log("b. Imprima cada um dos valores do array original divididos por 10.")
for (number of arrayOriginal) {
    console.log(number / 10)
}


console.log("c. Escreva um programa que:\nCrie um novo array contendo, somente, os números pares do array original.\nImprima esse novo array")

let arrayPares = []
for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] % 2 === 0) {
        arrayPares.push(arrayOriginal[i])
    } 
}
console.log(arrayPares)


console.log('d. Escreva um programa que\nCrie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"\nImprima este novo array')

for (let i = 0; i < arrayOriginal.length; i++) {
    console.log("O elemento do índex", i, "é:", arrayOriginal[i])
}

console.log("e. Escreva um programa que imprima no console o maior e o menor números contidos no array original")

let maiorNumero = 0
let menorNumero = arrayOriginal[0]
for (numero of arrayOriginal) {
    if (maiorNumero < numero) {
        maiorNumero = numero
    }
    if (menorNumero > numero) {
        menorNumero = numero
    }
}
console.log(maiorNumero)

console.log(menorNumero)


/*
DESAFIOS

DESAFIO 1 - interpretação de código:
Enquanto a quantidadeAtual for menor que a quantidadeTotal, enquanto asteriscos for menor que 
quantidadeAtual + 1, adicionar um "0", quando asteriscos for igual à quantidadeAtual, adiciona 
uma linha, até que a quantidadeAtual seja igual à quantidade total.
Ou seja:
0
00
000
0000

DESAFIO 1 - escrita de código:
Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas 
pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o 
número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou 
é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:
*/



// EU CONSEGUI RODAR ESTE CÓDIGO NO MEU COMPUTADOR. ELE CHEGA A DAR O RESULTADO DE QUE "ACERTOU!", MAS CONTINUA PERGUNTANDO, COMO SE NÃO TIVESSE
// TERMINADO O LOOP. POR ISSO DEIXO ELE COMO COMENTÁRIO.

// const numeroEscolhido = Number(prompt("Escolha um número!"))
// let numeroAdivinhar 

// while (numeroEscolhido != numeroAdivinhar) {
//     numeroAdivinhar = prompt("Tente novamente!")

//     if (numeroEscolhido > numeroAdivinhar) {
//         console.log("O numero chutado foi:", numeroAdivinhar)
//         console.log("Errrrrou! É maior!")
//     } else if (numeroEscolhido < numeroAdivinhar) {
//         console.log("O numero chutado foi:", numeroAdivinhar)
//         console.log("Errrrrou! É menor!")
//     } 
// }
// console.log("O numero chutado foi:", numeroAdivinhar)
//         console.log("Acertou!!!")

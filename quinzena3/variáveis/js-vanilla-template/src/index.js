// exercícios de interpretação de código

/*
1 - o resultado impresso do comando console.log(a, b)
será: 10 5
*/

/* 
a=10 b=10 c=10
2 -  o resultado impresso do comando console.log(a, b, c) será:
10 10 10
*/

// exercícios de escrita de código



// 1


let variavelNome 
let variavelIdade 

console.log("nome",typeof variavelNome)
console.log("idade",typeof variavelIdade)
// o tipo das variáveis deu como undefined, por não ter um valor.

variavelNome = prompt("Digite seu nome")
variavelIdade = prompt("Digite sua idade")

console.log("nome",typeof variavelNome)
console.log("idade",typeof variavelIdade)   
// o tipo de variável aparece string para ambos, mesmo digitando números. Acredito que por ser livre a entrada.

console.log("Olá", variavelNome, "você tem", variavelIdade, "anos")


// 2 - a questão que parece caderno de perguntas da escola

let comidaPreferida
let livroPreferido
let filmePreferido
let seriePreferida
let personagemPreferida

comidaPreferida = prompt("Qual sua comida preferida?")
livroPreferido = prompt("Qual seu livro preferido?")
filmePreferido = prompt("Qual seu filme preferido?")
seriePreferida = prompt("Qual sua série preferida?")
personagemPreferida = prompt("Qual sua personagem preferida?")

console.log("1. Qual sua comida preferida?")
console.log("Resposta:", comidaPreferida)
console.log("2. Qual seu livro preferido?")
console.log("Resposta:", livroPreferido)
console.log("3. Qual seu filme preferido?")
console.log("Resposta:", filmePreferido)
console.log("4. Qual sua série preferida?")
console.log("Resposta:", seriePreferida)
console.log("5. Qual sua personagem preferida?")
console.log("Resposta:", personagemPreferida)


// 3 - 5 comidas preferidas

let comidasPreferidas = ["Churrasco", "Quiche", "Lasanha" , "Hamburguer","Torta de limão"]

console.log(comidasPreferidas)
console.log("Essas são as minhas comidas preferidas:") 
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

comidasPreferidas[1] = prompt("Mais uma vez, qual sua comida preferida?")

console.log(comidasPreferidas)


// 4 - 3 perguntas S/N

let arrayPerguntas = ["Você gosta de cachorros?", "Você está dormindo?", "você mora no Brasil?"]
let arrayRespostas = [true, false, true]

console.log(arrayPerguntas[0],arrayRespostas[0])
console.log(arrayPerguntas[1], arrayRespostas[1])
console.log(arrayPerguntas[2], arrayRespostas[2])
/* Nesse eu poderia ter posto só um true e um false e usado nas respostas? - Funcionou quando tentei, mas já que o Bruno disse que o JS deixa
a gente fazer qualquer coisa, achei melhor perguntar*/

z
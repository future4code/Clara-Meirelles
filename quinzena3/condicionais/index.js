/*
**Exercícios de interpretação de código**

EXERCÍCIO 1

O Código verifica se há sobras na  diivisão do número escolhido por dois. 
Se o número escolhido for par, a resposta é "Passou no teste.", caso contrário, "Não passou no teste."


EXERCÍCIO 2

a. Serve para identificar os preços de diferentes frutas.
b. O preço da fruta Maçã é R$ 2.25
c.  O preço da fruta Pêra é R$ 5


EXERCÍCIO 3

a. A primeira linha pede ao usuário que digite um número e o armazena na variável numero.
b. Se o usuário digitasse o número 10, a mensagem que apareceria no terminal seria "Esse número passou no teste".
Caso o usuário digitasse -10, não apareceria nada, pois não se enquadraria na condição de numero>0 presente no if.
c. Haverá um erro, pois a variável mensagem foi estabelecida dentro do bloco if e chamada no console.log fora do bloco.

*/

//Exercícios de escrita de código

//4 - Solicitar ao usuário que digite sua idade e retornar a mensagem informando se já pode dirigir ou ainda não, de acordo com a idade.

const idadeUsuario = Number(prompt("Digite a sua idade"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você ainda não pode dirigir.")
}


//5 - Verificar em que turno do dia o aluno estuda. M(matutino - "Bom dia!""), V(vespertino - "Boa tarde!"), N(noturno - "Boa Noite!").

const turno = prompt("Digite o turno em que você estuda: \nM - Matutino\nV - Vespertino\nN - Noturno")

if (turno === "M" || turno === "m") {
    console.log("Bom dia!")
} else if (turno === "V" || turno === "v") {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

//6 - repetir o exercício anterior, em Switch Case:
//*preferi criar uma nova variável ao invés de usar a mesma por questão de visualização mesmo.

const turnoSwitchCase = prompt("Digite novamente o turno em que você estuda")

switch (turnoSwitchCase) {
    case "M":
        console.log("Bom dia!")
        break
    case "m":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa Noite!")
        break
}

//7 - Cinema com amigo, só assiste filme de fantasia, ingresso até R$15,00

const generoFilme = prompt("Escolha um gênero de filme para assistir no cinema com o João:\n ação, documentario, drama, fantasia, romance, suspense ou terror?")
const precoIngresso = Number(prompt("Digite o valor do ingresso"))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    // console.log("Bom filme!") //linha removida pra adicionar o Desafio 1 
    const snacks = ["pipoca doce", "pipoca salgada", "balinha azeda", "chocolate", "batata chips", "nenhum snack"]
    const selecaoSnacks = Number(prompt("Você gostaria de um lanchinho durante o filme\nSelecione seu snack:\n 1- Pipoca Doce, 2- Pipoca Salgada, 3- Balinha Azeda, 4- Chocolate, 5- Batata Chips, 6- Não quero, obrigada!"))
    console.log("Bom filme de", generoFilme, "com João e", snacks[selecaoSnacks - 1])

} else if (precoIngresso >= 15) {
    console.log("João achou caro...")
} else if (generoFilme !== "fantasia") {
    console.log("Escolha outro gênero, João não gosta de ", generoFilme, ":(")
}


/*
DESAFIO 2

Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser dados em dólar (considerar a cotação de U$1,00 = R$4,10)
*/

const nomeUsuario = prompt("Digite seu nome completo")
let tipoDeJogo = prompt("Para qual tipo de jogo você gostaria de comprar os ingressos? \n DO - Nacional\n IN - Internacional")
let etapaDeJogo = prompt("Para qual etapa de jogo é o seu ingresso:\nDigite:\nSF - para Semi-final\nDT - para decisão de terceiro lugar\nFI - para Final")
const categoriaIngresso = Number(prompt("Qual a categoria do seu ingresso?\n 1, 2, 3, 4"))
const quantidadeIngresso = Number(prompt("Quantos ingressos você gostaria de comprar?"))
let valorIngresso 

switch(etapaDeJogo){
    case "SF":
        etapaDeJogo = "Semi-final"
        break
    case "DT":
        etapaDeJogo = "Decisão de terceiro lugar"
        break
    case "FI":
        etapaDeJogo = "Final"
}

if(etapaDeJogo === "Semi-final" && categoriaIngresso === 1){
    valorIngresso = 1320
} else if (etapaDeJogo === "Semi-final" && categoriaIngresso === 2){
    valorIngresso =  880
} else if(etapaDeJogo === "Semi-final" && categoriaIngresso === 3){
    valorIngresso = 550
} else if(etapaDeJogo === "Semi-final" && categoriaIngresso === 4){
    valorIngresso = 220
} else if(etapaDeJogo === "Decisão de terceiro lugar" && categoriaIngresso === 1){
    valorIngresso = 660
} else if (etapaDeJogo === "Decisão de terceiro lugar" && categoriaIngresso === 2){
    valorIngresso = 440
} else if(etapaDeJogo === "Decisão de terceiro lugar" && categoriaIngresso === 3){
    valorIngresso = 330
} else if(etapaDeJogo === "Decisão de terceiro lugar" && categoriaIngresso === 4){
    valorIngresso = 170
} else if(etapaDeJogo === "Final" && categoriaIngresso === 1){
    valorIngresso = 1980
} else if (etapaDeJogo === "Final" && categoriaIngresso === 2){
    valorIngresso = 1320
} else if(etapaDeJogo === "Final" && categoriaIngresso === 3){
    valorIngresso = 880
} else if(etapaDeJogo === "Final" && categoriaIngresso === 4){
    valorIngresso = 330
}

switch(tipoDeJogo){
    case "DO":
        tipoDeJogo="Nacional"
        break
    case "IN":
        tipoDeJogo = "Internacional"
}

if (tipoDeJogo === "Nacional"){
console.log("----Dados da compra----\n \nNome do cliente:", nomeUsuario, "\nTipo do jogo:", tipoDeJogo, "\nEtapa do jogo:", etapaDeJogo, "\nCategoria:", categoriaIngresso, "\nQuantidade de ingressos:", quantidadeIngresso,"\n \n----Valores----\n \nValor do ingresso: R$", valorIngresso, "\n Valor total: R$",(valorIngresso*quantidadeIngresso))
} else{
    console.log("----Dados da compra----\n \nNome do cliente:", nomeUsuario, "\nTipo do jogo:", tipoDeJogo, "\nEtapa do jogo:", etapaDeJogo, "\nCategoria:", categoriaIngresso, "\nQuantidade de ingressos:", quantidadeIngresso,"\n \n----Valores----\n \nValor do ingresso: U$", (valorIngresso/4.2), "\n Valor total: U$",(valorIngresso*quantidadeIngresso/4.2))
}
/**
 
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


EXERCÍCIO 1
a. será impresso no console:
10
50

b. sem o console.log, nada apareceria no console.


EXERCÍCIO 2
a. as saídas impressas no console serão:
Darvas - arrayDeNomes[0]
Caio - arrayDeNomes[1]
pois são as únicas onde o índice é menor que 2

b. se o valor de array de nomes para ["Amanda", "Caio"], seria impresso no console:
Amanda
Caio
*SE a função for chamada novamente!


EXERCÍCIO 3
O código cria um novo array com os números pares ao quadrado. Um melhor nome seria criarArrayQuadradoDosPares.
 */


//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 4

//a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você.

function apresentarEu() {
    let nome = "Clara"
    let idade = "29"
    let cidade = "Florianópolis"
    let profissao = "estudante"
    console.log("Olá, eu sou a " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao + ".")
}

apresentarEu()

//b. Escreva uma função que recebe 4 parâmetros, retornar uma string unificando todas as informações da pessoa em uma só mensagem.
function apresentacaoUsuario(nomeUsuario, idadeUsuario, enderecoUsuario, souNaoSou){
    nomeUsuario = prompt("Digite seu nome: ")
    idadeUsuario = prompt("Digite sua idade")
    enderecoUsuario = prompt("Digite sua cidade")
    souNaoSou = confirm("Você é estudante?\n clique em 'ok' para sim, ou 'cancel' para não.")
        if (souNaoSou === true){
            souNaoSou = "sou"
        } else {
            souNaoSou = "não sou"
        }
        let infosUsuario = "Olá, eu sou " + nomeUsuario + ", tenho " + idadeUsuario + ", moro em " + enderecoUsuario + " e " + souNaoSou + " estudante."
    console.log(infosUsuario)
    return infosUsuario
}

apresentacaoUsuario()

//EXERCÍCIO 5

//a. escreva uma função que receba 2 numeros, faça a soma e retorne o resultado. Imprima o resultado no console.

function somarNumeros (numero1, numero2){
    let soma = numero1 + numero2
    console.log(soma)
    return soma
}

somarNumeros(12,23)

//b. escrever uma função que receba 2 números e retorne um booleano que informa se o primeiro numero é maior ou igual ao segundo

function maiorOuIgual(num1, num2) {
    let resultado
    if (num1 > num2) {
        resultado = num1 + " é maior que " + num2
        console.log(resultado)
        return resultado
    } else if (num1 === num2) {
        resultado = num1 + " é igual a " + num2
        console.log(resultado)
        return resultado
    } else {
        resultado = num1 + " é menor que " + num2
        console.log(resultado)
        return resultado
    }
}

maiorOuIgual(1, 27)

// EXERCÍCIO 5b. COM INTERPRETAÇÃO LITERAL DO TEXTO:

function maiorOuIgual2(num1, num2) {
    let resultado
    if (num1 >= num2) {
        resultado = true
        console.log(resultado)
        return resultado
    }  else {
        resultado = false
        console.log(resultado)
        return resultado
    }
}
maiorOuIgual2(1,27)

//c. escrever uma função que receba uma string como parametro e imprimir 10x essa string

function imprimirFrase (frase){

    for (i = 0 ; i < 10 ; i++ ){
        console.log(frase)
    }
}

imprimirFrase("Imprimir esta mensagem 10x")


//EXERCÍCIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a. escreva uma função que receba um array de numeros e devolva a qtde de elementos
function elementosArray (array){
console.log(array.length)
return array.length
}

// elementosArray([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])

//b. escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function numeroPar(numero) {
    let parOuImpar
    if (numero % 2 === 0) {
        parOuImpar = true
    } else {
        parOuImpar = false
    }
    console.log(parOuImpar)
    return parOuImpar

}

numeroPar(13)

//c. escreva uma função que receba um array de numeros e devolva a qtde de numeros pares dentro dele

function contarElementosPares(arrayCompleto) {
    let arrayDePares = []
    for (let numeros = 0; numeros < arrayCompleto.length; numeros++) {
        if (arrayCompleto[numeros] % 2 === 0)
            arrayDePares.push(arrayCompleto[numeros])
    }

    console.log("c. Este array tem " + arrayDePares.length + " numeros pares.")
    return arrayDePares.length
}

contarElementosPares([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])

//d. reescrever o código do item c, usando a função do item b p/ verificar se o numero é par

function contarElementosParesBooleanos(arrayCompleto2) {
    let indice
    let totalNumerosPares = 0
    for (indice = 0; indice < arrayCompleto2.length; indice++) {
        numeroPar(arrayCompleto2[indice])
        if (numeroPar(arrayCompleto2[indice])===true)
        totalNumerosPares += 1
    }
    console.log("d. Este array tem "+totalNumerosPares+" numeros pares.")
}

contarElementosParesBooleanos([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])


//DESAFIOS

//EXERCÍCIO 1

//a. arrow function que receba um parametro e imprima o parametro no console.

const arrowFunctionUmParametro = (frase) => {
    console.log(frase)
}

arrowFunctionUmParametro("Desafio 1")

//b. arrow function que receba 2 parametros. Não imprimir
let somaArrowFunction

const arrowFunctionDoisParametros = (numero1, numero2) => {
    somaArrowFunction = numero1 + numero2
}

arrowFunctionDoisParametros(13, 23)
arrowFunctionUmParametro(somaArrowFunction)


//EXERCÍCIO 2

//a. Escreva uma função que receba um array como parâmetro e retorne um array com apenas os números pares e multiplicados por 2.

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function dobrarNumerosParesDoArray(arrayDesafio2) {
    let arrayDobroDosPares = []
    for (let indiceArray = 0; indiceArray < numeros.length; indiceArray++) {
        if (numeros[indiceArray] % 2 === 0) {
            arrayDobroDosPares.push(numeros[indiceArray] * 2)
        }
    }
    console.log(arrayDobroDosPares)
}

dobrarNumerosParesDoArray(numeros)

//b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.

function definirMaiorNumeroDoArray(arrayDesafio2b) {
    let maiorNumero = 0
    for (let indiceArray = 0; indiceArray < numeros.length; indiceArray++) {
        if (maiorNumero < numeros[indiceArray]) {
            maiorNumero = numeros[indiceArray]
        }
    }
    console.log(maiorNumero)
}

definirMaiorNumeroDoArray(numeros)

//c. Escreva uma função que receba um array como parâmetro e retorne o índice do maior número deste array.

function definirIndiceMaiorNumeroDoArray(arrayDesafio2c) {
    let indiceMaiorNumero = 0
    let maiorNumero = 0
    for (let indiceArray = 0; indiceArray < numeros.length; indiceArray++) {
        if (maiorNumero < numeros[indiceArray]) {
            maiorNumero = numeros[indiceArray]
            indiceMaiorNumero = indiceArray
        }
    }
    console.log(indiceMaiorNumero)
}

definirIndiceMaiorNumeroDoArray(numeros)

//d. Escreva uma função que recebe um array como parâmetro e retorne este array invertido.

function inverterArray(arrayInverter){
    let arrayInvertido = arrayInverter.reverse()
    console.log(arrayInvertido)
    return arrayInvertido
}

inverterArray(numeros)

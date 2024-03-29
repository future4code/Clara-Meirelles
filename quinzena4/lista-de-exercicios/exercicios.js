//Exercício 1

function inverteArray(array) {
   return array.reverse()
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let arrayParesAoQuadrado = []
   for (number of array) {
      if (number % 2 === 0) {
         arrayParesAoQuadrado.push(number * number)
      }

   }
   return arrayParesAoQuadrado
}

//Exercício 3

function retornaNumerosPares(array) {
   let arrayPares = []
   for (number of array) {
      if (number % 2 === 0)
         arrayPares.push(number)
   }
   return arrayPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = 0
   for (let i = 0; i < array.length; i++) {
      if (maiorNumero < array[i]) {
         maiorNumero = array[i]
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   let elementosArray = 0
   for (numbers of array) {
      elementosArray++
   }
   return elementosArray
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3
   let arrayBooleanos = []
   //a.
   if (booleano1 && booleano2 && !booleano4) {
      arrayBooleanos.push(true)
   } else {
      arrayBooleanos.push(false)
   }
   //b.
   if ((booleano1 && booleano2) || !booleano3) {
      arrayBooleanos.push(true)
   } else {
      arrayBooleanos.push(false)
   }
   //c.
   if ((booleano2 || booleano3) && (booleano4 || booleano1)) {
      arrayBooleanos.push(true)
   } else {
      arrayBooleanos.push(false)
   }
   // d.
   if (!(booleano2 && booleano3) || !(booleano1 && booleano3)) {
      arrayBooleanos.push(true)
   } else {
      arrayBooleanos.push(false)
   }
   // e.
   if (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)) {
      arrayBooleanos.push(true)
   } else {
      arrayBooleanos.push(false)
   }
   return arrayBooleanos
}

//Exercício 7

function retornaNNumerosPares(n) {

   let arrayNPares = []

   for (i = 0; arrayNPares.length < n; i++) {
      if (i % 2 === 0) {
         arrayNPares.push(i)

      }
   }
   return arrayNPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
   let tipoTriangulo
   if (a === b && b === c) {
      tipoTriangulo = 'Equilátero'
   } else if ((a === b && b !== c) || (a === c && c !== b) || (b === c && b !== a)) {
      tipoTriangulo = 'Isósceles'
   } else if (a !== b && b !== c && c !== a) {
      tipoTriangulo = 'Escaleno'
   }

   return tipoTriangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maior = 0
   let arrayNum = [num1, num2]
   let menor = 10000000000
   let divisivel
   let subtracao
   for (let i = 0; i < 2; i++) {
      if (maior < arrayNum[i]) {
         maior = arrayNum[i]
      }
   }
   for (let i = 0; i < 2; i++) {
      if (menor > arrayNum[i]) {
         menor = arrayNum[i]
      }
   }
   if (maior % menor === 0) {
      divisivel = true
   } else {
      divisivel = false
   }
   if (num1 >= num2) {
      subtracao = num1 - num2
   } else {
      subtracao = num2 - num1
   }

   const numerosComparados = {
      maiorNumero: maior,
      maiorDivisivelporMenor: divisivel,
      diferenca: subtracao,
   }
   return numerosComparados

}

// Exercício 10

function segundoMaiorEMenor(array) {
   let arrayFinal = []
   let maiorNumero = 0
   let menorNumero = 100000000000
   let segundoMaiorNumero = 0
   let segundoMenorNumero = 100000000000

   for (let i = 0; i < array.length; i++) {
      if (maiorNumero < array[i]) {
         segundoMaiorNumero = maiorNumero
         maiorNumero = array[i]
      }
      if (menorNumero > array[i]) {
         segundoMenorNumero = menorNumero
         menorNumero = array[i]
      } else if (segundoMenorNumero > array[i] && menorNumero < array[i]) {
         segundoMenorNumero = array[i]
      }
   }

   arrayFinal = [segundoMaiorNumero, segundoMenorNumero]
   return arrayFinal

}

//Exercício 11

function ordenaArray(array) {
   for (let i = 0; i < array.length; i++) {
      let numeroAnterior = i
      for (let proximoNumero = i + 1; proximoNumero < array.length; proximoNumero++) {
         if (array[proximoNumero] < array[numeroAnterior]) {
            numeroAnterior = proximoNumero
         }
      }
      if (numeroAnterior !== i) {
         let temporario = array[i]
         array[i] = array[numeroAnterior]
         array[numeroAnterior] = temporario
      }
   }
   return array
}

// Exercício 12

function filmeFavorito() {

   let astrodevAwards = {

      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]

   }

   return (astrodevAwards)
}

// Exercício 13

function imprimeChamada() {
   let astrodevAwards = {

      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]

   }

   return `Venha assistir ao filme ${astrodevAwards.nome}, de ${astrodevAwards.ano}, dirigido por ${astrodevAwards.diretor} e estrelado por ${astrodevAwards.atores[0]}, ${astrodevAwards.atores[1]}, ${astrodevAwards.atores[2]}, ${astrodevAwards.atores[3]}.`

}

// Exercício 14

function criaRetangulo(lado1, lado2) {

   let retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: (2 * (lado1 + lado2)),
      area: lado1 * lado2
   }

   return retangulo

}

// Exercício 15

function anonimizaPessoa(pessoa) {

   const pessoaAnonima = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }

   pessoaAnonima.nome = "ANÔNIMO"
   return pessoaAnonima
}
// NÃO funciona com propriedades diferentes das dadas, somente pode-se alterar o nome, pois no return ele muda para anônimo.


// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]
// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {

   const arrayAdultos = []

   for (i = 0; i < arrayDePessoas.length; i++) {

      if (arrayDePessoas[i].idade >= 18) {
         arrayAdultos.push(arrayDePessoas[i])
      }
   }
   return arrayAdultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {

   const arrayCriancas = []

   for (i = 0; i < arrayDePessoas.length; i++) {

      if (arrayDePessoas[i].idade < 18) {
         arrayCriancas.push(arrayDePessoas[i])
      }
   }
   return arrayCriancas
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   arrayDobro = []
   for (let i = 0; i < array.length; i++) {
      arrayDobro.push(array[i] * 2)
   }
   return arrayDobro
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {

   const arrayString = []

   for (let i = 0; i < array.length; i++) {
      arrayString.push(String(array[i] * 2))
   }

   return arrayString
}

// Exercício 17, letra C

function verificaParidade(array) {
   const arrayParOuImpar = []
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayParOuImpar.push(`${array[i]} é par`)
      } else {
         arrayParOuImpar.push(`${array[i]} é ímpar`)
      }
   }
   return arrayParOuImpar
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const arrayAutorizadas = []
   for (pessoa of pessoas) {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
         arrayAutorizadas.push(pessoa)
      }
   }
   return arrayAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const arrayVetadas = []

   for (pessoa of pessoas) {
      if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
         arrayVetadas.push(pessoa)
      }
   }

   return arrayVetadas
}

//Exercício 19, letra A

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorNome() {

   consultasNome.sort(function (a, b) {
      if (a.nome < b.nome) {
         return -1;
      } else {
         return true;
      }
   })

   return consultasNome
}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {
   consultasData.sort(function (a, b) {
      const dataA = a.dataDaConsulta.split("/")
      const dataB = b.dataDaConsulta.split("/")


      const dataFinalA = new Date(+dataA[2], dataA[1] - 1, +dataA[0]);
      const dataFinalB = new Date(+dataB[2], dataB[1] - 1, +dataB[0]);

      if (dataFinalA < dataFinalB) {
         return -1;
      } else {
         return true;
      }
   })

   return consultasData
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {

   for (cliente in contas) {
      for (let gasto = 0; gasto < contas[cliente].compras.length; gasto++) {
         contas[cliente].saldoTotal += - contas[cliente].compras[gasto]
      }
   }
   // console.log(contas)
   return contas
}
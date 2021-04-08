//Exercício de interpretação de código

/*
1
a. false
b. false
c. true
e. boolean

2
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/


//1
/*a. */const idadeUsuario = Number(prompt("Qual a sua idade?"))

/*b. */const idadeMelhorAmigo = Number(prompt("Qual a idade da sua melhor amiga?"))

/*c. */console.log("Sua idade é maior do que a da sua amiga?", (idadeUsuario>idadeMelhorAmigo))

/*d. */console.log("Diferença de idade: ",(idadeUsuario-idadeMelhorAmigo))


//2
/*a. */const numeroPar = Number(prompt("Insira um numero par:"))

/*b. */console.log(numeroPar%2)

//c. Como o número par é sempre divizível por 2, o resto será sempre 0.

//d. números ímpares o resultado sempre será 1 pois eles estão sempre a 1 unidade de distância de um numero par, para serem divisíveis por 2.


//3
/*a. */ //const listaDeTarefas
/*b. */ const item1 = prompt("Agora vamos fazer uma lista com tarefas que você precisa realizar.\nCite uma atividade que você precisa realizar:")
        const item2 = prompt("Cite uma segunda atividade que você precisa realizar:")
        const item3 = prompt("Cite uma terceira atividade que você precisa realizar:")
        listaDeTarefas = [item1,item2, item3]
/*c. */ console.log("1.",listaDeTarefas[0], "2.", listaDeTarefas[1], "3.", listaDeTarefas[2])
/*d. */ const tarefaRealizada = Number(prompt("Digite o numero referente à tarefa já realizada"))
/*e. */ listaDeTarefas.splice((tarefaRealizada-1), 1) //pensando na lógica do usuário, preferi enumerar as tarefas na resposta e fazer dessa maneira para que seja uma resposta mais comum
/*f. */ console.log(listaDeTarefas)


//4
const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu e-mail:")

console.log("O e-mail "+ emailDoUsuario, " foi cadastrado com sucesso! Desejamos boas vindas, "+ nomeDoUsuario +"!")


//Desafios

//1
/*a. */ const temperaturaKelvin = (77-32)*(5/9) + 273.15
        console.log(temperaturaKelvin, "K")

/*b. */ const temperaturaFahrenheit = 80*(9/5) + 32
        console.log(temperaturaFahrenheit, "°F")

/*c. */ let temperaturaCelsius = 30
        let conversaoFahrenheit = temperaturaCelsius *9/5 + 32
        let conversaoKelvin = temperaturaCelsius + 273.15
        console.log(conversaoFahrenheit,"°F ;", conversaoKelvin, "K")

/*d. */ temperaturaCelsius = Number(prompt("Insira uma temperatura em °C (graus celsius) para converter em °F(graus fahrenheit) e K(graus kelvin)"))
        conversaoFahrenheit = temperaturaCelsius *9/5 + 32
        conversaoKelvin = temperaturaCelsius + 273.15
        console.log(temperaturaCelsius, "°C correspondem a", conversaoFahrenheit,"°F, ou ", conversaoKelvin, "K")


//2 - 1kWh = R$0,05

/*a. */ let consumo = 280
        const valorkWh = consumo *0.05
        console.log(valorkWh)

/*b. */ const valorComDesconto = valorkWh * 0.85
        console.log(valorComDesconto)

//3
/*a. 1kg = 1lb/2,2046 */ 
        let quilos = 20
        const conversaoLibrasKg = quilos*2.2046
        console.log(quilos, "Kg equivalem a ", conversaoLibrasKg, "lb")

/*b. 1Kg = 1/3.5274 oz */
        let oncas = 10.5
        const conversaoQuilosOz = oncas/3.5274
        console.log(oncas, "oz equivalem a ", conversaoQuilosOz, "Kg")

/*c. 1mi = 1609,344m */
        let milha = 100
        let conversaoMetroMilha = milha * 161
        console.log(milha,"mi equivalem a ", conversaoMetroMilha, "m")

/*d. 1ft = 1/3,281m */
        let feet = 50
        const conversaoMetroPe = feet/3.281
        console.log(feet,"ft equivalem a ", conversaoMetroPe,"m")

/*e. 1gal= 3,785L */
        let galao = 103.56
        const conversaoLitroGal = galao * 3.785
        console.log(galao, "gal equivale a ",conversaoLitroGal,"l")

/*f. 1 xc = 0,24 l */
        let xicara = 450
        const conversaoLitroXic = xicara * 0.24
        console.log(xicara,"xic equivalem a ", conversaoLitroXic, "l")

/*g. converter valor do usuario - milhas p/metro */
        milha = Number(prompt("Digite um valor em milhas para converter em metros:"))
        console.log(milha, "mi equivalem a ", conversaoMetroMilha,"m")
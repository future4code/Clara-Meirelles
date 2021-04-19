/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


   //  início do jogo
console.log("Boas vindas ao jogo de Blackjack!")
// Iniciar nova rodada - sim
while (confirm("Quer iniciar uma nova rodada?") === true){
let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()
let cartaComputador1 = comprarCarta()
let cartaComputador2 = comprarCarta()

let totalUsuario = cartaUsuario1.valor + cartaUsuario2.valor
let totalComputador = cartaComputador1.valor + cartaComputador2.valor

console.log("Suas cartas:", cartaUsuario1.texto, cartaUsuario2.texto, "- Sua pontuação:", totalUsuario)
console.log("Cartas do computador:", cartaComputador1.texto, cartaComputador2.texto, "- Pontuação do computador:", totalComputador)

   if(totalUsuario>totalComputador){
      console.log("Você venceu!")
   } else if (totalUsuario === totalComputador){
      console.log("Empate!")
   } else{
      console.log("O computador venceu!")
   }
}

//Iniciar nova rodada - Não

   console.log("Fim de jogo!")


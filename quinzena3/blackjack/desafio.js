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
alert("Boas vindas ao jogo de Blackjack!")

// Iniciar nova rodada - sim
while (confirm("Gostaria de iniciar uma nova rodada?") === true) {
   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()
   const cartasUsuario = [cartaUsuario1, cartaUsuario2]
   const cartasComputador = [cartaComputador1, cartaComputador2]

   // Confere se as cartas iniciais são ambas "A" para algum dos jogadores.
   if (cartaUsuario1.valor + cartaUsuario2.valor === 22) {
      cartaUsuario1 = comprarCarta()
      cartaUsuario2 = comprarCarta()
   }

   if (cartaComputador1.valor + cartaComputador2.valor === 22) {
      cartaUsuario1 = comprarCarta()
      cartaComputador2 = comprarCarta()
   }

   // Calcula o valor das cartas iniciais dos dois jogadores
   let totalUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   let totalComputador = cartasComputador[0].valor + cartasComputador[1].valor

   console.log("Suas cartas:", cartasUsuario[0].texto, cartasUsuario[1].texto, "-", totalUsuario)
   console.log("Carta revelada do computador:", cartasComputador[0].texto)


   const cartasUsuarioTexto = [cartaUsuario1.texto, cartaUsuario2.texto]

   //comprar nova carta - usuário
   let indiceUltimaCarta = cartasUsuario.length - 1
   while (totalUsuario < 21 && confirm("Suas cartas são: " + cartasUsuarioTexto + "\nSeu total de pontos é: " + totalUsuario + "\nA carta revelada do computador é: " + cartaComputador1.texto + "\n \nDeseja comprar mais uma carta?")
   ) {
      cartasUsuario.push(comprarCarta())
      indiceUltimaCarta = cartasUsuario.length - 1
      cartasUsuarioTexto.push(cartasUsuario[indiceUltimaCarta].texto)
      totalUsuario += cartasUsuario[indiceUltimaCarta].valor
      console.log("Sua nova carta é:", cartasUsuario[indiceUltimaCarta].texto)
      console.log("Seu total de pontos é:", totalUsuario)
      alert("Sua nova carta é: " + cartasUsuario[indiceUltimaCarta].texto)
   }
   alert("Suas cartas são: " + cartasUsuarioTexto + "\nSeu total de pontos é: " + totalUsuario)

   //Mostra as cartas do computador
   const cartasComputadorTexto = [cartaComputador1.texto, cartaComputador2.texto]

   console.log("As cartas do computador são:", cartasComputador[0].texto, cartasComputador[1].texto, "-", totalComputador)
   alert("As cartas do computador são: " + cartasComputadorTexto + "\nO total de pontos do computador foi: " + totalComputador)

   // comprar nova carta - computador
   while (totalComputador < 21 && totalComputador < totalUsuario && totalUsuario <= 21) {
      cartasComputador.push(comprarCarta())
      const indiceUltimaCartaComputador = cartasComputador.length - 1
      totalComputador += cartasComputador[indiceUltimaCartaComputador].valor
      cartasComputadorTexto.push(cartasComputador[indiceUltimaCartaComputador].texto)
      console.log("A nova carta do computador é:", cartasComputador[indiceUltimaCartaComputador].texto)
      console.log("O total de pontos do computador é:", totalComputador)
      alert("A nova carta do computador é:" + cartasComputadorTexto[indiceUltimaCartaComputador] + "\nAs cartas do computador são: " + cartasComputadorTexto + "\nO total de pontos do computador foi: " + totalComputador)

   }

   //Exibe a pontuação final dos dois jogadores
   if ((totalUsuario > totalComputador) && (totalUsuario <= 21)) {
      console.log("O seu total de pontos foi:", totalUsuario)
      console.log("O total de pontos do computador foi:", totalComputador)
      console.log("Você venceu!")
      alert("Suas cartas: " + cartasUsuarioTexto + "\nO seu total de pontos foi: " + totalUsuario + "\n \nAs cartas do computador são: " + cartasComputadorTexto + "\nO total de pontos do computador foi: " + totalComputador + "\n \nVocê venceu!")
   } else if (totalUsuario === totalComputador) {
      console.log("O seu total de pontos foi:", totalUsuario)
      console.log("O total de pontos do computador foi:", totalComputador)
      console.log("Empate!")
      alert("Suas cartas: " + cartasUsuarioTexto + "\nO seu total de pontos foi: " + totalUsuario + "\n \nAs cartas do computador são: " + cartasComputadorTexto + "\nO total de pontos do computador foi: " + totalComputador + "\n \nEmpate!")
   } else if (totalUsuario > 21) {
      console.log("O seu total de pontos foi:", totalUsuario)
      console.log("O total de pontos do computador foi:", totalComputador)
      console.log("EITA! Você passou de 21!, o computador venceu!")
      alert("Suas cartas: " + cartasUsuarioTexto + "\nO seu total de pontos foi: " + totalUsuario + "\n \nAs cartas do computador são: " + cartasComputadorTexto + "\nO total de pontos do computador foi: " + totalComputador + "\n \nEITA! Você passou de 21!, o computador venceu!!")

   } else if (totalComputador > 21) {
      console.log("O seu total de pontos foi:", totalUsuario)
      console.log("O total de pontos do computador foi:", totalComputador)
      console.log("Opa! O computador passou a pontuação. Você venceu!")
      alert("Suas cartas: " + cartasUsuarioTexto + "\nO seu total de pontos foi: " + totalUsuario + "\n \nAs cartas do computador são: " + cartasComputadorTexto + "\nO total de pontos do computador foi: " + totalComputador + "\n \nOpa! O computador passou a pontuação. Você venceu!")
   } else if (cartasUsuario > 21 && cartasComputador > 21) {
      alert("Suas cartas: " + cartasUsuarioTexto + "\nO seu total de pontos foi: " + totalUsuario + "\n \nAs cartas do computador são: " + cartasComputadorTexto + "\nO total de pontos do computador foi: " + totalComputador + "\n \nEita! Os dois passaram de 21!")

   } else {
      console.log("O seu total de pontos foi:", totalUsuario)
      console.log("O total de pontos do computador foi:", totalComputador)
      console.log("O computador venceu!")
      alert("Suas cartas: " + cartasUsuarioTexto + "\nO seu total de pontos foi: " + totalUsuario + "\n \nAs cartas do computador são: " + cartasComputadorTexto + "\nO total de pontos do computador foi: " + totalComputador + "\nO computador venceu!")
   }
}

//Iniciar nova rodada - Não

console.log("Fim de jogo!")



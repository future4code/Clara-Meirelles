// Faça um programa para ler o ano atual e o ano de nascimento de uma pessoa e retorne true ou false indicando se ela pode votar ou não esse ano. Considere que podem votar pessoas com 16 ou mais anos de idade.

export function calculaIdadeVoto(anoAtual, anoDeNascimento){
    if (anoAtual - anoDeNascimento >= 16){
        return true
    } else {
        return false
    }
}
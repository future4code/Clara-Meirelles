// Escreva uma função que recebe 3 valores (A, B e C), representando as medidas dos lados de um triângulo, e retorna true ou false, indicando se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.

export function verificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA && ladoB && ladoC) {
        if (ladoA >= ladoB + ladoC || ladoB >= ladoA + ladoC || ladoC >= ladoA + ladoB) {
            return false
        } else {
            return true
        }
    }
    return false
}
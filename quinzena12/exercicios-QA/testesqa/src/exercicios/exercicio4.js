// As maçãs custam R$ 1,30 cada se forem compradas em menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva uma função que receba o número de maçãs compradas, calcule e retorne o custo total da compra.

export function calculaValorMacas(quantidade) {
    let valor = 1.3
    if (quantidade >= 12) {
        valor = 1
    }
    return valor * quantidade
}
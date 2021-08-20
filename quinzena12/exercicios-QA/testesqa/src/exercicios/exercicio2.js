// Escreva uma função que receba a idade de uma pessoa expressa em anos, meses e dias e retorne a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

export function idadeEmDias(anos, meses, dias) {
    return (anos * 365) + (meses * 30) + dias
}


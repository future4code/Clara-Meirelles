import { calculaValorMacas } from "./exercicio4";

test('Verifica calculo do valor das maçãs, se a quantidade for menor que 12, o valor é R$1,30 , se forem mais que 12, R$ 1,00', () => {
    expect(calculaValorMacas(1)).toBe(1.3)
    expect(calculaValorMacas(2)).toBe(2.6)
    expect(calculaValorMacas(10)).toBe(13)
    expect(calculaValorMacas(11)).toBe(14.3)
    expect(calculaValorMacas(12)).toBe(12)
    expect(calculaValorMacas(12345)).toBe(12345)
})
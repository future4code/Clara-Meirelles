import { calculaIdadeAposentadoria } from "./exercicio7";

test('Verifica se o funcionário já tem idade mínima para se aposentar por: idade (65 anos), tempo de trabalho para se aposentar por tempo de trabalho (30 anos) ou idade E tempo de trabalho (60 e 25, respectivamente)', () => {
    expect(calculaIdadeAposentadoria(1950, 2021)).toBe(true)
    expect(calculaIdadeAposentadoria(1990, 2000)).toBe(false)
    expect(calculaIdadeAposentadoria(2002, 2020)).toBe(false)
    expect(calculaIdadeAposentadoria(1980, 1998)).toBe(false)
    expect(calculaIdadeAposentadoria(1973, 1991)).toBe(true)
    expect(calculaIdadeAposentadoria(1961, 1996)).toBe(true)
    expect(calculaIdadeAposentadoria(1961, 1999)).toBe(false)
})
import { calculaIdadeVoto } from "./exercicio5";

test('Verifica se a pessoa tem idade para votar (maior de 16 anos)', () => {
    expect(calculaIdadeVoto(2021, 1991)).toBe(true)
    expect(calculaIdadeVoto(2021, 2010)).toBe(false)
    expect(calculaIdadeVoto(2021, 2019)).toBe(false)
    expect(calculaIdadeVoto(2021, 2005)).toBe(true)
    expect(calculaIdadeVoto(1991, 2021)).toBe(false)
})
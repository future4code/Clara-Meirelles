import { idadeEmDias } from "./exercicio2";

test('verifica retorno da idade em dias', () => {
    expect(idadeEmDias(1, 0, 0)).toBe(365)
    expect(idadeEmDias(0, 0, 1)).toBe(1)
    expect(idadeEmDias(0, 1, 0)).toBe(30)
    expect(idadeEmDias(1, 1, 1)).toBe(396)
    expect(idadeEmDias(8, 5, 29)).toBe(3099)
})
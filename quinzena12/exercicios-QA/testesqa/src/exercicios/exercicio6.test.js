import { verificaTriangulo } from "./exercicio6";

test('Verifica se as medidas são relativas a um triângulo. Nenhum lado pode ser maior ou igual que a soma dos outros dois.', () => {
    expect(verificaTriangulo(10, 3, 3)).toBe(false)
    expect(verificaTriangulo(1, 3, 3)).toBe(true)
    expect(verificaTriangulo(10, 10, 10)).toBe(true)
    expect(verificaTriangulo(8, 2, 5)).toBe(false)
    expect(verificaTriangulo(11, 10, 1)).toBe(false)
    expect(verificaTriangulo(10, 11, 1)).toBe(false)
    expect(verificaTriangulo(0, 0, 0)).toBe(false)
    expect(verificaTriangulo(0, 0, 1)).toBe(false)
    expect(verificaTriangulo(0, 1, 1)).toBe(false)
    expect(verificaTriangulo(1, 1, 0)).toBe(false)
    expect(verificaTriangulo(1, 0, 1)).toBe(false)
    expect(verificaTriangulo(0, 1, 0)).toBe(false)
    expect(verificaTriangulo(1, 0, 0)).toBe(false)
    expect(verificaTriangulo(1, 1, 1)).toBe(true)
    expect(verificaTriangulo(1, 1, 11)).toBe(false)
})
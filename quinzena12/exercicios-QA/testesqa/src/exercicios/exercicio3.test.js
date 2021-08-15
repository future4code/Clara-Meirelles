import { verificaValor } from "./exercicio3";

// test('string',()=>{
//     expect(funcao(valor)).metodo(valor)
// })

test('verifica se retorna true apenas quando o valor for maior que 10', () => {
    expect(verificaValor(1)).toBe(false)
    expect(verificaValor(10)).toBe(false)
    expect(verificaValor(11)).toBe(true)
    expect(verificaValor(21)).toBe(true)
    expect(verificaValor(9)).toBe(false)
    expect(verificaValor(7)).toBe(false)
    expect(verificaValor(-10)).toBe(false)
})
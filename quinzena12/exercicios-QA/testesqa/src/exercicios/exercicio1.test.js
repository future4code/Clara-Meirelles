import { retornaAntecessor } from "./exercicio1";

// test('string',()=>{
//     expect(funcao(valor)).metodo(valor)
// })

test ('Verifica se a função está retornando o número anterior ao numero digitado (resultado = n - 1)', () => {
    expect(retornaAntecessor(1)).toBe(0)
    expect(retornaAntecessor(100)).toBe(99)
    expect(retornaAntecessor(123)).toBe(122)
    expect(retornaAntecessor(1048)).toBe(1047)
})
// Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito:

// - Ter no mínimo 65 anos de idade.
// - Ter trabalhado no mínimo 30 anos.
// - Ter no mínimo 60 anos **e** ter trabalhado no mínimo 25 anos.

// Com base nas informações acima, escreva uma função que receba: o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá retornar true caso o empregado esteja qualificado, e false caso contrário.

export function calculaIdadeAposentadoria(anoNascimento, anoContratacao){
    const anoAtual = 2021
    const idadeFuncionario = anoAtual - anoNascimento
    const tempoTrabalho = anoAtual - anoContratacao
    if(idadeFuncionario >= 65 || tempoTrabalho >= 30 || (idadeFuncionario >= 60 && tempoTrabalho >= 25)){
        return true
    }
    return false
}
import React from 'react'

export default class DadosGerais extends React.Component {

    render() {
        return (
            <>
                <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>5. Porque você não terminou um curso de graduação?</p>
                <input type="text" />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Curso Técnico</option>
                    <option>Curso de inglês</option>
                    <option>Nenhum</option>
                </select>
            </>
        );
    }
}
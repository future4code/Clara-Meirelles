import React from 'react'

export default class PerguntasAbertas extends React.Component {


    render() {
        const renderizarPerguntasAbertas = () => {
            if (this.props.pagina === "DadosGerais") {
                return (<>
                <p>{this.props.pergunta}</p>
          <input type="text" onChange={this.onChangeNome}/>
          <p>{this.props.pergunta}</p>
          <input type="text" onChange={this.onChangeIdade}/>
          </>)
            }
        }
        return (
            <>
                {renderizarPerguntasAbertas()}
            </>
        );
    }
}
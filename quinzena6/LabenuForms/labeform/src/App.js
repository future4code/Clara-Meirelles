import './App.css';
import React from 'react';
import styled from 'styled-components'

import DadosGerais from './components/DadosGerais.js'
import InfosEnsinoSuperior from './components/InfosEnsinoSuperior'
import InfosGeraisEnsino from './components/InfosGeraisEnsino'
import Agradecimento from './components/Agradecimento.js'

const AppStyle = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

export default class App extends React.Component {
  state = {
    pagina: "DadosGerais",
    escolaridade: 0,
    camposCompletos: false
  }

  proximoFormulario = () => {
    if (this.state.camposCompletos) {
      if (this.state.pagina === "DadosGerais") {
        this.state.escolaridade === 0 ?
          alert('Selecione o nível de escolaridade') :
          this.state.escolaridade > 2 ?
            this.setState({ pagina: "InfosEnsinoSuperior" }) :
            this.setState({ pagina: "InfosGeraisEnsino" })
      } else {
        this.setState({ pagina: "Agradecimento" })
      }
    }
    else {
      alert("preencha todos os campos!")
    }
  }

  selecionaEscolaridade = (e) => {
    this.setState({ escolaridade: e.target.value })
  }

  passarFormulario = () => {
    this.setState({ camposCompletos: true })
  }

  render() {
    const renderizarPagina = () => {
      if (this.state.pagina === "DadosGerais") {
        return <DadosGerais proximoFormulario={this.proximoFormulario}
          selecionaEscolaridade={this.selecionaEscolaridade}
          passarFormulario={this.passarFormulario} />
      } else if (this.state.pagina === "InfosEnsinoSuperior") {
        return <InfosEnsinoSuperior proximoFormulario={this.proximoFormulario} />
      } else if (this.state.pagina === "InfosGeraisEnsino") {
        return <InfosGeraisEnsino proximoFormulario={this.proximoFormulario} />
      } else {
        return <Agradecimento proximoFormulario={this.proximoFormulario} />
      }

    }

    const botao = () => {
      return (
        this.state.pagina !== "Agradecimento" &&
        <button onClick={this.proximoFormulario}>Próxima Etapa</button>
      )
    }
    return (<AppStyle>
      { renderizarPagina()}
      <hr />
      {botao()}

    </AppStyle >)

  }
}
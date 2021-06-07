import React from 'react'
import TelaAdicionar from './components/TelaAdicionar'
import TelaListaUsuarios from './components/TelaListaUsuarios'
import styled from 'styled-components'

const Pagina = styled.div`
width: 50vw;
min-height: 50vh;
display: flex;
margin: 0 auto;
justify-content: center;
border: 1px solid black;

h1{
  margin: 8vh;
}

input{
  margin-bottom: 16px;
}
button{
  margin: 16px 0;
}
`


export default class App extends React.Component {
  state = {
    adicionarUsuario: true,
    usuarioVerMais: "",
    telaVerListaUsuarios: false,
  }

  acessaTelaNovoUsuario = () => {
    this.setState({
      adicionarUsuario: true,
      telaVerListaUsuarios: false,
      usuarioVerMais: false,
    })
  }

  acessaListadeUsuarios = () => {
    this.setState({
      adicionarUsuario: false,
      telaVerListaUsuarios: true,
    })
  }

  render() {
    const renderizarPagina = () => {
      if (this.state.adicionarUsuario) {
        return (
          <>
            <TelaAdicionar
              acessaListadeUsuarios={this.acessaListadeUsuarios}
              verMais={this.verMais}
            />
          </>)
      } else if (this.state.telaVerListaUsuarios) {
        return <TelaListaUsuarios
          acessaTelaNovoUsuario={this.acessaTelaNovoUsuario}
          acessaListadeUsuarios={this.acessaListadeUsuarios}
          verMais={this.verMais}
        />
      }
    }
    return (
      <div className="App">
        <Pagina>
          {renderizarPagina()}
        </Pagina>
      </div>
    );
  }
}



import React from 'react'
import TelaAdicionar from './components/TelaAdicionar'
import TelaListaUsuarios from './components/TelaListaUsuarios'

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
        {renderizarPagina()}
      </div>
    );
  }
}



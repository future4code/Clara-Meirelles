import React from 'react'
import axios from 'axios'
import './App.css';

export default class App extends React.Component {
  state = {
    usuarios: [],
    nomeUsuario: "",
    emailUsuario: "",
    adicionarUsuario: true,
    usuarioVerMais: "",
  }

  onChangeNomeUsuario = (e) => {
    this.setState({ nomeUsuario: e.target.value })
  }

  onChangeEmailUsuario = (e) => {
    this.setState({ emailUsuario: e.target.value })
  }

  onClickEnviarUsuario = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario,
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: 'clara-meirelles-munoz'
      }
    }).then(() => {
      this.setState({
        nomeUsuario: "",
        emailUsuario: "",
      })
      alert("Usuário adicionado à lista!")
    }).catch(() => {
      alert("Preencha todos os campos! ou Usuário já existente!")
    })
  }

  acessaListadeUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: 'clara-meirelles-munoz'
      }
    }).then((resposta) => {
      this.setState({
        usuarios: resposta.data,
        telaVerListaUsuarios: true,
        adicionarUsuario: false,
      })
    }).catch((erro) => {
      alert("Erro ao buscar a lista de usuários:", erro.resposta.data)
    })
  }

  voltarTelaNovoUsuario = () => {
    this.setState({
      adicionarUsuario: true,
      telaVerListaUsuarios: false,
      usuarioVerMais: false,
    })
  }

  removerUsuario = (id) => {

    if (window.confirm("Você realmente deseja deletar este usuário?")) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
          Authorization: 'clara-meirelles-munoz'
        }
      }).then(() => {
        this.acessaListadeUsuarios()
        alert("Usuário deletado!")
      }).catch((erro) => {
        alert("Erro ao remover usuário.", erro)
      })
    }

  }

  onClickVerMais = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: 'clara-meirelles-munoz'
      }
    }).then((resposta) => {
      this.setState({
        usuarioVerMais: resposta.data,
        adicionarUsuario: false,
        telaVerListaUsuarios: false,
      })
    }).catch(() => {
      alert("Erro ao buscar usuário.")
    })

  }


render() {
  const renderizarPagina = () => {
    if (this.state.adicionarUsuario) {
      return (
        <>
          <h1>Adicionar Novo Usuário</h1>
          <label name={"inputNome"}>Nome:</label>
          <input type="text" onChange={this.onChangeNomeUsuario} value={this.state.nomeUsuario} />
          <br />
          <label>E-mail:</label>
          <input type="text" onChange={this.onChangeEmailUsuario} value={this.state.emailUsuario} />
          <br />
          <button onClick={this.onClickEnviarUsuario}>Enviar</button>
          <hr />
          <button onClick={this.acessaListadeUsuarios}>Ver todos os usuários</button>
        </>
      )
    } else if (this.state.telaVerListaUsuarios) {
      return (<>
        <h1>Lista de Usuários</h1>
        {this.state.usuarios.map((usuario) => {
          return <div key={usuario.id}>
            <p>{usuario.name}</p>
            <button onClick={() => { this.onClickVerMais(usuario.id) }}>Ver detalhes do Usuario</button>
            <button onClick={() => { this.removerUsuario(usuario.id) }}>RemoverUsuario</button>
          </div>
        })}
        <hr />
        <button onClick={this.voltarTelaNovoUsuario}>Adicionar novo Usuário</button>
      </>)
    } else {
      return <>
        <h1>Detalhes do Usuário</h1>
        <p>{this.state.usuarioVerMais.name} - {this.state.usuarioVerMais.email}</p>
        <hr />
        <button onClick={this.voltarTelaNovoUsuario}>Adicionar novo Usuário</button>
        <button onClick={this.acessaListadeUsuarios}>Voltar à lista de usuários</button>
      </>
    }
  }
  return (
    <div className="App">
      {renderizarPagina()}
    </div>
  );
}
}



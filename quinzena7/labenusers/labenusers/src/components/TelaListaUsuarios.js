import React from 'react'
import axios from 'axios'
import RemoverCadastro from './RemoverCadastro.js'
import VerMaisDetalhes from './VerMaisDetalhes.js'
import styled from 'styled-components'

const CardLista = styled.div`
width: 30vw;
display: flex;
align-items: center;
justify-content: space-between;
border: 1px black solid;
padding: 0 1%;
margin: 1%;

p{
    color: red;
    font-weight: bold;
}
`

export default class TelaListaUsuarios extends React.Component {

    state = {
        usuarios: [],
        verLista: true,
        idSelecionada: "",
        usuarioVerMais: {}
    }

    componentDidMount = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: 'clara-meirelles-munoz'
            }
        }).then((resposta) => {
            this.setState({
                usuarios: resposta.data,
            })
        }).catch(() => {
            alert("Erro ao buscar a lista de usuários")
        })
    }

    onClickVerMais = (id) => {
        this.setState({
            verLista: false,
            idSelecionada: id
        })
      }

      voltarParaLista = () => {
        this.setState({
            verLista: true,
        })  
        this.componentDidMount()
      }

    render() {
        const exibirListaOuDetalhes = () => {
            if (this.state.verLista) {
                return (
                    <div>
                        <button
                            onClick={this.props.acessaTelaNovoUsuario}>
                            Cadastrar novo Usuário
                            </button>
                        <hr />
                        <h1>Lista de Usuários</h1>
                        {this.state.usuarios.map((usuario) => {
                            return <CardLista key={usuario.id}>
                                <p>{usuario.name}</p>
                                <button
                                    onClick={() => {
                                        this.onClickVerMais(usuario.id)
                                    }}>
                                    Ver detalhes
                                </button>
                                <RemoverCadastro
                                    id={usuario.id}
                                    componentDidMount={this.componentDidMount}
                                    voltarParaLista = {this.voltarParaLista}
                                />
                            </CardLista>
                        })}

                    </div>
                )
            } else {
               return <VerMaisDetalhes 
               id={this.state.idSelecionada} 
               acessaTelaNovoUsuario={this.props.acessaTelaNovoUsuario}
               voltarParaLista={this.voltarParaLista}
               />
            }
        }
        return (
            <>
                {exibirListaOuDetalhes()}
            </>)
    }
}
import React from 'react'
import axios from 'axios'
import RemoverCadastro from './RemoverCadastro'
import styled from 'styled-components'

const CardUsuario = styled.div`
width: fit-content;
display: flex;
justify-content: space-between;
align-items: center;

button{
    margin-left: 25px;
}
`

export default class VerMaisDetalhes extends React.Component {

    state = {
        usuario: {},
    }

    componentDidMount = () => {
        const id = this.props.id
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: 'clara-meirelles-munoz'
            }
        }).then((resposta) => {
            this.setState({
                usuario: resposta.data,
            })

        }).catch(() => {
            alert("Erro ao buscar cadastro.")
        })

    }



    render() {
        return (
            <>
                <button onClick={this.props.acessaTelaNovoUsuario}>Adicionar novo Usuário</button>
                <button onClick={this.props.voltarParaLista}>Voltar à lista de usuários</button>
                <hr />
                <h1>Detalhes do Cadastro</h1>
                <CardUsuario>
                    <p>{this.state.usuario.name} - {this.state.usuario.email}</p>
                    <RemoverCadastro
                        id={this.state.usuario.id}
                        componentDidMount={this.componentDidMount}
                    />
                </CardUsuario>



            </>
        )
    }
}
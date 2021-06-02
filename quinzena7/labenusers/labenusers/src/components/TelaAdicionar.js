import React from 'react'
import axios from 'axios'

export default class TelaAdicionar extends React.Component {
    state = {
        nome: "",
        email: "",
    }

    onChangeNome = (e) => {
        this.setState({ nome: e.target.value })
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onClickEnviar = () => {
        const body = {
            name: this.state.nome,
            email: this.state.email,
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: 'clara-meirelles-munoz'
            }
        }).then(() => {
            this.setState({
                nome: "",
                email: "",
            })
            alert("Usuário adicionado à lista!")
        }).catch(() => {
            if (this.state.nome === "" || this.state.email === "") {
                alert("Preencha todos os campos!")
            } else {
                alert("Usuário já existente!")
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Adicionar Novo Usuário</h1>
                <label name={"inputNome"}>Nome:</label>
                <input
                    onChange={this.onChangeNome}
                    value={this.state.nome}
                />
                <br />
                <label>E-mail:</label>
                <input
                    onChange={this.onChangeEmail}
                    value={this.state.email}
                />
                <br />
                <button onClick={this.onClickEnviar}>Adicionar</button>
                <hr />
                <button onClick={this.props.acessaListadeUsuarios}>Ver todos os usuários</button>
            </div>
        )
    }
}
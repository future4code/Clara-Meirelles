import React from 'react'
import axios from 'axios'

export default class RemoverCadastro extends React.Component {
    removerCadastro = (id) => {
        if (window.confirm("Você realmente deseja deletar este cadastro?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
                headers: {
                    Authorization: 'clara-meirelles-munoz'
                }
            }).then(() => {
                this.props.componentDidMount()
                alert("Cadastro deletado!")
            }).catch(() => {
                alert("Erro ao remover cadastro.")
            })
        }

    }
    render() {
        return <button onClick={() => { this.removerCadastro(this.props.id) }}>x</button>
    }
}
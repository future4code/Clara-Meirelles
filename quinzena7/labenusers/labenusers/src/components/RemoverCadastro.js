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
                alert("Cadastro deletado!")
                if (this.props.voltarParaLista) {
                    this.props.voltarParaLista()

                }
                this.props.componentDidMount()

            }).catch(() => {
                alert("Erro ao remover cadastro.")
            })
        }

    }
    render() {
        return <button onClick={() => { this.removerCadastro(this.props.id) }}>x</button>
    }
}
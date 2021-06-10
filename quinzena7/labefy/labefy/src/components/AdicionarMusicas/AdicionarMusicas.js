import React from 'react'
import axios from 'axios'
import { ContainerAdicionarMusicas } from './styled.js'

export default class CriaPlaylist extends React.Component {
    state = {
        musicaNome: "",
        musicaArtista: "",
        musicaUrl: "",
    }

    onChangeMusicaNome = (e) => {
        this.setState({ musicaNome: e.target.value })
    }

    onChangeMusicaArtista = (e) => {
        this.setState({ musicaArtista: e.target.value })
    }

    onChangeMusicaLink = (e) => {
        this.setState({ musicaUrl: e.target.value })
    }

    onClickEnviarMusica = () => {

        const body = {
            name: this.state.musicaNome,
            artist: this.state.musicaArtista,
            url: this.state.musicaUrl
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, body, {
            headers: {
                Authorization: 'clara-meirelles-munoz'
            }
        }).then(() => {
            alert("Musica Adicionada!")
            this.setState({
                musicaNome: "",
                musicaArtista: "",
                musicaUrl: "",
            })
            this.props.atualizarMusicas()
        }).catch(() => {
            alert("erro ao adicionar música.")
        })
    }

    render() {
        return (
            <ContainerAdicionarMusicas>
                <input placeholder={"Nome da Musica"} onChange={this.onChangeMusicaNome} value={this.state.musicaNome} />
                <input placeholder={"Artista ou Banda"} onChange={this.onChangeMusicaArtista} value={this.state.musicaArtista} />
                <input placeholder={"Url da Música"} onChange={this.onChangeMusicaLink} value={this.state.musicaUrl} />
                <button onClick={this.onClickEnviarMusica} >Enviar Musica</button>
            </ContainerAdicionarMusicas>
        )
    }
}
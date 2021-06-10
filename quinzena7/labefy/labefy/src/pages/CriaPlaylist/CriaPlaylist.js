import React from 'react'
import axios from 'axios'
import { ContainerCriaPlaylist } from './styled.js'

export default class CriaPlaylist extends React.Component {
    state = {
        arrayPlaylists: [],
        novaPlaylist: "",
    }

    onChangeNomePlaylist = (e) => {
        this.setState({ novaPlaylist: e.target.value })
    }

    onClickEnviarPlaylist = () => {
        const atualizaArrayPlaylists = [...this.state.arrayPlaylists, this.state.novaPlaylist]
        this.setState({ arrayPlaylists: atualizaArrayPlaylists })
        const body = {
            name: this.state.novaPlaylist
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization: 'clara-meirelles-munoz'
            }
        }).then(() => {
            alert("playlist criada!")
            this.setState({ novaPlaylist: "" })
        }).catch(() => {
            alert("erro ao criar playlist")
        })
    }

    render() {
        return (
            <ContainerCriaPlaylist>
                <h3>Adicionar nova Playlist</h3>
                <section>
                    <input placeholder={"Nome da Playlist"} onChange={this.onChangeNomePlaylist} value={this.state.novaPlaylist} />
                    <button onClick={this.onClickEnviarPlaylist} >Criar Playlist</button>
                </section>
                <button onClick={this.props.onClickListaPlaylists}><h3>Ver Playlists</h3></button>
            </ContainerCriaPlaylist>
        )
    }
}
import React from 'react'
import axios from 'axios'
import { ContainerVerPlaylists, CardPlaylist } from './styled.js'
import VerMusicas from '../VerMusicas/VerMusicas.js'

export default class VerTodasPlaylists extends React.Component {
    state = {
        arrayPlaylists: [],
        verPlaylists: true,
        nomePlaylistSelecionada: "",
        idPlaylistSelecionada: "",
        verMusicas: false,
        arrayMusicas: [],
    }

    componentDidMount = () => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'clara-meirelles-munoz'
            }
        }).then((resposta) => {
            const recebeArrayPLaylists = resposta.data.result.list
            this.setState({
                arrayPlaylists: recebeArrayPLaylists,
                verMusicas: false,
            })
        }).catch(() => {
            alert("erro ao localizar playlists")
        })
    }

    componentDidUpdate = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'clara-meirelles-munoz'
            }
        }).then((resposta) => {
            const recebeArrayPLaylists = resposta.data.result.list
            this.setState({
                arrayPlaylists: recebeArrayPLaylists,
            })
        }).catch(() => {
            alert("erro ao localizar playlists")
        })
    }

    selecionarPlaylist = (playlist) => {
        const id = playlist.id
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: 'clara-meirelles-munoz'
            }
        }).then(() => {
            this.setState({
                idPlaylistSelecionada: id,
                nomePlaylistSelecionada: playlist.name,
                verPlaylists: false,
                verMusicas: true,
            })
        }).catch(() => {
            alert("erro ao localizar musicas da playlist")
        })
    }

    voltarParaPlaylists = () => {
        this.setState({ verPlaylists: true })
    }

    removerPLaylist = (id) => {
        if (window.confirm("Você deseja remover esta playlist?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
                headers: {
                    Authorization: 'clara-meirelles-munoz'
                }
            }).then(() => {
                alert("playlist removida!")
                this.componentDidMount()
            }).catch((erro) => {
                alert("Erro ao remover Playlist")
            })
        }

    }


    render() {
        const renderizarPaginaPlaylists = () => {
            if (this.state.verPlaylists) {
                return (<>
                    <h3>Suas Playlists</h3>
                    {this.state.arrayPlaylists.map((playlist) => {
                        return (
                            <CardPlaylist key={playlist.id}>
                                <h2 id={playlist.id} onClick={() => this.selecionarPlaylist(playlist)} >{playlist.name}</h2>
                                <p onClick={() => { this.removerPLaylist(playlist.id) }}>❌</p>
                            </CardPlaylist>
                        )
                    })}
                </>)
            } else {
                return (
                    <>
                        <h3 onClick={this.voltarParaPlaylists}>Voltar para a lista de Playlists</h3>
                        <VerMusicas id={`${this.state.idPlaylistSelecionada}`} playlist={this.state.nomePlaylistSelecionada} />
                    </>)
            }
        }
        return (

            <ContainerVerPlaylists>
                {renderizarPaginaPlaylists()}
                <button onClick={this.props.onClickCriarPlaylist}><h2>Criar Nova Playlist</h2></button>
            </ContainerVerPlaylists>


        )
    }
}
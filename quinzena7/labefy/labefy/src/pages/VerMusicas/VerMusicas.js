import React from 'react'
import axios from 'axios'
import AdicionarMusicas from '../../components/AdicionarMusicas/AdicionarMusicas.js'
import { TelaMusicas, ExibePlaylist, CardMusica } from './styled.js'
import TocarMusica from '../../components/TocarMusica/TocarMusica.js'

export default class VerMusicas extends React.Component {

    state = {
        arrayMusicas: [],
        verMusicas: true,
        adicionarMusica: false,
        urlMusica: "",
    }

    componentDidMount = () => {
        this.receberMusicas()

    }

    receberMusicas = () => {
        const id = this.props.id
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: 'clara-meirelles-munoz'
            }
        }).then((resposta) => {
            this.setState({ arrayMusicas: resposta.data.result.tracks })
        }).catch(() => {
            alert("Erro ao localizar músicas da Playlist")
        })
    }

    adicionarMusicaAtivar = () => {
        this.setState({ adicionarMusica: true })
    }

    ouvirMusica = (url) => {
        this.setState({ urlMusica: url })
    }

    render() {
        const renderizarMusicas = this.state.arrayMusicas.map(musica => {
            return (
                <CardMusica key={musica.id}>
                    <p> {musica.name} </p>
                    <p>{musica.artist}</p>
                    <button onClick={() => { this.ouvirMusica(musica.url) }}>▶️</button>
                </CardMusica>
            )
        })

        const botaoAddMusicas = () => {
            if (this.state.adicionarMusica) {
                return <AdicionarMusicas id={this.props.id} atualizarMusicas={this.receberMusicas} />
            } else {
                return <button onClick={this.adicionarMusicaAtivar}>Adicionar Músicas à playlist</button>

            }
        }
        return (
            <TelaMusicas>
                <h1>{this.props.playlist}</h1>
                <ExibePlaylist>
                    {renderizarMusicas}
                </ExibePlaylist>
                {botaoAddMusicas()}
                <TocarMusica urlMusica={this.state.urlMusica} />
            </TelaMusicas>
        )
    }
}
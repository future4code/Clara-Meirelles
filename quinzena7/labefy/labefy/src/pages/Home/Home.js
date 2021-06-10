import React from 'react'

export default class Home extends React.Component {

    onClickCriar = () => {
        this.props.onClickCriarPlaylist()
    }

    onClickListar = () => {
        this.props.onClickListaPlaylists()
    }
    render() {
        return (
            <>
                <h1>Explore o seu Labefy!</h1>

                <section>
                    <button onClick={this.onClickListar}><h2>Suas Playlists</h2></button>
                    <button onClick={this.onClickCriar}><h2>Criar Nova Playlist</h2></button>
                </section>

            </>
        )
    }
}
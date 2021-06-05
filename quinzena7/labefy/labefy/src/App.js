import React from 'react'
import CriaPlaylist from './pages/CriaPlaylist/CriaPlaylist'
import VerTodasPlaylists from './pages/VerTodasPlaylists/VerTodasPlaylists'
import Home from './pages/Home/Home.js'
import { PaginaInicial } from './styled.js'
import GlobalStyle from './globalStyle'

export default class App extends React.Component {

  state = {
    paginaInicial: true,
    verPlaylists: false,
    criarPlaylist: false,
    adicionarMusicas: false,
  }

  onClickHome = () => {
    this.setState({
      paginaInicial: true,
      verPlaylists: false,
      criarPlaylist: false,
      adicionarMusicas: false,
    })
  }

  onClickListaPlaylists = () => {
    this.setState({
      paginaInicial: false,
      verPlaylists: true,
      criarPlaylist: false,
      adicionarMusicas: false,
    })
  }

  onClickCriarPlaylist = () => {
    this.setState({
      paginaInicial: false,
      verPlaylists: false,
      criarPlaylist: true,
      adicionarMusicas: false,
    })
  }

  render() {
    const renderizarPagina = () => {
      if (this.state.paginaInicial) {
        return <Home onClickListaPlaylists={this.onClickListaPlaylists} onClickCriarPlaylist={this.onClickCriarPlaylist} />
      } else if (this.state.verPlaylists) {
        return <VerTodasPlaylists onClickCriarPlaylist={this.onClickCriarPlaylist} />
      } else if (this.state.criarPlaylist) {
        return <CriaPlaylist onClickListaPlaylists={this.onClickListaPlaylists} />
      } else {
        alert("Erro ao carregar Labefy")
      }
    }
    return (
      <PaginaInicial>
        <GlobalStyle />
        <h1 onClick={this.onClickHome}> Labefy </h1>
        <div></div>
        <aside>
          <button onClick={this.onClickHome}><h2> Home </h2></button>
          <button onClick={this.onClickListaPlaylists}> <h2>Suas Playlists</h2></button>
          <hr />
          <button onClick={this.onClickCriarPlaylist}><h2>Criar Nova Playlist</h2></button>
        </aside>
        <section>
          {renderizarPagina()}
        </section>
      </PaginaInicial>
    );
  }
}



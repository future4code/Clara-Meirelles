import React, { useState } from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

import App from '../../App.js'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    arrayComentarios: []
  }

  onClickCurtida = () => {
    let contadorCurtidas

    if (this.state.curtido) {
      contadorCurtidas = this.state.numeroCurtidas - 1
    } else {
      contadorCurtidas = this.state.numeroCurtidas + 1
    }
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: contadorCurtidas
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    })
  }

  aoEnviarComentario = () => {
    const copiaArray = [...this.state.arrayComentarios]
    console.log("funcionando")
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    })

  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    const listaPosts = this.props.posts
    console.log(listaPosts)
    listaPosts.map((post, index) => {
      return (
        <Post key={index}>
          <PostHeader>
            <UserPhoto src={post.fotoUsuario} alt={'Imagem do usuario'} />
            <p>{post.nomeUsuario}</p>
          </PostHeader>
          <PostPhoto src={post.fotoPost} alt={'Imagem do post'} />

          <PostFooter>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
          </PostFooter>
          {componenteComentario}
        </Post>
      )
    })

    return <PostContainer>
      {listaPosts}
      {componenteComentario}
    </PostContainer>
  }
}

export default Post

/*
<PostHeader>
        <UserPhoto src={this.state.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
*/
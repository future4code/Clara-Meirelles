import React, { useState, useEffect } from 'react'
import { CardContainer, ImgPerfil, BackGroundBlur, DadosPerfil } from './styled.js'

export default function CardEscolha(props) {

  const [animacao, setAnimacao] = useState('')
  useEffect(() => {
    if (props.like) {
      setAnimacao('direita')
    } else {
      setAnimacao('esquerda')
    }
  }, [props.like])

  return (
    <CardContainer animation={animacao}>
        <BackGroundBlur src={props.perfil.photo} />
        <ImgPerfil src={props.perfil.photo} />
        <DadosPerfil>
          <h3>{props.perfil.name}, {props.perfil.age}</h3>
          <p>{props.perfil.bio}</p>
        </DadosPerfil>
    </CardContainer>
  );
}
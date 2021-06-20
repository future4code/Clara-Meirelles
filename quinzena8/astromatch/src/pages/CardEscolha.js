import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  border: 1px solid black;
  height: 100%;
  width: 90%;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  justify-self: center;
  border-radius: 10px;
  margin-top: 8px;
  color: white;
`
const ImgPerfil = styled.img`
  width: 100%;
  z-index:1;
  object-fit: scale-down;
`

const BackGroundBlur = styled.img`
position:absolute;
height: 100%;
width: 100%;
filter: blur(10px);
`

const DadosPerfil = styled.section`
position: absolute;
width: 100%;
height: fit-content;
bottom: 0;
padding: 8px;
box-sizing: border-box;
z-index: 2;
display: flex;
justify-content: flex-start;
flex-direction: column;
background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
left:0;
`

export default function CardEscolha(props) {

  return (
    <CardContainer>
      <>
        <BackGroundBlur src={props.perfil.photo} />
        <ImgPerfil src={props.perfil.photo} />
        <DadosPerfil>
          <h3>{props.perfil.name}, {props.perfil.age}</h3>
          <p>{props.perfil.bio}</p>
        </DadosPerfil>
      </>
    </CardContainer>
  );
}
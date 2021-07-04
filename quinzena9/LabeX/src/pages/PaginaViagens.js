import { useState, useEffect } from "react";
import { useGetData } from '../constants/api-data'
import Header from "../components/Header/Header.js";
import { useHistory } from "react-router";
import { CorpoPagina, Botao } from "../components/styled";

import styled from "styled-components";

const CardViagem = styled.article`
  justify-self: center;
  min-height: 35vh;
  height: fit-content;
  width: 40vw;
  margin: 3%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border: 3px solid rgba(187, 140, 209, 1);

  header{
    background-color: rgba(187, 140, 209, 1);
    color: white;
    height: 100%;
    
    h3{
      text-align: center;
      align-self: center;
    }
  }

  p{
    margin-left: 16px;
    :nth-child(3){
      flex-grow:1;
    }
  }
`

export default function PaginaViagens() {
  const [viagens, setViagens] = useState()
  const [recebeViagens, erro] = useGetData('/trips')
  const history = useHistory()
  useEffect(() => {
    { recebeViagens && setViagens(recebeViagens.trips) }
  }, [recebeViagens])

  const botaoViagens = (titulo, id) => {
    const token = localStorage.getItem('token')

    if (token === null) {
      return <Botao onClick={() => onClickInscricao(titulo, id)}>Inscreva-se para esta viagem</Botao>
    } else {
      return <Botao onClick={() => onClickDetalhes(titulo, id)}>Ver detalhes da viagem</Botao>
    }
  }

  const onClickInscricao = (titulo, id) => {
    history.push(`/inscricao-viagem/${titulo}/${id}`)
  }

  const onClickDetalhes = (titulo, id) => {
    history.push(`/detalhes-viagem/${titulo}/${id}`)
  }
  return (
    <CorpoPagina>
      <Header />
      <h1>Viagens disponíveis:</h1>
      {viagens && viagens.map((viagem) => {
        return (<CardViagem key={viagem.id}>
          <header>
          <h3>{viagem.name}</h3>
          </header>
          <p><strong>Planeta: </strong>{viagem.planet}</p>
          <p>{viagem.description}</p>
          <p><strong>Duração: </strong>{viagem.durationInDays} dias </p>
          {botaoViagens(viagem.name, viagem.id)}
        </CardViagem>)
      })}
    </CorpoPagina>
  )

}
import { useState, useEffect } from "react";
import { useGetData } from '../constants/api-data'
import Header from "../components/Header";
import { useHistory } from "react-router";

import styled from "styled-components";




export default function PaginaViagens() {
  const [viagens, setViagens] = useState()
  const recebeViagens = useGetData('trips')
  const history = useHistory()
  useEffect(() => {
    { recebeViagens && setViagens(recebeViagens.trips) }
  }, [recebeViagens])
  console.log(viagens)

  const botaoViagens = (id) => {
    const token = localStorage.getItem('token')

    if (token === null) {
      return <button onClick={() => onClickInscricao(id)}>Inscreva-se para esta viagem</button>
    } else {
      return <button onClick={() => onClickDetalhes(id)}>Ver detalhes da viagem</button>
    }
  }

  const onClickInscricao = (id) => {
    history.push(`/inscricao-viagem/${id}`)
  }

  const onClickDetalhes = (id) => {
    history.push(`/detalhes-viagem/${id}`)
  }
  return (
    <>
      <Header />
      <h1>Viagens disponíveis:</h1>
      {viagens && viagens.map((viagem) => {
        return (<div key={viagem.id}>
          <h3>{viagem.name}</h3>
          <h4>{viagem.planet} </h4>
          <p>{viagem.description} </p>
          <p>{viagem.id}</p>
          {botaoViagens(viagem.id)}
        </div>)
      })}
    </>
  )

}
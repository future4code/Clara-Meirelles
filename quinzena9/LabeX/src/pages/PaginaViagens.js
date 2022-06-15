import { useState, useEffect } from "react";
import { useGetData } from '../constants/api-data'
import Header from "../components/Header";

export default function PaginaViagens() {
  const [viagens, setViagens] = useState()
  const recebeViagens = useGetData('trips')
  useEffect(() => {
    {recebeViagens && setViagens(recebeViagens.trips)}
  }, [recebeViagens])
  return (
    <>
    <Header />
      <h1>Viagens disponíveis:</h1>
      {viagens && viagens.map((viagem) => {
        return (<div key={viagem.id}>
          <h3>{viagem.name}</h3>
          <h4>{viagem.planet} </h4>
          <p>{viagem.description} </p>
        </div>)
      })}
    </>
)

}
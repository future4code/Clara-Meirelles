import { useState, useEffect } from "react";
import axios from "axios";

export default function PaginaViagens() {
  const [viagens, setViagens] = useState([])
  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/trips')
      .then((resposta) => {
        setViagens(resposta.data.trips)
      })
  }, []
  )

  console.log(viagens)
  return (
    <div>
      Página Viagens
      {viagens.map((viagem) => {
        <>
        <h3>{viagem.name}</h3>
        <p>{viagem.planet} </p>
        <p>{viagem.description} </p>
        </>
      })}
    </div>
  );
}
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from "axios";
import PokeCard from "./components/PokeCard";

const ContainerApp = styled.div`
  font-family: sans-serif;
  text-align: center;
`

export default function App() {
  const [pokeList, setPokelist] = useState([])
  const [pokeName, setPokename] = useState("")


  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokelist(response.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, []

  )

  const changePokeName = (event) => {
    setPokename(event.target.value);
  };


  return (
    <ContainerApp>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </ContainerApp>
  );
}

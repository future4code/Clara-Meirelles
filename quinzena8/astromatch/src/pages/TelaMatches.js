import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const TelaExibeMatch = styled.div`
overflow-y: scroll;
height: 100%;
`

const CardMatch = styled.section`
display: flex;
padding: 8px;
align-items: center;

:hover{
  background-color: lightgray;
}

:active{
  background-color: darkgray;
}
`
const ImagemMatch = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin-right: 16px;

`
export default function TelaMatches() {
  const [matches, setMatches] = useState([])
  useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/clara/matches')
      .then((resposta) => {
        console.log(resposta.data.matches)
        setMatches(resposta.data.matches)

      }).catch(() => {
        alert("ocorreu um erro")
      })
  }, [])

  const exibeMatches = matches.map((match) => {
    return (
      <CardMatch>
        <ImagemMatch src={match.photo} />
        <p>{match.name}</p>
      </CardMatch>
    )
  })
  return (
    <TelaExibeMatch>
      {exibeMatches}
    </TelaExibeMatch>
  );
}
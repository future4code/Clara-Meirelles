import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TelaExibeMatch, CardMatch, ImagemMatch } from './styled.js'
import { data_Url } from '../../constants/data-url.js'

export default function TelaMatches() {
  const [matches, setMatches] = useState([])
  useEffect(() => {
    axios.get(`${data_Url}/matches`)
      .then((resposta) => {
        setMatches(resposta.data.matches)
      }).catch(() => {
        alert("ocorreu um erro")
      })
  }, [])

  const exibeMatches = matches.map((match) => {
    return (
      <CardMatch key={match.id}>
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
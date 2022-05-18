import Header from '../components/Header.js'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

const BotaoHome = styled.button`
  background-color: rgba(154, 131, 219, 1);
  border-color: rgba(145, 122, 210, 1);
  color:white;
  height: 30vh;
  width: 20vw;
`

const CorpoPagina = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 10vh 10vh 1fr 10vh;
  align-items: center;
  nav{
    display: flex;
    justify-content: space-evenly;
  }
`

export default function PaginaPrincipal() {
  const history = useHistory()

  const onClickViagens = () => {
    history.push('/viagens')
  }

  const onClickLogin = () => {
    history.push('/login')
  }
  return (
    <CorpoPagina>
      <Header />
      <section>
        <h1>LabeX </h1>
        <p>Explore o site e conheça nossas viagens!</p>
      </section>
      <nav>
        <BotaoHome onClick={onClickViagens}><h1>Conheça Nossas Viagens</h1></BotaoHome>
        <BotaoHome onClick={onClickLogin}><h1>Login</h1></BotaoHome>
      </nav>
    </CorpoPagina>
  );
}
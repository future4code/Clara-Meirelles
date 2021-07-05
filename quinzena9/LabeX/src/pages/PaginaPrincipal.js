import Header from '../components/Header/Header.js'
import { useHistory } from 'react-router-dom'
import { BotaoGrande, CorpoPagina, DisplayBotoesGrandes, FonteLabeX } from '../components/styled.js'


export default function PaginaPrincipal() {
  const history = useHistory()

  const onClickMudaPagina = (path) => {
    history.push(path)
  }

  return (
    <CorpoPagina>
      <Header />
      <section>
        <FonteLabeX>LabeX </FonteLabeX>
        <p>Explore o site e conheça nossas viagens!</p>
      </section>
      <DisplayBotoesGrandes>
        <BotaoGrande onClick={() => onClickMudaPagina('/viagens')}><h1>Conheça Nossas<br /> Viagens</h1></BotaoGrande>
        <BotaoGrande onClick={() => onClickMudaPagina('/login')}><h1>Login</h1></BotaoGrande>
      </DisplayBotoesGrandes>
    </CorpoPagina>
  );
}
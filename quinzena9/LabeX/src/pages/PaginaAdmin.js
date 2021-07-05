import { useHistory } from "react-router-dom"
import Header from "../components/Header/Header.js"
import { useAutenticacaoDeUsuario } from "../constants/useAutenticacaoUsuario"
import { DisplayBotoesGrandes, BotaoGrande, CorpoPagina, FonteLabeX } from "../components/styled.js"

export default function PaginaAdmin() {
    const history = useHistory()

    useAutenticacaoDeUsuario()

    const onClickMudaPagina = (path) => {
        history.push(path)
    }

    return (
        <CorpoPagina>
            <Header />
            <div>
            <FonteLabeX>LabeX</FonteLabeX>
            <h3>Edite ou crie viagens</h3>
            </div>
            <DisplayBotoesGrandes>
            <BotaoGrande onClick={() => onClickMudaPagina('/criar-viagem')}><h2>Criar Nova <br />Viagem</h2></BotaoGrande>
            <BotaoGrande onClick={() => onClickMudaPagina('/viagens')}><h2>Ver <br /> Viagens</h2></BotaoGrande>
            </DisplayBotoesGrandes>
        </CorpoPagina>
    )
}
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

const HeaderStyle = styled.header`
display: flex;
justify-content: flex-end;
background-color: rgba(187, 140, 209, 1);
height: 100%;
width: 100vw;
align-items: center;
margin: 0;
button{
    margin-right: 1vw;
    background-color: transparent;
    border: none;
    color: white;
    font-weight: bold;
}
`

export default function Header() {
    const history = useHistory()

    const onClickPaginaInicial = () => {
        history.push('/')
    }

    const onClickLogin = () => {
        history.push('/login')
    }

    const onClickViagens = () => {
        history.push('/viagens')
    }

    const onClickInscricao = () => {
        history.push('/inscricao-viagem')
    }

    return (
        <HeaderStyle>
            <button onClick={onClickPaginaInicial}>Página Inicial</button>
            <button onClick={onClickLogin}>Login</button>
            <button onClick={onClickViagens}>Ver Viagens</button>
            <button onClick={onClickInscricao}>Inscrição</button>
        </HeaderStyle>
    )
}
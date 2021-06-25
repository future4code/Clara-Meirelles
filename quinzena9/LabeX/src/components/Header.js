import { useHistory } from 'react-router-dom'


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
        <>
            <button onClick={onClickPaginaInicial}>Página Inicial</button>
            <button onClick={onClickLogin}>Login</button>
            <button onClick={onClickViagens}>Ver Viagens</button>
            <button onClick={onClickInscricao}>Inscrição</button>
        </>
    )
}
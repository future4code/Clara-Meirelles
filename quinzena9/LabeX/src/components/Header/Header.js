import { useHistory } from 'react-router-dom'
import { HeaderStyle } from './styled'

export default function Header() {
    const history = useHistory()
    const token = localStorage.getItem('token')
    
    const onClickMudaPagina = (path) => {
        history.push(path)
    }

    const logout = () => {
        localStorage.removeItem('token')
        onClickMudaPagina('/')
    }

    return (
        <HeaderStyle>
            <button onClick={() => onClickMudaPagina('/')}>Página Inicial</button>
            <button onClick={() => onClickMudaPagina('/viagens')}>Ver Viagens</button>
            {token ?
                <>
                    <button onClick={() => onClickMudaPagina('/criar-viagem')}>Criar nova viagem</button>
                    <button onClick={() => onClickMudaPagina('/pagina-admin')}>Área Administrativa</button>
                    <button onClick={logout}>Logout</button>
                </> :
                <button onClick={() => onClickMudaPagina('/login')}>Login</button>
            }
        </HeaderStyle>
    )
}
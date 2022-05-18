import { useHistory } from "react-router-dom"
import Header from "../components/Header"
import { useAutenticacaoDeUsuario } from "../constants/useAutenticacaoUsuario"

export default function PaginaAdmin() {
    const history = useHistory()

    useAutenticacaoDeUsuario()
    const onclickAreaCriarViagens = () => {
        history.push('/criar-viagem')
    }
    return (
        <>
            <Header />
            <h1>Olá!</h1>
            <button onClick={onclickAreaCriarViagens}>Criar Nova Viagem</button>
        </>
                )
}
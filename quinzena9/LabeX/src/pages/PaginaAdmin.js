import { useHistory } from "react-router-dom"
import Header from "../components/Header"

export default function PaginaAdmin() {
    const history = useHistory()
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
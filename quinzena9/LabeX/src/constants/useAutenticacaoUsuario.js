import { useEffect } from "react"
import { useHistory } from "react-router"

export const useAutenticacaoDeUsuario = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            history.push('/login')
        }
    })
}
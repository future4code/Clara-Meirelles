import axios from 'axios'
import { useState, useEffect } from 'react';

export const api_url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz'

export function useGetData(path) {
    const [dados, setDados] = useState()
    const token = localStorage.getItem('token')

    const recebeDados = () => {
        axios.get(`${api_url}${path}`, {
            headers: {
                auth: token
            }
        })
            .then((resposta) => {
                if (resposta.data !== dados) {
                    setDados(resposta.data);
                }
            })
            .catch((erro) => {
                console.log(erro)
            });
    }

    useEffect(() => {
        recebeDados()
    }, [])

    return [dados, recebeDados];
}
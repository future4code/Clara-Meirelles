import axios from 'axios'
import { useState, useEffect } from 'react';

export function useGetData(path) {
    const [dados, setDados] = useState()
    const recebeDados = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/${path}`)
            .then((resposta) => {
                setDados(resposta.data);
            })
            .catch((erro) => {
                console.log(erro)
            });
    }

    useEffect(() => {
        recebeDados()
    }, [])
    // console.log(dados)
    return dados;
}
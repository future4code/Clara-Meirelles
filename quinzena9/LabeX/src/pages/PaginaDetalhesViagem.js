import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../constants/api-data";
import { useAutenticacaoDeUsuario } from "../constants/useAutenticacaoUsuario";



export default function PaginaDetalhesViagem() {
    const [viagem, setViagem] = useState()
    const id = useParams()

    useAutenticacaoDeUsuario()

    const token = localStorage.getItem('token')

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/trip/${id}`, {
        headers: {
            auth: token
        }
    })
        .then((resposta) => {
            console.log(resposta)
            setViagem(resposta.data.trip)
        })
        .catch((erro) => console.log(erro))

    return (
        <>
            <p>Detalhes da viagem</p>
            {viagem ?
                <p>{viagem.name}</p> :
                <p> viagem não encontrada</p>}
        </>
    )
}
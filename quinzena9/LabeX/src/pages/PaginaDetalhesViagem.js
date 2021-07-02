import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAutenticacaoDeUsuario } from "../constants/useAutenticacaoUsuario";

export default function PaginaDetalhesViagem() {
    useAutenticacaoDeUsuario()

    const [viagem, setViagem] = useState()
    const pathParams = useParams()
    let [idAprovado, setIdAprovado] = useState('')
    const history = useHistory()
    const token = localStorage.getItem('token')
    
    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/trip/${pathParams.id}`, {
            headers: {
                auth: token
            }
        })
            .then((resposta) => {
                setViagem(resposta.data.trip)
            })
            .catch((erro) => console.log(erro))
    }, [idAprovado])

    const aprovarCandidato = (id, approve) => {
        const body = { approve: approve }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/trips/${pathParams.id}/candidates/${id}/decide`, body, {
            headers: {
                auth: token
            }
        })
            .then(() => {
                setIdAprovado(id)
            })
            .catch((erro) => console.log(erro))
    }

    const deletarViagem = () => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/trips/${pathParams.id}`, {
            headers: {
                auth: token
            }
        }).then(() => {
            history.push('/viagens')
        }).catch((erro) => console.log(erro))

    }

    return (
        <main>
            <Header />
            <p>Detalhes da viagem</p>
            <button onClick={deletarViagem}>Deletar viagem</button>
            {viagem &&
                <div>
                    <h2>{viagem.name}</h2>
                    <h3>{viagem.planet}</h3>
                    <p><strong>Data: </strong>{viagem.date}</p>
                    <p><strong>Duração: </strong>{viagem.durationInDays}</p>
                    <p><strong>Descrição: </strong>{viagem.description}</p>
                    <hr />
                    <h3>Candidatos aprovados</h3>
                    {viagem.approved.map((candidato) => {
                        return <p>{candidato.name}, {candidato.age}, {candidato.profession}, {candidato.country}</p>
                    })}
                    <h3>Candidatos cadastrados</h3>
                    <hr />
                    {viagem.candidates.map((candidato) => {
                        return (
                            <>
                                <h3>{candidato.name}, {candidato.age} </h3>
                                <p>{candidato.profession}, {candidato.country}</p>
                                <p>{candidato.applicationText}</p>
                                <button onClick={() => aprovarCandidato(candidato.id, true)} > Aprovar</button>
                                <button onClick={() => aprovarCandidato(candidato.id, false)} > Não Aprovado</button>
                            </>
                        )
                    })}
                </div>}
        </main>
    )
}
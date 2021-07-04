import axios from "axios";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAutenticacaoDeUsuario } from "../constants/useAutenticacaoUsuario";
import { api_url, useGetData } from "../constants/api-data";
import { Botao, CardViagem, CorpoPagina } from "../components/styled";

import styled from "styled-components";

const HeaderDetalhesViagem = styled.header`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
`

export default function PaginaDetalhesViagem() {
    useAutenticacaoDeUsuario()

    const pathParams = useParams()
    const history = useHistory()
    const token = localStorage.getItem('token')
    const [dados, erro] = useGetData(`/trip/${pathParams.id}`)
    const [viagem, setViagem] = useState()

    useEffect(() => {
        {
            dados ?
                setViagem(dados.trip) :
                console.log(erro)
        }
    }, [dados])

    const aprovarCandidato = (id, approve) => {
        const body = { approve: approve }

        axios.put(`${api_url}/trips/${pathParams.id}/candidates/${id}/decide`, body, {
            headers: {
                auth: token
            }
        })
            .then(() => {
            })
            .catch((erro) => console.log(erro))
    }

    const deletarViagem = () => {
        axios.delete(`${api_url}/trips/${pathParams.id}`, {
            headers: {
                auth: token
            }
        }).then(() => {
            history.push('/viagens')
        }).catch((erro) => console.log(erro))

    }

    return (
        <CorpoPagina>
            <Header />
            <p>Detalhes da viagem</p>
            {viagem &&
                <div>
                    <CardViagem>
                        <header>
                            <h1>{viagem.name}</h1>
                            <Botao onClick={deletarViagem}>Deletar viagem</Botao>
                        </header>
                        <h3>Planeta: {viagem.planet}</h3>
                        <p><strong>Data: </strong>{viagem.date}</p>
                        <p><strong>Duração: </strong>{viagem.durationInDays}</p>
                        <p><strong>Descrição: </strong>{viagem.description}</p>
                    </CardViagem>
                    {viagem.approved.length > 0 &&
                        <CardViagem>
                            <header>
                                <h3>Candidatos aprovados</h3>
                            </header>
                            {viagem.approved.map((candidato) => {
                                return <p key={candidato.id}>{candidato.name}, {candidato.age}, {candidato.profession}, {candidato.country}</p>
                            })}
                        </CardViagem>
                    }
                    {viagem.candidates.length > 0 &&
                        <CardViagem>
                            <header>
                                <h3>Candidatos cadastrados</h3>
                            </header>
                            {viagem.candidates.map((candidato) => {
                                return (
                                    <div key={candidato.id}>
                                        <h3>{candidato.name}, {candidato.age} </h3>
                                        <p>{candidato.profession}, {candidato.country}</p>
                                        <p>{candidato.applicationText}</p>
                                        <button onClick={() => aprovarCandidato(candidato.id, true)} > Aprovar</button>
                                        <button onClick={() => aprovarCandidato(candidato.id, false)} > Não Aprovado</button>
                                    </div>

                                )
                            })}
                        </CardViagem>
                    }
                </div>
            }
        </CorpoPagina>
    )
}
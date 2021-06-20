import React, { useState, useEffect } from 'react'
import Like from '../img/like.svg'
import Dislike from '../img/dislike.svg'
import styled from 'styled-components'
import axios from 'axios'
import { data_Url } from './data-url.js'

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img{
        height: 9vh;
    }

    img:hover{
        height: 10vh;
    }
`

export default function Footer(props) {
    const [like, setLike] = useState(null)
    useEffect(() => {
        const body = {
            id: props.id,
            choice: like
        }
        console.log("Body", body)
        axios.post(`${data_Url}/choose-person`, body, {})
            .then((resposta) => {
                console.log("Resposta", resposta)
            }).catch((erro) => {
                console.log("Erro", erro.data)
            })
        setLike(null)

    }, [like])

    const darLike = () => {
        console.log("dar Like ")
        setLike(true)
        props.curtirPerfil()

    }

    const darDislike = () => {
        setLike(false)
        props.descurtirPerfil()
    }

    return (
        <FooterContainer>
            <img src={Dislike} alt='descurtir' onClick={darDislike} />
            <img src={Like} alt='curtir' onClick={darLike} />
        </FooterContainer>
    );
}
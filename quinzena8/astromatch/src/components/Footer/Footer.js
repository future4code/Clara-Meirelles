import React, { useState, useEffect } from 'react'
import Like from '../../img/like.svg'
import Dislike from '../../img/dislike.svg'
import axios from 'axios'
import { data_Url } from '../../constants/data-url.js'
import { FooterContainer } from './styled.js'

export default function Footer(props) {
    const [like, setLike] = useState(null)

    useEffect(() => {

        const body = {
            id: props.id,
            choice: like
        }

        axios.post(`${data_Url}/choose-person`, body, {})
            .then(() => {
                setLike(null)
            }).catch(() => {
                alert('Ocorreu um erro inesperado! Atualize a página ou tente novamente mais tarde.')
            })

    }, [like])

    const darLike = () => {
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
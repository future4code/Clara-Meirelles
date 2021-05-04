import React from 'react';
import styled from 'styled-components'

const LayoutCardPequeno = styled.section`
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 10px 10px;
`

const ImgCardPequeno = styled.img`
    width: 35px;
    margin-right: 10px;
    border-radius: 50%;
`

const InfosCardPequeno = styled.div`
    display: flex;
    align-items: center;
`

const TituloCardPequeno = styled.h4`
    margin-right: 10px;
`

function CardPequeno(props) {

    return (
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.imagem} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.descricao}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
    )
}

export default CardPequeno
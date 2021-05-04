import React from 'react';
import styled from 'styled-components'

const LayoutCardGrande = styled.section`
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 200px;
    `
    
    const ImgCardGrande = styled.img`
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;
    `

    const InfosCardGrande = styled.div`
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    `

    const TituloCardGrande = styled.h4`
        margin-bottom: 15px;
    `

function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCardGrande>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}

export default CardGrande;
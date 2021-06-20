import React from 'react'
import Logo from '../img/logo.png'
import Chat from '../img/chat.svg'
import styled from 'styled-components'

const HeaderContainer = styled.header`
border-bottom: lightgray solid 1px;
display: grid;
grid-template-columns: 1fr 3fr 1fr;
justify-items:center;
align-items: center;

  img{
    height: 7vh;
    }
    h1{
        padding: 0 10%;
        color: rgb(69, 82, 91);
        justify-self:center;
    }
`

export default function Header(props) {
    const verMatches = () => {
        props.trocaTela()
    }

    const iconeChat = () => {
        if (props.tela !== 'matches'){
            return <img src={Chat} alt='chats' onClick={verMatches} />}
    }
    return (
        <HeaderContainer>
            <img src={Logo} alt='logo' onClick={verMatches} />
            <h1>AstroMatch</h1>
            {iconeChat()}
        </HeaderContainer>
    );
}
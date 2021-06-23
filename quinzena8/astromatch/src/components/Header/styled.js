
import styled from 'styled-components'

export const HeaderContainer = styled.header`
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